/*
 *  EnemyData.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {
jsstg.enemyData = [];

//ワルひよこ
tm.define("jsstg.enemyData.zako1", {
    superClass: "jsstg.Enemy",

    //使用弾幕パターン
    bulletPattern: "cube1",

    //当り判定サイズ
    width:  16,
    height: 16,

    //耐久力
    def: 1,

    //得点
    point: 100,

    //表示レイヤー番号
    layer: LAYER_OBJECT,

    init: function(x, y) {
        this.superInit(x, y);
    },

    setup: function() {
        this.sprite = tm.display.AnimationSprite(jsstg.SpriteSheet.waru, 32, 32)
            .addChildTo(this)
            .setScale(2)
            .gotoAndPlay("fly");
    },

    algorithm: function() {
        var speed = this.parentScene.bg.speed;
        this.x -= speed;
        this.y += Math.sin(this.time*0.1)*2;
    },

    dead: function() {
        this.isCollision = false;
        this.isDead = true;
        this.remove();

        var sp = tm.display.Sprite("waru", 32, 32)
            .addChildTo(this.parentScene)
            .setPosition(this.x, this.y)
            .setScale(2)
            .setFrameIndex(4);
        sp.vy = -10;
        sp.layer = LAYER_EFFECT_LOWER;
        sp.update = function() {
            this.x += 1;
            this.y += this.vy;
            this.vy += 0.98*0.5;
            if (this.y > SC_H+64) {
                this.remove();
            }
        };
    },
});
jsstg.enemyData["zako1"] = jsstg.enemyData.zako1;

})();
