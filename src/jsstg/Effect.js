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

})();