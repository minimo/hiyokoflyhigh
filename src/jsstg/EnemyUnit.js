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
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "waru1",   "x":SC_W*1.2, "y":SC_H*0.55 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.60 },
        { "name": "waru1",   "x":SC_W*1.4, "y":SC_H*0.65 },
    ]
},{
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.30, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.5, "y":SC_H*0.50 },
        { "name": "waru1",   "x":SC_W*1.7, "y":SC_H*0.60 },
    ]
},{
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.40, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.40 },
    ]
},{
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.20, "reverse":0 },
    enemies: [
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay":  0 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay": 60 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay":150 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.20, "delay":210 },
    ]
},{
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.70, "reverse":0 },
    enemies: [
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay":  0 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay": 60 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay":150 },
        { "name": "waru2",   "x":SC_W*1.1, "y":SC_H*0.70, "delay":210 },
    ]
},

{
    rank: 0,
    time: 300,
    warn: { "y":SC_H*0.40, "reverse":0 },
    enemies: [
        { "name": "waru1",   "x":SC_W*1.1, "y":SC_H*0.40 },
        { "name": "waru1",   "x":SC_W*1.3, "y":SC_H*0.30 },
    ]
},

{
    rank: 1,
    time: 300,
    warn: { "y":SC_H*0.30, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.30 },
    ]
},{
    rank: 1,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.50 },
    ]
},{
    rank: 1,
    time: 300,
    warn: { "y":SC_H*0.70, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.70 },
    ]
},

{
    rank: 2,
    time: 300,
    warn: { "y":SC_H*0.20, "reverse":1 },
    enemies: [
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.20, "delay":  0 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.20, "delay": 60 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.20, "delay":150 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.20, "delay":210 },
    ]
},{
    rank: 2,
    time: 300,
    warn: { "y":SC_H*0.80, "reverse":1 },
    enemies: [
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.80, "delay": 30 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.80, "delay": 60 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.80, "delay":150 },
        { "name": "waru3",   "x":-SC_W*0.2, "y":SC_H*0.80, "delay":210 },
    ]
},

{
    rank: 3,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.4, "y":SC_H*0.30 },
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "mecha1",   "x":SC_W*1.4, "y":SC_H*0.70 },
    ]
},{
    rank: 3,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "mecha1",   "x":SC_W*1.3, "y":SC_H*0.30 },
        { "name": "mecha1",   "x":SC_W*1.5, "y":SC_H*0.30 },
    ]
},{
    rank: 3,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha1",   "x":SC_W*1.1, "y":SC_H*0.30 },
        { "name": "mecha1",   "x":SC_W*1.3, "y":SC_H*0.30 },
        { "name": "mecha1",   "x":SC_W*1.5, "y":SC_H*0.30 },
    ]
},

{
    rank: 4,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha2",   "x":SC_W*1.1, "y":SC_H*0.50 },
    ]
},
{
    rank: 4,
    time: 300,
    warn: { "y":SC_H*0.50, "reverse":0 },
    enemies: [
        { "name": "mecha2",   "x":SC_W*1.4, "y":SC_H*0.40 },
        { "name": "mecha2",   "x":SC_W*1.1, "y":SC_H*0.50 },
        { "name": "mecha2",   "x":SC_W*1.4, "y":SC_H*0.60 },
    ]
},

{
    rank: 5,
    time: 300,
    warn: { "y":SC_H*0.20, "reverse":0 },
    enemies: [
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.20, "delay":  0 },
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.20, "delay": 60  },
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.20, "delay":120  },
    ]
},{
    rank: 5,
    time: 300,
    warn: { "y":SC_H*0.80, "reverse":0 },
    enemies: [
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.80, "delay":  0 },
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.80, "delay": 60  },
        { "name": "mecha3",   "x":SC_W*1.2, "y":SC_H*0.80, "delay":120  },
    ]
},

];

})();
