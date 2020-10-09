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
game.showLongText("Just a friendly reminder that this game is still early in development! I will be constantly working on this project and trying to make it better for you. Thanks, Dev.", DialogLayout.Bottom)
game.showLongText("You have fallen into an evil dungeon full of dangerous monsters.You must throw your swords(spacebar) and move with the arrow keys to defeat them. There are also a few treasures hidden around. Find them for the secret ending. Enjoy!", DialogLayout.Bottom)
info.setScore(0)
// Make the level
scene.setTileMap(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b6.................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b...................................................bb2bb..........................................b
    b.................................................................bbbbbb2bbbbbb2bbbbbbbbbbbbbbbbb..b
    b.............................bbbbbbbbbb.........................bb................................b
    bbbbbbbbb...................bb..........b.......................bb.................................b
    b....................bbb2bbb.............b.....................bb..................................b
    b...................b.....................b2bbbbbbbbbbbbbbbbb2bb..............................b2bb.b
    b.............bbbbbb...............................................................................b
    b............b.....................................................................................b
    b...........b........................................................................bbbb2b........b
    b..........b......................................................bbb2bbbbbbbbbb2b.................b
    b.........b...................................bbbbbbbbbbbbbbbb.....................................b
    bb2bbbbbb....................................bb...............bb...................................b
    b....................bb22bbbb22b.bbbbbbbbbbb2b..................bb.................................b
    b........b...........b6........b..................................bbbbbbbbbbbbb....................b
    b.........b...bbbbb..b.........bb..............................................2bbbbbbbbbbb2.......b
    b..........b.........b.........bbb.............................................b6..........bbbb....b
    b...........b........b.........bbbb............................................b...........b.......b
    b...........bbbbbbb..b.........bbbbb...........bbbbbb2bbbb2bbbbbb..b...........b...........b....bbbb
    b...................bb.........bbbb............b................b..b...........b...........b.......b
    b..................bbb.........bbb....bbbbbbbb.b................b..b...bbbb....b..bbbbbbbbbbbbb....b
    b.......bbbbbbbbbbbbbb...bbbbbbbb....bb6.......b....bbbbbbbbbbbbb..b...........b..................bb
    b......b.............bb.............b.........bbb.............................bbb................bbb
    b....bbb.............bbb...........b...........bbb..........................bbbbbb..............bbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbb2bbbbbbbbbbbb2bbbbbbbbbbb
`)
scene.setTile(11, img`
    f f f f f f f f f f f f f f f f
    f b b b b b f b b b b b b b b f
    f b b b b b f f f f b b b b b f
    f b b b b b f b b f b b b b b f
    f f f f f f f b b f f f f f f f
    f b b b f b b b b f b b f b b f
    f b b b f b b b b f b b f b b f
    f b b b f f f f f f b b f b b f
    f b b b b b b f b b b b f f b f
    f b b b b b b f b b b b b f b f
    f f f f f f f f b b b b b f b f
    f b b b b f b f b b b b b f f f
    f b b b b f b f f f f f f f b f
    f b b b b f b b b b b b b b b f
    f b b b b f b b b b b b b b b f
    f f f f f f f f f f f f f f f f
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
    f f f f f f f f f f f f f f f f
    f b b b f b b b b b f b b b b f
    f b b b f b b b b b f b b b b f
    f b b b f f f f f f f b b b b f
    f b b b f b b f f b b b b b b f
    f f f f f b b f b b b b b b b f
    f b b f b b b f b b b b b b b f
    f b b f b b b f f f f f f f f f
    f b b f f f f f b f b b b b b f
    f b b b b b b b b f b b b b b f
    f b b b b b b b b f b b b b b f
    f b b b b b b b b f b b b b b f
    f f f f f f f f f f f f f f f f
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
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 . . .
    . . 2 2 2 1 2 2 2 1 2 2 2 . . .
    . . 2 2 1 2 1 2 1 2 1 2 2 . . .
    . . 2 2 2 1 2 2 2 1 2 2 2 . . .
    . . 2 2 2 2 2 1 2 2 2 2 2 . . .
    . . 2 2 2 2 1 2 1 2 2 2 2 . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . 2 1 2 1 2 . . . . . .
    . . . . . 2 1 2 1 2 . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)
voodoo_skull.follow(Knight, 50)
let jesters_mask = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f 2 2 2 2 2 . . .
    . . f f f f f 2 f 2 2 2 2 2 . .
    . . f f 2 2 f f 2 2 f f 2 2 . .
    . . f f 2 2 f 2 f 2 f f 2 2 . .
    . . f f 2 2 f f 2 2 f f 2 2 . .
    . . f f 2 2 f 2 f 2 f f 2 2 . .
    . . f f 2 2 f f 2 2 f f 2 2 . .
    . . f f 2 2 f 2 f 2 f f 2 2 . .
    . . f f f f f f 2 2 2 2 2 2 . .
    . . . f f f f 2 f 2 2 2 2 . . .
    . . . . . f f f 2 2 2 . . . . .
    . . . . . f f 2 f 2 2 . . . . .
    . . . . . f f f 2 2 2 . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
