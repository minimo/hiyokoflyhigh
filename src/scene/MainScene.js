/*
 *  MainScene.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */
(function() {

tm.define("jsstg.MainScene", {
    superClass: tm.app.Scene,

    //マルチタッチ補助クラス
    touches: null,
    touchID: -1,

    //タッチ情報
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    beforeX: 0,
    beforeY: 0,
    mouseON: false,

    //経過時間
    time: 0,
    absTime: 0,

    //敵投入数と撃破数
    enemyCount: 0,
    enemyKill: 0,

    //スコア
    score: 0,

    //各種フラグ
    isGameOver: false,

    background: "rgba(0, 100, 0, 1.0)",
    labelParam: {fontFamily: "misaki", align: "left", baseline: "top",outlineWidth: 3},

    init: function() {
        this.superInit();

        //マルチタッチ初期化
        this.touches = tm.input.TouchesEx(this);

        //レイヤー作成
        this.layers = [];
        this.layerBase = tm.app.Object2D().addChildTo(this);
        for (var i = 0; i < LAYER_SYSTEM+1; i++) {
            this.layers[i] = tm.app.Object2D().addChildTo(this.layerBase);
        }

        //バックグラウンド
        this.bg = jsstg.BackGround()
            .addChildTo(this.layers[LAYER_BACKGROUND]);

        //プレイヤー
        this.player = jsstg.Player()
            .addChildTo(this)
            .setPosition(SC_W*0.2, SC_H*0.9)
            .setAlpha(0);
        app.player = this.player;

        //プレイヤー投入演出用
        this.egg = jsstg.Egg()
            .addChildTo(this)
            .setPosition(SC_W*0.2, SC_H*0.2);

        //システム表示ベース
        this.systemBase = tm.app.Object2D()
            .addChildTo(this)
            .setPosition(0, 0);

        //スコア表示ラベル
        var that = this;
        var sc = this.scoreLabel = tm.display.OutlineLabel("SCORE: 0", 40)
            .addChildTo(this.systemBase)
            .setPosition(10, 10)
            .setParam(this.labelParam);
        sc.score = 0;
        sc.update = function() {
            this.text = "SCORE "+this.score;
            if (this.score < that.score) {
                var s = ~~((that.score-this.score)/5);
                if (s < 3) s=3;
                this.score += s;
                if (this.score > that.score)this.score = that.score;
            }
        };

        //パワーゲージ
        var color = "hsla({0}, 100%, 50%, 1.0)".format(300);
        var width = 30, height = 300;
        this.meter = tm.display.Shape({width:width, height:height})
            .addChildTo(this)
            .setPosition(20, SC_H*0.5+height*0.5)
            .setOrigin(0.5, 1.0);
        this.meter.update = function() {
            var limit = that.player.power*(height/100);
            var hsl = ~~(that.player.power*(120/100));
            var color = "hsla({0}, 100%, 50%, 1.0)".format(hsl);

            var c = this.canvas;
            c.clear(0,0,30,200);
            c.fillStyle = color;
            c.strokeStyle = color;
            c.lineWidth = 1;

            var lw = Number(c.lineWidth);
            c.fillRect(0, 200-limit, this.width, this.height-(200-limit));
            c.restore();
        }
        tm.display.RectangleShape({width:width, height:height, fillStyle: "rgba(0,0,0,0)", strokeStyle: "Black", lineWidth: 3})
            .addChildTo(this)
            .setPosition(20, SC_H*0.5+height*0.5)
            .setOrigin(0.5, 1.0);

        this.startup();
    },

    update: function() {

        if (this.time % 300 == 0) {
            jsstg.enemyData["zako1"](SC_W*1.1, SC_H*0.50).addChildTo(this);
            jsstg.enemyData["zako1"](SC_W*1.2, SC_H*0.55).addChildTo(this);
            jsstg.enemyData["zako1"](SC_W*1.3, SC_H*0.60).addChildTo(this);
            jsstg.enemyData["zako1"](SC_W*1.4, SC_H*0.65).addChildTo(this);
        }

        //ゲームオーバー判定
        if (this.isGameOver) {
            this.isGameOver = false;

            var that = this;
            var lb = tm.display.OutlineLabel("GAME OVER", 60)
                .addChildTo(this)
                .setPosition(SC_W*0.5, SC_H*0.5-SC_H);
            lb.tweener
                .wait(2000)
                .move(SC_W*0.5, SC_H*0.5, 4000, "easeOutBounce")
                .wait(3000)
                .call(function() {
                    this.remove();
                    tm.social.Nineleap.postRanking(that.score, "SCORE:"+that.score);
                    app.stop();
                }.bind(lb));
        }

        this.time++;
    },

    //ゲーム開始演出
    startup: function() {
        app.playBGM("bgm");
    },

    //敵ユニット単位の投入
    enterEnemyUnit: function(name) {
    },

    //敵単体の投入
    enterEnemy: function(name, x, y, param) {
    },

    //弾の消去
    eraseBullet: function(target) {
    },

    //タッチorクリック開始処理
    ontouchesstart: function(e) {
        if (this.touchID > 0)return;
        this.touchID = e.ID;
        this.mouseON = true;

        this.player.jump();
    },

    //タッチorクリック移動処理
    ontouchesmove: function(e) {
        if (this.touchID != e.ID) return;
    },

    //タッチorクリック終了処理
    ontouchesend: function(e) {
        if (this.touchID != e.ID) return;
        this.touchID = -1;
        this.mouseON = false;
    },

    //addChildオーバーライド
    addChild: function(child) {
        if (child.layer === undefined) {
            return this.superClass.prototype.addChild.apply(this, arguments);
        }
        child.parentScene = this;
        child.player = this.player;
        return this.layers[child.layer].addChild(child);
    },
});

})();
