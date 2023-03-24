namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
/**
 * Extension.
 * 
 * <--
 */
function saysomething (list: any[]) {
    return list[randint(0, 2)]
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player2, function (sprite, otherSprite) {
    game.gameOver(true)
})
/**
 * Continuing and ending the game
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    IT.setPosition(30, 55)
    Runner.setPosition(130, 55)
    effects.clearParticles(IT)
    Runner.startEffect(effects.fire)
    Runner.setKind(SpriteKind.Player2)
})
/**
 * Array, Multiplayer and tile map
 */
/**
 * Conditional statement and Boolean operators
 * 
 * While loop
 */
/**
 * Function with parameter and return value
 */
let Runner: Sprite = null
let IT: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
IT = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f f 2 2 2 2 2 2 2 2 2 f . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . f f f f e e e e f f f f . . 
    . f f 2 f b f 4 4 f b f 2 f f . 
    . f 2 2 4 1 f d d f 1 4 2 2 f . 
    . . f 2 2 d d d d d d 2 2 f . . 
    . . . f 2 2 4 4 4 4 2 2 f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Runner = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . . f f 8 8 8 8 8 8 8 8 8 f . . 
    . . f 8 8 f f f f f f 8 8 f . . 
    . . f f f f e e e e f f f f . . 
    . f f 8 f b f 4 4 f b f 8 f f . 
    . f 8 8 4 1 f d d f 1 4 8 8 f . 
    . . f 8 8 d d d d d d 8 8 f . . 
    . . . f 8 8 4 4 4 4 8 8 f . . . 
    . . e 4 f 8 8 8 8 8 8 f 4 e . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let text_list = ["I'm gonna get you", "Watch out!", "Come here"]
controller.player1.moveSprite(IT)
controller.player2.moveSprite(Runner)
IT.setStayInScreen(true)
Runner.setStayInScreen(true)
IT.setPosition(30, 55)
Runner.setPosition(130, 55)
scene.cameraFollowSprite(IT)
IT.startEffect(effects.fire)
while (!(IT.overlapsWith(Runner))) {
    info.player1.changeScoreBy(1)
    pause(1000)
}
game.onUpdateInterval(25000, function () {
    IT.sayText(saysomething(text_list), 2000, false)
})
