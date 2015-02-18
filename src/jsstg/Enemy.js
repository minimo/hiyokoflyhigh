/*
 *  Enemy.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("jsstg.Enemy", {
    superClass: "tm.display.CanvasElement",

    layer: LAYER_OBJECT,    //所属レイヤー
    parentScene: null,      //親シーン
    player: null,           //プレイヤー参照用

    parentEnemy: null,      //親となる敵キャラ

    //各種フラグ
    isCollision: true,  //当り判定
    isDead: false,      //死亡
    isSelfCrash: false, //自爆
    isMuteki: false,    //無敵
    isBoss: false,      //ボス
    isOnScreen: false,  //画面内に入った
    isGround: false,    //地上フラグ

    mutekiTime: 0,
    delayTime: 0,

    //キャラクタ情報
    name: null,
    def: 0,
    defMax: 0,
    bulletPattern: null,
    nowBulletPattern: null,
    id: -1,
    param: null,

    beforeX: 0,
    beforeY: 0,

    init: function(x, y, param) {
        this.superInit();
        this.setPosition(x, y);

        this.parentScene = app.currentScene;
        this.player = app.player;

        //当り判定設定
        this.boundingType = "rect";

        //ディレイ設定
        if (param.delay) {
            this.delayTime = param.delay;
        }

        this.time = 0;
    },

    setup: function(param) {
        var shapeParam = {
            width: 32,
            height: 32,
            strokeStyle:"hsla(0, 100%, 100%, 1.0)",
            fillStyle:  "hsla(0, 100%, 100%, 1.0)",
            lineWidth: 2,
        };
        var sh = tm.display.Shape(shapeParam).addChildTo(this);
    },

    update: function() {
        if (this.isDead) return;
        if (this.delayTime > 0) {
            this.delayTime--;
            return;
        }

        this.algorithm();
        if (this.isOnScreen) {
            if (this.x < -100 || this.x > SC_W+100 || this.y < -100 || this.y > SC_H+100) {
                this.remove();
                this.isCollision = false;
            }
        } else {
            if (0 < this.x && this.x < SC_W && 0 < this.y && this.y < SC_H) this.isOnScreen = true;
        }

        //自機との当り判定チェック
        if (this.isCollision && this.player.isCollision && this.isHitElement(this.player)) {
            this.player.damage();
        }

        //親機が破壊された場合、自分も破壊
        if (this.parentEnemy) {
            if (this.parentEnemy.isDead) this.dead();
        }

        //進行方向を向く
        if (this.x != this.beforeX) {
            if (this.x > this.beforeX) {
                this.scaleX = -1;
            } else {
                this.scaleX = 1;
            }
        }

        //無敵時処理
        if (this.isMuteki) {
            if (this.mutekiTime % 10 == 0) this.visible = !this.visible;
            this.mutekiTime--;
            if (this.mutekiTime < 0) {
                this.isMuteki = false;
                this.visible = true;
            }
        }

        this.beforeX = this.x;
        this.beforeY = this.y;
        this.time++;
    },

    algorithm: function() {
    },

    damage: function(power, bounce) {
        if (this.isMuteki || this.isDead) return;
        this.def -= power;
        if (this.def < 1) {
            //破壊パターン投入
            this.dead();
            this.parentScene.enemyKill++;

            //親機に破壊を通知
            if (this.parentEnemy) this.parentEnemy.deadChild(this);

            //スコア加算
            bounce++;
            var point = this.point * bounce;
            this.parentScene.score += point;

            //得点表示
            var sc = tm.display.OutlineLabel(point, 30)
                .addChildTo(this.parentScene)
                .setPosition(this.x, this.y);
            sc.fontFamily = "scoreboard"; sc.align = "center"; sc.baseline  = "middle"; sc.fontWeight = 300; sc.outlineWidth = 2;
            sc.tweener.to({x: this.x, y: this.y-50, alpha:0}, 1000).call(function(){this.remove()}.bind(sc));
        } else {
            this.isMuteki = true;
            this.mutekiTime = 59;
            this.tweener.clear().moveBy(64, 0, 1000, "easeOutElastic");
        }
    },

    //通常破壊パターン
    dead: function() {
        this.isCollision = false;
        this.isDead = true;
        this.tweener.clear();

        this.on("enterframe", function() {
            this.alpha *= 0.9;
            if (this.alpha < 0.02) this.remove();
        }.bind(this));

        var area = this.width*this.height;
        if (area < 1025) {
        } else {
        }
    },

    //親機のセット
    setParentEnemy: function(parent) {
        this.parentEnemy = parent;
    },

    //子機が破壊された場合に呼ばれるコールバック
    deadChild: function(child) {
    },

    //指定ターゲットの方向を向く
    lookAt: function(target) {
        target = target || this.player;

        //ターゲットの方向を向く
        var ax = this.x - target.x;
        var ay = this.y - target.y;
        var rad = Math.atan2(ay, ax);
        var deg = ~~(rad * toDeg);
        this.rotation = deg + 90;
    },

    //指定ターゲットの方向に進む
    moveTo: function(target, speed, look) {
        target = target || this.player;
        speed = speed || 5;

        //ターゲットの方向を計算
        var ax = this.x - target.x;
        var ay = this.y - target.y;
        var rad = Math.atan2(ay, ax);
        var deg = ~~(rad * toDeg);

        if (look || look === undefined) this.rotation = deg + 90;

        this.vx = Math.cos(rad+Math.PI)*speed;
        this.vy = Math.sin(rad+Math.PI)*speed;
        this.x += this.vx;
        this.y += this.vy;
    },
});

})();
