/*
 *  EnemyData.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

//箱
tm.define("jsstg.enemyData.box", {
    superClass: "jsstg.Enemy",

    //使用弾幕パターン
    bulletPattern: "",

    //当り判定サイズ
    width:  64,
    height: 64,

    //耐久力
    def: 99,

    //得点
    point: 0,

    //表示レイヤー番号
    layer: LAYER_OBJECT,

    init: function(x, y, param) {
        this.superInit(x, y, param);

        this.sprite = tm.display.Sprite("box", 64, 64).addChildTo(this);
    },
    algorithm: function() {
    },
    damage: function() {
    },
});
jsstg.enemyData["box"] = jsstg.enemyData.box;

})();
