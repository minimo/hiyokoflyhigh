/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("jsstg.Player", {
    superClass: "tm.display.AnimationSprite",
    layer: LAYER_PLAYER,

    width: 2,
    height: 2,

    //状態フラグ
    control: false,  //操作可能フラグ
    shotON: true,   //ショットフラグ
    mouseON: false, //マウス操作中フラグ

    isGround: false,    //地上にいるフラグ

    isStartup: false,   //スタート演出中
    isCollision: false, //当り判定有効フラグ
    isDemo: false,      //デモンストレーションフラグ

    timeMuteki: 0,  //無敵フレーム残り時間

    gravity: 0.98*0.5,
    velocityX: 0,
    velocityY: 0,

    parentScene: null,

    init: function() {
        this.superInit(jsstg.SpriteSheet.player, 32, 32);
        this.setScale(2);
        this.scaleX *= -1;

        //当り判定設定
        this.boundingType = "circle";
        this.radius = 2;
        this.checkHierarchy = true;

        this.time = 0;
        return this;
    },
    update: function() {
        if (!this.isGround) {
            this.y += this.velocityY;
            if (this.parentScene.mouseON) {
                if (this.velocityY > 0) {
                    this.velocityY = 3;
                } else {
                    this.velocityY += this.gravity;
                }
            } else {
                this.velocityY += this.gravity;
            }
        }
        
        if (this.y > SC_H*0.9) {
            this.y = SC_H*0.9;
            this.gotoAndPlay("stop");
            this.isGround = true;
        }

        if (this.isGround) {
            if (this.currentAnimationName != "walk") this.gotoAndPlay("walk");
        }
        this.time++;
    },
    //ジャンプ！
    jump: function() {
        if (!this.control) return;
        this.velocityY = -12;
        this.isGround = false;
        if (this.currentAnimationName != "fly") this.gotoAndPlay("fly");
        this.enterShot();
    },
    //死亡演出
    damage: function() {
        this.control = false;
        this.velocityY = -15;
        this.gotoAndPlay("damage");
    },
    //ショット
    enterShot: function() {
        jsstg.ShotBullet(1).addChildTo(this.parentScene).setPosition(this.x, this.y);
    },
    //プレイヤー投入時演出
    startup: function() {
        this.isStartup = true;
        this.control = false;
    },
});

//開始時プレイヤーキャラクター
tm.define("jsstg.Egg", {
    superClass: "tm.display.AnimationSprite",

    gravity: 0.98*0.5,
    velocityX: 0,
    velocityY: 0,

    init: function() {
        //親クラスの初期化
        this.superInit(jsstg.SpriteSheet.egg, 32, 32);
        this.setScale(2);
        this.scaleX *= -1;
        this.tweener.move(SC_W*0.2, SC_H*0.9, 1500, "easeOutBounce")
            .call(function() {
                this.gotoAndPlay("enter");
            }.bind(this));
    },
    update: function() {
    },
    onanimationend: function() {
        this.remove();
        app.player
            .gotoAndPlay("startup")
            .setAlpha(1);
        app.player.control = true;
    },
});

})();