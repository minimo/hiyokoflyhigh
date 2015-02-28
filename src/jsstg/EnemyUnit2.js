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
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.40 },
    ]
},{
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.60 },
    ]
},{
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.2, "y":SC_H*0.50 },
    ]
},

{
    rank: 3,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},{
    rank: 3,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.70 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},{
    rank: 3,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.80 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},{
    rank: 2,
    enemies: [
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.00 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.10 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.20 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.60 },
        { "name": "box",   "x":SC_W*1.1, "y":SC_H*0.90 },
    ]
},{
    rank: 3,
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
