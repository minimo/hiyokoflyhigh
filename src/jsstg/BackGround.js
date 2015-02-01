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

    speed: 0,

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

        this.time = 0;
    },

    update: function() {
        this.bg1.x-=this.speed;
        if (this.bg1.x <= -SC_W) this.bg1.x = SC_W;
        this.bg2.x-=this.speed;
        if (this.bg2.x <= -SC_W) this.bg2.x = SC_W;

        if (this.time % 180 == 0) {
            var x = SC_W*1.5;
            var y = rand(0, SC_H*0.7);
            var sc = rand(2,10)*0.1;
            var kn = rand(1, 2);
            tm.display.Sprite("cloud"+kn)
                .addChildTo(this)
                .setPosition(SC_W*1.5, y)
                .setScale(sc)
                .update = function() {
                    this.x -= sc;
                }
        }
        this.time++;
    },
});

})();
