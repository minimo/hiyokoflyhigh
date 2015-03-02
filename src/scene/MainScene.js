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
    enterTime: 300,
    obstacleInterval: 600,

    //敵投入数と撃破数
    enemyCount: 0,
    enemyKill: 0,

    //スコア
    score: 0,

    //ランク
    rank: 0,

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
            .setPosition(SC_W*0.4, SC_H*0.9)
            .setAlpha(0);
        app.player = this.player;

        //プレイヤー投入演出用
        this.egg = jsstg.Egg()
            .addChildTo(this)
            .setPosition(SC_W*0.4, SC_H*0.2);

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

        //ランク表示
        var rn = this.scoreLabel = tm.display.OutlineLabel("RANK", 40)
            .addChildTo(this.systemBase)
            .setPosition(10, 50)
            .setParam(this.labelParam);
        rn.update = function() {
            this.text = "RANK "+that.rank;
        };

        //パワーゲージ
        var color = "hsla({0}, 100%, 50%, 1.0)".format(300);
        var width = 30, height = 300;
        this.meter = tm.display.Shape({width:width, height:height})
            .addChildTo(this)
            .setPosition(20, SC_H*0.5+height*0.5)
            .setOrigin(0.5, 1.0);
        this.meter.update = function() {
            var limit = that.player.power*(this.height/100);
            var hsl = ~~(that.player.power*(120/100));
            var color = "hsla({0}, 100%, 50%, 1.0)".format(hsl);

            var c = this.canvas;
            c.clear(0, 0, this.width, this.height);
            c.fillStyle = color;
            c.strokeStyle = color;
            c.lineWidth = 1;

            var lw = Number(c.lineWidth);
            c.fillRect(0, this.height-limit, this.width, this.height-(this.height-limit));
            c.restore();
        }
        tm.display.RectangleShape({width:width, height:height, fillStyle: "rgba(0,0,0,0)", strokeStyle: "Black", lineWidth: 3})
            .addChildTo(this)
            .setPosition(20, SC_H*0.5+height*0.5)
            .setOrigin(0.5, 1.0);

        //ＵＩ的な何か
        var param = {
            width: SC_W*0.2,
            height: SC_H,
            fillStyle: "rgba(0,0,0,0.1)",
            strokeStyle: "rgba(0,0,0,0.1)",
            lineWidth: 1
        }
        this.leftB = tm.display.RectangleShape(param)
            .addChildTo(this)
            .setPosition(SC_W*0.1, SC_H*0.5)
            .setAlpha(0);
        this.rightB = tm.display.RectangleShape(param)
            .addChildTo(this)
            .setPosition(SC_W*0.9, SC_H*0.5)
            .setAlpha(0);


        this.startup();
    },

    update: function() {

        //敵ユニット投入
        if (this.time == this.enterTime) {
            this.enterEnemyUnit();
        }

        //障害物投入
        var interval = this.obstacleInterval-this.rank*30;
        if (interval < 300) interval = 300;
        if (this.time > 30 && this.time % interval == 0) {
            this.enterObstacle();
        }

        //ゲームランク
        if (this.time > 30 && this.time % 1200 == 0) {
            this.rank++;
        }

        //永久パターン防止キャラ
        if (!this.player.isDead && this.time > 60*30 && this.player.timeGround > 300) {
            jsstg.Effect.Warning(0, SC_H*0.9).addChildTo(this);
            this.enterEnemy("mecha$", SC_W*1.3, SC_H*0.9);
            this.player.timeGround = 0;
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

        //スクリーンショット保存
        var kb = app.keyboard;
        if (kb.getKeyDown("s")) app.canvas.saveAsImage();

        this.time++;
    },

    //ゲーム開始演出
    startup: function() {
        app.playBGM("bgm");
    },

    //敵ユニット単位の投入
    enterEnemyUnit: function() {
        //ランクに合うユニットを抽出
        var units = [];
        var len = jsstg.enemyUnit.length;
        for (var i = 0; i < len; i++ ){
            var unit = jsstg.enemyUnit[i];
            if (unit.rank <= this.rank) units.push(unit);
        }
        if (units.length == 0) {
            this.enterTime += 300;
            return false;
        }

        //抽出したユニットからランダムに一個指定
        var dice = rand2(0, units.length);
        var unit = units[dice];

        //ユニット情報に基づいて敵キャラを投入
        var len = unit.enemies.length;
        for (var i = 0; i < len; i++) {
            var e = unit.enemies[i];
            e.param = e.param || {};
            e.param.delay = e.delay;
            this.enterEnemy(e.name, e.x, e.y, e.param);
        }

        //ワーニング表示処理
        if (unit.warn) {
            var warn = unit.warn;
            jsstg.Effect.Warning(warn.reverse, warn.y).addChildTo(this);
        }

        //次の敵投入時間
        this.enterTime += unit.time;
    },

    //敵単体の投入
    enterEnemy: function(name, x, y, param) {
        if (!jsstg.enemyData[name]) return null;
        param = param || {};
        jsstg.enemyData[name](x,  y, param).addChildTo(this);
    },

    //障害物の投入
    enterObstacle: function() {
        //ランクに合うユニットを抽出
        var units = [];
        var len = jsstg.obstacleUnit.length;
        for (var i = 0; i < len; i++ ){
            var unit = jsstg.obstacleUnit[i];
            if (unit.rank <= this.rank) units.push(unit);
        }
        if (units.length == 0) {
            return false;
        }

        //抽出したユニットからランダムに一個指定
        var dice = rand2(0, units.length);
        var unit = units[dice];

        //ユニット情報に基づいて敵キャラを投入
        var len = unit.enemies.length;
        for (var i = 0; i < len; i++) {
            var e = unit.enemies[i];
            e.param = e.param || {};
            e.param.delay = e.delay;
            this.enterEnemy(e.name, e.x, e.y, e.param);
        }
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
        this.player.hover();
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
