let Game = {};

Game.run = function (context) {
    this.ctx = context;

    let p = this.load();
    Promise.all(p).then(function () {
        this.init();
        this.render();
    }.bind(this));
};

// override these methods to create the demo
Game.init = function () {};
Game.render = function () {};

//
// start up function
//

window.onload = function () {
    let context = document.getElementById('tileMapGame').getContext('2d');
    Game.run(context);
};


let Loader = {
    images: {}
};

Loader.loadImage = function (key, src) {
    let img = new Image();

    let d = new Promise(function (resolve) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};
