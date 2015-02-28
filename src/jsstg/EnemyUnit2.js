/*
 *  EnemyData.js
 *  2015/02/10
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

//障害物
jsstg.obstacleUnit = [
{
    name: "box-rank0-1",
    rank: 0,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank0-2",
    rank: 0,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank0-3",
    rank: 0,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank0-3",
    rank: 0,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank0-3",
    rank: 0,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},

// rank 1
{
    name: "box-rank1-1",
    rank: 1,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.30 },
    ]
},
{
    name: "box-rank1-2",
    rank: 1,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.50 },
    ]
},

//rank2
{
    name: "box-rank1-1",
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank1-2",
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank1-3",
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
{
    name: "box-rank1-4",
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},

{
    name: "box-rank1-4",
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},
];

})();
