var map = [
    { 
        cols: 8,
        rows: 8,
        tsize: 64,
        tiles: [
        4, 2, 2, 2, 8, 2, 4, 2,
        2, 2, 2, 9, 1, 2, 1, 7,
        2, 5, 1, 1, 1, 2, 1, 5,
        4, 9, 1, 1, 1, 1, 1, 2,
        1, 1, 1, 1, 2, 2, 9, 2,
        1, 3, 5, 9, 2, 2, 2, 2,
        6, 3, 3, 4, 2, 2, 2, 2,
        3, 3, 3, 2, 2, 4, 2, 4,
        ]
    },
    { 
        cols: 8,
        rows: 8,
        tsize: 64,
        tiles: [
        2, 6, 2, 2, 2, 4, 2, 2,
        2, 8, 3, 3, 3, 3, 2, 2,
        2, 1, 5, 3, 3, 3, 4, 2,
        9, 1, 1, 9, 5, 2, 2, 2,
        2, 2, 2, 1, 1, 2, 2, 2,
        2, 2, 2, 2, 1, 1, 4, 2,
        2, 2, 4, 3, 3, 9, 1, 2,
        2, 2, 3, 3, 3, 2, 1, 7,
        ]
    },
    { 
        cols: 8,
        rows: 8,
        tsize: 64,
        tiles: [
        3, 3, 3, 6, 1, 1, 1, 8,
        3, 3, 3, 3, 3, 3, 1, 1,
        2, 4, 9, 3, 3, 3, 1, 1,
        4, 2, 1, 1, 5, 2, 2, 9,
        2, 2, 2, 9, 1, 2, 2, 1,
        2, 2, 2, 2, 1, 1, 4, 1,
        3, 3, 2, 2, 2, 1, 1, 1,
        3, 3, 2, 2, 2, 7, 1, 9,
        ]
    },
    { 
        cols: 8,
        rows: 8,
        tsize: 64,
        tiles: [
        6, 9, 1, 1, 1, 9, 1, 5,
        2, 2, 2, 2, 4, 3, 1, 1,
        2, 2, 2, 3, 3, 3, 5, 1,
        2, 2, 8, 1, 1, 3, 3, 1,
        2, 2, 2, 5, 1, 9, 3, 1,
        2, 2, 2, 2, 1, 1, 1, 1,
        2, 2, 2, 2, 1, 1, 1, 2,
        7, 1, 1, 1, 1, 1, 9, 4,
        ]
    },
]

let tileArray = [];
for ( let i in map) {
    let index = Math.floor(Math.random() * map.length);
    while(tileArray.includes(map[index])) {
        index = Math.floor(Math.random() * map.length)
    }
        tileArray[i] = map[index];
}
    //console.log(array2[0])
    //console.log(array2[0].tiles)
function newMap(col, row) {
    return tileArray[0].tiles[row * tileArray[0].cols + col];
}
//console.log(newMap())
    Game.render = function () {
        for (let c = 0; c < tileArray[0].cols; c++) {
            for (let r = 0; r < tileArray[0].rows; r++) {
                let singleTile = newMap(c, r);
                //console.log(tile)
                if (singleTile != 0) { // 0 => empty tile
                    this.ctx.drawImage(
                        this.tileAtlas, // image
                        (singleTile - 1) * tileArray[0].tsize, // source x
                        0, // source y
                        tileArray[0].tsize, // source width
                        tileArray[0].tsize, // source height
                        c * tileArray[0].tsize,  // target x
                        r * tileArray[0].tsize, // target y
                        tileArray[0].tsize, // target width
                        tileArray[0].tsize // target height
                    );
                }
            }
        }
    }

Game.load = function () {
    return [
        Loader.loadImage('tiles', '../assets/tiles.png')
    ];
};

Game.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
};