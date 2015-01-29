/*
 *  BackGround.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */
(function() {

tm.define("jsstg.BackGround", {
    superClass: tm.display.CanvasElement,

    speed: 1,

    bg1: null,
    bg2: null,

    init: function() {
            this.superInit();

        //バックグラウンド
        this.bg1 = tm.display.Sprite("bg", SC_W*1.1, SC_H*1.1)
            .addChildTo(this)
            .setOrigin(0, 0)
            .setPosition(0, -SC_H*0.1);
        this.bg2 = tm.display.Sprite("bg", SC_W*1.1, SC_H*1.1)
            .addChildTo(this)
            .setOrigin(0, 0)
            .setPosition(SC_W, -SC_H*0.1);
    },

    update: function() {
        this.bg1.x-=this.speed;
        if (this.bg1.x <= -SC_W) this.bg1.x = SC_W;
        this.bg2.x-=this.speed;
        if (this.bg2.x <= -SC_W) this.bg2.x = SC_W;
    },
});

})();
