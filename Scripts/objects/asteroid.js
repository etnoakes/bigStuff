/*jshint esversion: 6 */
let _asteroid = (function () {
    let rockData = {
        images: ["Assets/Rock4.png"],
        frames: { width: 128, height: 128 },
    };
    let spritesheet = new createjs.SpriteSheet(rockData);
    let rockSprite = new createjs.Sprite(spritesheet);

    return {
        spawn: rockSprite
    };
})();
