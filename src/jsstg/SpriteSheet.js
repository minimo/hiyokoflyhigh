/*
 *  SpriteSheet.js
 *  2015/01/20
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

jsstg.SpriteSheet = {};

//スプライトシート作成
jsstg.createSpriteSheet = function() {
    jsstg.SpriteSheet.egg = tm.asset.SpriteSheet({
        image: "egg",
        frame: {
            width: 32,
            height: 32,
            count: 15,
        },
        animations: {
            "stop": {
                frames:[14],
                next: "stop",
                frequency: 1,
            },
            "enter": {
                frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                frequency: 3,
            },
        },
    });

    jsstg.SpriteSheet.player = tm.asset.SpriteSheet({
        image: "hiyoko",
        frame: {
            width: 32,
            height: 32,
            count: 18,
        },
        animations: {
            "stop": {
                frames:[0],
                next: "stop",
                frequency: 1,
            },
            "startup": {
                frames:[1,2,3,1,2,3,1,2,3,1,2,3,1,2,3],
                next: "stop",
                frequency: 5,
            },
            "miss": {
                frames:[4,5],
                frequency: 23,
            },
            "fly": {
                frames:[1,2,3,2],
                next: "fly",
                frequency: 5,
            },
            "walk": {
                frames:[12,13,14,13],
                next: "walk",
                frequency: 10,
            },
        },
    });
};

//アニメーションスプライト拡張
tm.display.AnimationSprite.prototype.currentAnimationName = null;
tm.display.AnimationSprite.prototype._gotoAndPlay = tm.display.AnimationSprite.prototype.gotoAndPlay;
tm.display.AnimationSprite.prototype._gotoAndStop = tm.display.AnimationSprite.prototype.gotoAndStop;
tm.display.AnimationSprite.prototype.gotoAndPlay = function(name) {
    name = (name !== undefined) ? name : "default";
    this.currentAnimationName = name;
    return this._gotoAndPlay(name);
}
tm.display.AnimationSprite.prototype.gotoAndStop = function(name) {
    name = (name !== undefined) ? name : "default";
    this.currentAnimationName = name;
    return this._gotoAndStop(name);
}

})();