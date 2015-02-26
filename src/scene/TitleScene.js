/*
 *  TitleScene.js
 *  2015/02/12
 *  @auther minimo  
 *  This Program is MIT license.
 */
 
//タイトルシーン
tm.define("jsstg.TitleScene", {
    superClass: tm.app.Scene,

    init: function() {
        this.superInit();
        app.background = "rgba(0, 0, 0, 1.0)";

        var param1 = {
            fontFamily: "azukiP",
            align: "center",
            baseline: "middle",
            outlineWidth: 1
        };
        var param2 = {
            fontFamily: "azukiP",
            align: "center",
            baseline: "middle",
            outlineWidth: 1,
            fillStyle: "rgb(100,255,100)",
        };
        this.t1 = tm.display.OutlineLabel("ひよこは", 60)
            .addChildTo(this)
            .setParam(param1)
            .setPosition(SC_W*0.3, SC_H*0.3);
        this.t2 = tm.display.OutlineLabel("意外と高く", 60)
            .addChildTo(this)
            .setParam(param2)
            .setPosition(SC_W*0.7, SC_H*0.3)
            .setRotation(30);
        this.t3 = tm.display.OutlineLabel("空を飛ぶ", 60)
            .addChildTo(this)
            .setParam(param1)
            .setPosition(SC_W*0.5, SC_H*0.5);

        this.t3 = tm.display.OutlineLabel("Touch to Start", 30)
            .addChildTo(this)
            .setParam(param1)
            .setPosition(SC_W*0.5, SC_H*0.7);

        this.time = 0;
    },

    update: function() {
        this.time++;
    },

    ontouchend: function() {
        app.background = "rgba(0, 0, 0, 0.8)";
        app.score = 0;
        app.replaceScene(jsstg.MainScene());
    },

});
