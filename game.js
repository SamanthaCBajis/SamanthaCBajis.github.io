// loading of images and rendering if game
let gameObject = {};

// functions that create game
gameObject.init = function () {};
gameObject.render = function () {};

// game will run/load when promises are fulfilled
gameObject.run = function (context) {
    this.context = context;

    let p = this.load();
    Promise.all(p).then(function () {
        this.init();
        this.render();
    }.bind(this));
};

gameObject.render = function () {
    for (let c = 0; c < tileArray[0].cols; c++) {
        for (let r = 0; r < tileArray[0].rows; r++) {
            let singleTile = newMap(c, r);
            // if the tile is empty
            if (singleTile != 0) { 
                this.context.drawImage(
                    this.tileAtlas,
                    // takes into account tiles width and height
                    (singleTile - 1) * tileArray[0].tsize,
                    0,
                    tileArray[0].tsize,
                    tileArray[0].tsize,
                    c * tileArray[0].tsize,
                    r * tileArray[0].tsize,
                    tileArray[0].tsize,
                    tileArray[0].tsize
                );
            }
        }
    }
} // renders the gameObject, aka the tilemap

window.onload = function () {
    let context = document.getElementById('tileMapGame').getContext('2d');
    gameObject.run(context);
}; //function to start


let imageLoader = {
    images: {}
};

imageLoader.loadImage = function (key, src) {
    let img = new Image();

    let pr = new Promise(function (resolve) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);
    }.bind(this));

    img.src = src;
    return pr;
};

imageLoader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

gameObject.load = function () {
    return [
        imageLoader.loadImage('tiles', '/assets/tiles.png')
    ];
};

gameObject.init = function () {
    this.tileAtlas = imageLoader.getImage('tiles');
};