/*
 *  EnemyData.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {
jsstg.enemyData = [];

//ワルひよこ１
tm.define("jsstg.enemyData.waru1", {
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

    setup: function(param) {
        this.sprite = tm.display.AnimationSprite(jsstg.SpriteSheet.waru, 32, 32)
            .addChildTo(this)
            .setScale(2)
            .gotoAndPlay("fly");
    },

    algorithm: function() {
        this.x -= 1;
        this.y += Math.sin(this.time*0.1)*3;
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
jsstg.enemyData["waru1"] = jsstg.enemyData.waru1;

//ワルひよこ２
tm.define("jsstg.enemyData.waru2", {
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

    setup: function(param) {
        this.sprite = tm.display.AnimationSprite(jsstg.SpriteSheet.waru, 32, 32)
            .addChildTo(this)
            .setScale(2)
            .gotoAndPlay("fly");

        this.phase = 0;
        this.vy = 1;
        if (this.y > SC_H*0.5) this.vy = -1;
    },

    algorithm: function() {
        if (this.phase == 0) {
            this.x -= 2;
            if (this.x < SC_W*0.6) this.phase++;
        }
        if (this.phase == 1) {
            this.y += this.vy*2;
            if (this.vy ==  1 && this.y > SC_W*0.7 ||
                this.vy == -1 && this.y < SC_W*0.3) this.phase++;
        }
        if (this.phase == 2) {
            this.x -= 2;
        }
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
jsstg.enemyData["waru2"] = jsstg.enemyData.waru2;

//メカひよこ１
tm.define("jsstg.enemyData.mecha1", {
    superClass: "jsstg.Enemy",

    //使用弾幕パターン
    bulletPattern: "cube1",

    //当り判定サイズ
    width:  16,
    height: 16,

    //耐久力
    def: 2,

    //得点
    point: 100,

    //表示レイヤー番号
    layer: LAYER_OBJECT,

    init: function(x, y) {
        this.superInit(x, y);
    },

    setup: function(param) {
        this.sprite = tm.display.AnimationSprite(jsstg.SpriteSheet.mecha, 32, 32)
            .addChildTo(this)
            .setScale(2)
            .gotoAndPlay("fly");
    },

    algorithm: function() {
        this.x -= 1;
        this.y += Math.sin(this.time*0.1)*2;
    },

    dead: function() {
        this.isCollision = false;
        this.isDead = true;
        this.remove();

        var sp = tm.display.Sprite("mecha", 32, 32)
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
jsstg.enemyData["mecha1"] = jsstg.enemyData.mecha1;

})();
