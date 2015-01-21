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

    background: "rgba(0, 100, 0, 1.0)",
    labelParam: {fontFamily: "misaki", align: "left", baseline: "top",outlineWidth: 3},

    init: function() {
        this.superInit();

        //マルチタッチ初期化
        this.touches = tm.input.TouchesEx(this);

        //レイヤー作成
        this.layers = [];
        for (var i = 0; i < LAYER_SYSTEM+1; i++) {
            this.layers[i] = tm.app.Object2D().addChildTo(this);
        }

        //バックグラウンド
        tm.display.Sprite("bg", SC_W, SC_H)
            .addChildTo(this.layers[LAYER_BACKGROUND])
            .setPosition(SC_W*0.5, SC_H*0.5);

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
        sc.update = function() {
            this.text = "SCORE: "+that.score;
        };

        this.startup();
    },

    update: function() {
    },

    //ゲーム開始演出
    startup: function() {
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
        this.player.jump();
        this.mouseON = true;
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
