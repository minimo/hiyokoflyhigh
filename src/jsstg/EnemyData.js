/*
 *  EnemyData.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {
jsstg.enemyData = [];

//雑魚
tm.define("jsstg.enemyData.zako1", {
    superClass: "jsstg.Enemy",

    //使用弾幕パターン
    bulletPattern: "cube1",

    //当り判定サイズ
    width:  16,
    height: 16,

    //耐久力
    def: 3,

    //得点
    point: 300,

    //表示レイヤー番号
    layer: LAYER_OBJECT,

    init: function(x, y) {
        this.superInit(x, y);
    },

    setup: function() {
        tm.display.AnimationSprite(jsstg.SpriteSheet.waru, 32, 32)
            .addChildTo(this)
            .setScale(2)
            .gotoAndPlay("fly");
    },

    algorithm: function() {
        this.x -= 1;
    },
});
jsstg.enemyData["zako1"] = jsstg.enemyData.zako1;


})();
