/*
 *  EnemyData.js
 *  2015/02/10
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

//グループ定義
jsstg.enemyUnit = [

{
    name: "waru1-1",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "waru1",   "x":SC_W*1.2, "y":SC_H*0.55 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.60 },
        { "name": "waru1",   "x":SC_W*1.4, "y":SC_H*0.65 },
    ]
},
{
    name: "waru1-2",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.5, "y":SC_H*0.50 },
        { "name": "waru1",   "x":SC_W*1.7, "y":SC_H*0.60 },
    ]
},
{
    name: "waru1-3",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.2, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.4, "y":SC_H*0.40 },
    ]
},
{
    name: "waru2-1",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.20, "reverse":0 },
    enemies: [
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay":  0 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay": 40 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay": 80 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay":120 },
    ]
},
{
    name: "waru2-2",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.70, "reverse":0 },
    enemies: [
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay":  0 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay": 40 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay": 80 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay":120 },
    ]
},
{
    name: "mecha2-1",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha2",   "x":SC_W*1.1, "y":SC_H*0.50 },
    ]
},
{
    name: "mecha2-2",
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha2",   "x":SC_W*1.3, "y":SC_H*0.40 },
        { "name": "mecha2",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "mecha2",   "x":SC_W*1.3, "y":SC_H*0.60 },
    ]
},

]
})();