jesters_mask.follow(Knight, 35)
let lost_one = sprites.create(img`
    . . . 4 . . . . . 2 . 4 4 . . .
    . . 4 2 . 4 4 4 4 4 . 4 . . 4 .
    . . 4 4 4 2 4 4 4 4 2 4 . 2 . .
    . . 4 4 4 4 4 4 4 4 4 4 4 . . .
    . . 2 4 2 2 2 2 2 2 2 4 4 . . .
    . . 4 2 2 2 2 2 2 2 2 2 4 . . .
    . . 4 2 2 2 2 5 2 2 2 2 2 . . .
    . . 2 2 1 1 1 2 1 1 1 2 5 . . .
    . . 5 2 1 1 1 2 1 1 1 2 2 . . .
    . . 2 2 1 1 1 5 1 1 1 5 2 . . .
    . . 2 5 5 5 5 5 5 5 5 5 5 . . .
    . . 5 5 5 5 1 1 1 5 5 5 5 . . .
    . . 5 5 5 1 5 5 5 1 5 5 5 . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)
lost_one.follow(Knight, 40)
let my_sprite = sprites.create(img`
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
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`)
// Make the damage and stuff
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
//  Make the coins
let gem = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f f f f f f . . .
    . . f 9 9 9 9 9 9 9 9 9 9 f . .
    . f 9 1 1 9 9 9 9 9 9 1 9 9 f .
    f 9 9 1 9 9 9 9 9 9 9 9 9 9 9 f
    . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
    . . f 9 9 9 9 9 9 9 1 9 9 f . .
    . . . f 9 9 9 9 9 9 1 9 f . . .
    . . . . f 9 9 9 1 1 9 f . . . .
    . . . . . f 9 9 9 9 f . . . . .
    . . . . . . f 9 9 f . . . . . .
    . . . . . . . f f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let coin = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . 5 1 1 5 5 5 5 . . . . .
    . . . . 5 1 5 f 5 5 5 . . . . .
    . . . . 5 5 5 f 5 5 5 . . . . .
    . . . . 5 5 5 f 5 1 5 . . . . .
    . . . . 5 5 5 f 5 5 5 . . . . .
    . . . . 5 5 5 f 5 5 5 . . . . .
    . . . . 5 5 5 f 5 5 5 . . . . .
    . . . . 5 5 5 5 1 5 5 . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let gem2 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . a a a a a a . . . . .
    . . . . a a a a a a a a . . . .
    . . . a a 1 1 c c c c a a . . .
    . . . a c 1 c c c c c c a . . .
    . . . a c c c c c c c 1 a . . .
    . . . a c c c c c c c 1 a . . .
    . . . a a c c c c 1 1 a a . . .
    . . . . a a a a a a a a . . . .
    . . . . . a a a a a a . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let amulet = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 5 5 5 5 5 5 5 . . . .
    . . . . 5 . . . . . . . 5 . . .
    . . . 5 . . . . . . . . . 5 . .
    . . . 5 . . . . . . . . . 5 . .
    . . . 5 . . . . . . . . . 5 . .
    . . . . 5 . . . . . . . 5 . . .
    . . . . . 5 . . . . . 5 . . . .
    . . . . . . 5 . . . 5 . . . . .
    . . . . . . . 5 . 5 . . . . . .
    . . . . . . . . 5 . . . . . . .
    . . . . . . . 1 1 1 . . . . . .
    . . . . . . 1 1 2 1 1 . . . . .
    . . . . . . . 1 1 1 . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
let ruby = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . 2 2 1 1 2 2 2 . . . . .
    . . . 2 2 1 1 2 2 2 2 2 . . . .
    . . . 2 2 1 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 1 2 2 . . . .
    . . . 2 2 2 2 2 1 1 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.player1.changeScoreBy(1)
})
// set stuff places
tiles.placeOnTile(jesters_mask, tiles.getTileLocation(54, 15))
tiles.placeOnTile(gem, tiles.getTileLocation(54, 13))
tiles.placeOnTile(coin, tiles.getTileLocation(26, 23))
tiles.placeOnTile(gem2, tiles.getTileLocation(54, 25))
tiles.placeOnTile(ruby, tiles.getTileLocation(85, 22))
tiles.placeOnTile(amulet, tiles.getTileLocation(1, 14))
tiles.placeOnTile(voodoo_skull, tiles.getTileLocation(43, 6))
tiles.placeOnTile(lost_one, tiles.getTileLocation(6, 23))
tiles.placeOnTile(my_sprite, tiles.getTileLocation(93, 16))
tiles.placeOnTile(null, tiles.getTileLocation(0, 0))
