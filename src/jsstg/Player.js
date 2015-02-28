/*
 *  player.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("jsstg.Player", {
    superClass: "tm.display.CanvasElement",
    layer: LAYER_PLAYER,

    width: 16,
    height: 16,

    //状態フラグ
    control: false, //操作可能フラグ
    shotON: true,   //ショットフラグ
    mouseON: false, //マウス操作中フラグ

    isDead: false,      //やられた
    isGround: false,    //地上にいるフラグ

    isStartup: false,   //スタート演出中
    isCollision: false, //当り判定有効フラグ
    isDemo: false,      //デモンストレーションフラグ

    timeMuteki: 0,  //無敵フレーム残り時間
    timeGround: 0,  //地上にいる時間

    power: 0,

    velocityX: 0,
    velocityY: 0,

    lineX: 0,

    parentScene: null,

    init: function() {
        this.superInit();
        this.setScale(2);
        this.scaleX *= -1;

        //アニメーションスプライト
        this.sprite = tm.display.AnimationSprite(jsstg.SpriteSheet.player, 32, 32).addChildTo(this);

        this.time = 0;
        return this;
    },
    update: function() {
        if (!this.isGround) {
            this.y += this.velocityY;
            this.velocityY += GRAVITY/3;
            this.timeGround = 0;
        } else {
            this.timeGround++;
        }

        if (this.y > SC_H*0.9) {
            this.y = SC_H*0.9;
            this.isGround = true;
            if (this.isDead) {
                this.sprite.gotoAndPlay("dawn");
                app.currentScene.bg.speed = 0;
            }
        }
        if (this.isGround && !this.isDead) {
            if (this.sprite.currentAnimationName != "walk") this.sprite.gotoAndPlay("walk");
        }
        this.power+=1;
        if (this.power > 100) this.power = 100;
        this.time++;
    },

    //前進
    forward: function() {
        if (!this.control) return;
        this.x+=2;
        if (this.x > SC_W*0.6) this.x = SC_W*0.6;
    },

    //後退
    back: function() {
        if (!this.control) return;
        this.x-=2;
        if (this.x < SC_W*0.1) this.x = SC_W*0.1;
    },
    //ジャンプ！
    jump: function() {
        if (!this.control || this.y < SC_H*0.1) return;
        this.enterShot();
        this.velocityY = -5;
        this.isGround = false;
        if (this.sprite.currentAnimationName != "fly") this.sprite.gotoAndPlay("fly");
    },
    //ちょっと浮くよ
    hover: function() {
        if (this.velocityY > 1) this.velocityY = 1;
    },
    //死亡演出
    damage: function() {
        this.control = false;
        this.isCollision = false;
        this.isGround = false;
        this.isDead = true;
        this.velocityY = -5;
        this.sprite.gotoAndPlay("damage");
        this.parentScene.isGameOver = true;
        app.playSE("damage");
    },
    //ショット
    enterShot: function() {
        if (this.power < 90 || this.isGround) return;
        this.power -= 90;
        jsstg.ShotBullet(1).addChildTo(this.parentScene).setPosition(this.x, this.y);
        app.playSE("piyo");
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

    velocityX: 0,
    velocityY: 0,

    init: function() {
        //親クラスの初期化
        this.superInit(jsstg.SpriteSheet.egg, 32, 32);
        this.setScale(2);
        this.scaleX *= -1;
        this.tweener.move(SC_W*0.4, SC_H*0.9, 1500, "easeOutBounce")
            .call(function() {
                this.gotoAndPlay("enter");
            }.bind(this));
    },
    update: function() {
    },
    onanimationend: function() {
        this.remove();
        app.player.setAlpha(1);
        app.player.sprite.gotoAndPlay("startup")
        app.player.control = true;
        app.player.isCollision = true;
        app.currentScene.bg.speed = 1;
    },
});

})();