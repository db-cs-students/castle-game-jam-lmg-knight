/** 
Title : crusade
Creators : Chandler Varney and Jackson Clark
Description : You're a Knight going on a crusade to kill the dragon

 */
// Make the player, camera, and controls
let Knight = sprites.create(img`
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . 1 . 1 . 1 . 1 . . . . .
    . . . . 1 1 . 1 . 1 1 . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 1 1 2 2 2 1 1 . . . . .
    . . . . 1 2 2 1 2 2 1 . . . . .
    . . . . 1 2 1 1 1 2 1 . . . . .
    . . . . 1 2 2 1 2 2 1 . . . . .
    . . 1 . 1 1 2 1 2 1 1 . 1 . . .
    . . . . 1 1 2 2 2 1 1 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 1 . . . 1 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(Knight, 75, 0)
scene.cameraFollowSprite(Knight)
Knight.ay = 275
let can_jump = true
controller.up.onEvent(ControllerButtonEvent.Pressed, function jump() {
    
    if (can_jump) {
        Knight.vy = -100
        can_jump = Knight.isHittingTile(CollisionDirection.Bottom)
    }
    
})
info.player1.setLife(1)
game.showLongText("You need at least 10 coins to exit through the portal.", DialogLayout.Bottom)
info.setScore(0)
// Make the level
scene.setTileMap(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b6.................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b...................................................bbbbb..........................................b
    b.................................................................bbbbbb2bbbbbb2bbbbbbb............b
    b...e.........................bbbbbbbbbb.........................bb................................b
    bbbbbbbbb...................bb..................................bb.................................b
    b....................bbbbbbb..........................e........bb..................................b
    b...................b......................2bbbbbbbbbbbbbbbbb2bb...................................b
    b.............bbbbbb..................................................................48...........b
    b............b........................................................................a7.2.........b
    b...........bb.......................................................................bbbb2b........b
    b..........bb.....................................................bbb2bbbbbbbbbb2b.................b
    b.........bb..................................bbbbbbbbbbbbbbbb.....................................b
    bb2bbbbbb....................................bb...............bb...................................b
    b....................bb22bbbb22b......bbbbbbbb..................bb.................................b
    b........b...........b6........b..................................bbbbbbbbbbbbb....................b
    b........bb...bbbbb..b.........b...............................................2bbbbbbbbbbb2.......b
    b.........bb.........b.........b...............................................b6..........bbbb....b
    b..........bb........b.........b...............................................b...........b.......b
    b..........bbbbbbbb..b.........b...............bbbbbb2bbbb2bbbbbb..b...........b...........b....bbbb
    b...................bb.........b...............b................b..b...........b......e....b.......b
    b..................bbb.........b......bbbbbbbb.b................b..b...bbbb....b..bbbbbbbbbbbbb....b
    b.......bbbbbbbbbbbbbb...bbbbbbb.....bb6.......b....bbbbbbbbbbbbb..b...........b..................bb
    b......b.............bb.............b.........bbb..............................bb................bbb
    b....bbb.............bbb...........b...........bbb.............................bbb..............bbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbb2bbbbbbbbbb2bbbbbbbbbbb
`)
scene.setTile(11, img`
    f b b f b b b f b b f b b f b b
    f b b f b b b f b b f b b f b b
    f f f f f f f f f f f f f f f f
    b f b b f b f b b b b f b b f b
    b f b b f b f b b b b f b b f b
    b f b b f b f b b b b f b b f b
    b f b b f b f b b b b f b b f b
    f f f f f f f f f f f f f f f f
    f b b f b b b f b b f b b f b b
    f b b f b b b f b b f b b f b b
    f b b f b b b f b b f b b f b b
    f b b f b b b f b b f b b f b b
    f f f f f f f f f f f f f f f f
    b f b b f b f b b b b f b b f b
    b f b b f b f b b b b f b b f b
    b f b b f b f b b b b f b b f b
`, true)
scene.setTile(6, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . 5 . . . . . . .
    . . . . . . . 5 . . . . . . . .
    . . . . . . . . 5 . . . . . . .
    . . . . . . . 5 4 5 . . . . . .
    . . . . . . f 5 4 5 f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . e . . . . . . .
    . . . . . . . . e . . . . . . .
    . . . . . . . . e . . . . . . .
    . . . . . . . . f . . . . . . .
    e e e e e e e f e . . . . . . .
    . . . . . . . f e . . . . . . .
    . . . . . . . . f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
scene.setTile(14, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . e e e e e e e e e . . .
    . . . . e e e e e e e e e . . .
    . . . . e f f f 5 f f f e . . .
    . . . . e f f f 5 f f f e . . .
    . . . . e e e e e e e e e . . .
    . . . . e e e e e e e e e . . .
`)
scene.setTile(8, img`
    a a a a a a a a a a a a a a a a
    8 8 8 a 8 8 8 8 a 8 8 8 8 8 8 a
    8 8 8 a 8 8 8 8 a 8 8 8 8 8 8 a
    8 8 8 a 8 8 8 a 8 8 8 8 8 8 8 a
    8 8 a a 8 8 8 a 8 8 8 8 8 8 8 a
    8 8 a 8 8 a a 8 8 8 8 8 8 8 8 a
    8 a 8 8 8 a 8 8 8 8 8 8 a a a a
    8 a 8 8 8 a 8 8 8 8 8 a a 8 8 a
    a a 8 8 a 8 8 8 8 8 a a 8 8 8 a
    a 8 8 8 a 8 8 8 8 a a 8 8 8 8 a
    a 8 8 a 8 8 8 8 a a 8 8 8 8 8 a
    a 8 a a 8 8 8 a a 8 8 8 8 8 8 a
    a 8 a 8 8 a a 8 8 8 8 8 8 8 8 a
    8 a a 8 a a 8 8 8 8 8 8 8 8 8 a
    a a a a a 8 8 8 8 8 8 8 8 8 8 a
    a a 8 8 8 8 8 8 8 8 8 8 8 8 8 a
`)
scene.setTile(2, img`
    . . 1 . . . 1 . . . 1 . . . 1 .
    . 1 2 1 . 1 2 1 . 1 2 1 . 1 2 1
    1 2 2 2 1 2 2 2 1 2 2 2 1 2 2 2
    f b b f b f b b f b f b b f b b
    f b b f b f b b f b f b b f b b
    f f f f f f f f f f f f f f f f
    b f b b f b f b b f b f b b f b
    b f b b f b f b b f b f b b f b
    b f b b f b f b b f b f b b f b
    b f b b f b f b b f b f b b f b
    f f f f f f f f f f f f f f f f
    f b b f b f b b f b f b b f b b
    f b b f b f b b f b f b b f b b
    f f f f f f f f f f f f f f f f
    b b f b b b f b b f b f b b f b
    b b f b b b f b b f b f b b f b
`, true)
scene.setTile(10, img`
    a 8 8 8 8 8 8 8 8 8 8 a a a a a
    a 8 8 8 8 a a a a a a 8 8 8 a a
    a a 8 a a a 8 8 8 8 8 8 a a a 8
    a a a a 8 8 8 8 8 8 a a a 8 a 8
    a 8 8 8 8 8 8 8 8 8 a 8 8 8 a 8
    a 8 8 8 8 8 8 8 a a 8 8 8 8 a 8
    a 8 8 8 8 8 8 8 a 8 8 8 8 8 a 8
    a 8 8 8 8 8 8 a 8 8 8 8 8 8 a 8
    a 8 8 8 8 8 a 8 8 8 8 8 8 8 a 8
    a 8 8 8 8 a a 8 8 8 8 8 8 8 a 8
    a 8 8 8 8 a 8 8 8 8 8 8 8 8 a a
    a 8 8 8 a a 8 8 8 8 8 8 8 8 8 a
    a 8 8 8 a 8 8 8 8 8 8 8 8 8 8 a
    a 8 8 a a 8 8 8 8 8 8 8 8 8 8 a
    a 8 a a 8 8 8 8 8 8 8 8 8 8 8 a
    a a a a a a a a a a a a a a a a
`)
scene.setTile(4, img`
    a a a a a a a a a a a a a a a a
    a 8 8 8 8 8 a 8 8 8 a a a 8 8 8
    a 8 8 8 8 a a 8 8 8 8 a 8 8 8 8
    a 8 8 8 8 a a 8 8 8 8 a 8 8 8 8
    a 8 8 8 8 8 a 8 8 8 8 8 a 8 8 8
    a 8 8 8 8 8 a 8 8 8 8 8 a a 8 8
    a 8 8 8 8 8 a 8 8 8 8 8 8 a 8 8
    a 8 8 8 8 8 8 a 8 8 8 8 8 a 8 8
    a a 8 8 8 8 8 a a 8 8 8 8 a a 8
    a a a a 8 8 8 8 a a 8 8 8 8 a 8
    a 8 8 a a a 8 8 8 8 a 8 8 8 a a
    a 8 8 8 8 a a a 8 8 8 a 8 8 8 a
    a 8 8 8 8 8 8 a a 8 8 a a 8 8 a
    a 8 8 8 8 8 8 8 a a a 8 a a 8 a
    a 8 8 a a a a a a a a a a a a a
    a a a a 8 8 8 8 8 8 8 8 8 8 a a
`)
scene.setTile(7, img`
    a a 8 8 8 8 8 8 8 8 8 8 8 8 8 a
    a a a a a a a a 8 8 8 8 8 8 8 a
    8 a a a 8 8 8 8 a a 8 8 8 8 8 a
    8 a 8 a a 8 8 8 8 a a 8 8 8 8 a
    8 a 8 8 a 8 8 8 8 8 a 8 8 8 8 a
    8 a 8 8 a a a 8 8 8 a a 8 8 a a
    8 a 8 8 8 8 a a 8 8 8 a a a a a
    8 a 8 8 8 8 8 a a 8 8 8 8 8 8 a
    8 a 8 8 8 8 8 8 a a a 8 8 8 8 a
    8 a a 8 8 a 8 8 8 8 a a 8 8 8 a
    8 8 a 8 8 a a 8 8 8 8 a a 8 8 a
    8 8 a a 8 8 8 8 8 8 8 8 a 8 8 a
    8 8 8 a 8 8 8 8 8 8 8 8 a a a a
    8 8 8 a a 8 8 8 8 8 8 8 8 a a a
    8 8 8 a a 8 8 8 8 8 8 8 8 8 8 a
    a a a a a a a a a a a a a a a a
`)
// Make life losing system
scene.onHitTile(SpriteKind.Player, 2, function on_hit_tile(sprite: Sprite) {
    scene.cameraShake(15)
    info.changeLifeBy(-1)
})
//  Make the projectiles
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    let projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . b 1 1 1 1 1 1 . . . .
        . . . b b 2 1 1 1 1 1 1 1 . . .
        . . . . . b 1 1 1 1 1 1 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, Knight, 70, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 1 1 1 1 1 1 b . . . .
        . . . . 1 1 1 1 1 1 1 8 b b . .
        . . . . . 1 1 1 1 1 1 b . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, Knight, -70, 0)
})
//  make double jump
game.onUpdate(function on_update() {
    
    if (Knight.isHittingTile(CollisionDirection.Bottom)) {
        can_jump = true
    }
    
})
// make enemy
let voodoo_skull = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . 2 . . . . . . . 2 . . . .
    . . 2 . . . . . . . . . 2 . . .
    . . 2 . . . . . . . . . 2 . . .
    . . 2 . . 1 . . . 1 . . 2 . . .
    . . 2 . 1 . 1 . 1 . 1 . 2 . . .
    . . 2 . . 1 . . . 1 . . 2 . . .
    . . 2 . . . . 1 . . . . 2 . . .
    . . 2 . . . 1 . 1 . . . 2 . . .
    . . . 2 . . . . . . . 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . 2 1 1 1 2 . . . . . .
    . . . . . 2 1 1 1 2 . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)
voodoo_skull.follow(Knight, 50)
// Make the damage and stuff
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(3)
})
// make the coins
let gem = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f . . .
    . . f 7 7 7 7 7 7 7 7 7 7 f . .
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f .
    . . f 7 7 7 7 7 7 7 7 7 7 f . .
    . . . f 7 7 7 7 7 7 7 7 f . . .
    . . . . f 7 7 7 7 7 7 f . . . .
    . . . . . f 7 7 7 7 f . . . . .
    . . . . . . f 7 7 f . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
