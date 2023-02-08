//tilemap and function that runs through array to select object(map) to randomly display
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
function newMap(col, row) {
    return tileArray[0].tiles[row * tileArray[0].cols + col];
}