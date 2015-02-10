/*
 *  Effect.js
 *  2014/07/10
 *  @auther minimo  
 *  This Program is MIT license.
 */
jsstg.Effect = [];

(function() {

//爆発
tm.define("jsstg.Effect.Explode", {
    superClass: "tm.display.AnimationSprite",
    layer: LAYER_EFFECT_UPPER,

    image: null,
    isEffect: true,
    isUpper: true,

    init: function() {
        this.superInit(jsstg.SpriteSheet.Explode, 32, 32);
        this.setScale(2);
        this.gotoAndPlay("explode");
    },
    onanimationend: function() {
        this.remove();
    },
});

//敵出現ワーニング
tm.define("jsstg.Effect.Warning", {
    superClass: "tm.display.OutlineLabel",
    layer: LAYER_EFFECT_UPPER,

    image: null,
    isEffect: true,
    isUpper: true,

    init: function(rev, y) {
        y = y || SC_H*0.5;
        var x = SC_W*0.85;
        var text = "WARNING!!＞";
        if (rev == 1) {
            x = SC_W*0.15;
            text = "＜WARNING!!";
        }
        this.superInit(text, 30);

        this.setPosition(x, y);
        this.time = 1;
    },
    update: function() {
        if (this.time % 10 == 0) this.visible = !this.visible;
        if (this.time > 120) this.remove();
        this.time++;
    },
});

})();