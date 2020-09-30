/** 
Title : LMG Knight
Creators : Chandler Varney and Jackson Clark
Description : You're a Knight going on a crusade to kill the dragon but you have an LMG

 */
// Make the player, camera, and controls
let Knight = sprites.create(img`
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 . . . . . 1 . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 1 . . . 1 . . . . . .
`)
controller.moveSprite(Knight)
scene.cameraFollowSprite(Knight)
Knight.ay = 250
let statusbar = statusbars.create(22, 4, 0)
statusbar.setLabel("HP")
statusbars.getStatusBarAttachedTo(StatusBarKind.Health, Knight)
statusbar.attachToSprite(Knight)
// Make the level
scene.setTileMap(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b6.................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b...............................5.....................5............5........5.........5............b
    b..................................................................................................b
    b.......................5.........................................bbbbbbbbbbbbbbbbbbbbb............b
    b...e.........................bbbbbbbbbb.......5.............5...bb................................b
    bbbbbbbbb.......5...........bb..................................bb.................................b
    b....5...............bbbbbbb..........................e........bb..................................b
    b...................b......................bbbbbbbbbbbbbbbbbbbbb...................................b
    b.............bbbbbb..................................................................88...........b
    b............b..........................................................5.............88.2.........b
    b...........bb........................................5..............................bbbbbb........b
    b..........bb.....................................................bbbbbbbbbbbb.....................b
    b.2.......bb.............................5....bbbbbbbbbbbbbbbb.....................................b
    bbbbbbbbb..............22....22..............bb.....................5.......5......................b
    b....................bbbbbbbbbbb......bbbbbbbb.....................................................b
    b........b...........b6........b..................................bbbbbbbbbbbbb2...........2.......b
    b........bb...bbbbb..b.........b...............................................bbbbbbbbbbbbb.......b
    b.......5.bb.........b.........b.................5...........5.................b6..........b.......b
    b..........bb........b.........b.....................2....2.............5......b.5........5b.......b
    b..........bbbbbbbb..b...5...5.b.........5.....bbbbbbbbbbbbbbbbbb..b...........b...........b.......b
    b...................bb.........b...............b................b..b...........b......e....b.......b
    b..5......2........bbb.........b......bbbbbbbb.b....5..........5b..b...bbbb....b..bbbbbbbbbb.......b
    b.......bbbbbbbbbbbbbb...bbbbbbb...bbbb6.......b....bbbbbbbbbbbbb..b...........b...................b
    b......b.............bb........................bb............5..........5......bb..................b
    b....bbb.............bbb.......................bbb..5................2.......2.bbb.................b
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
scene.setTile(11, img`
    f b b b b f b b b b f b b b b b
    f b b b b f b b b b f b b b b b
    f b b b b f b b b b f b b b b b
    f b b b b f f f f f f b b b b b
    f f f f f f b b b f b b b b b b
    b b f b f f b b b f f f f f f f
    b b f b f f b b b b f b b b b b
    b b f b f f b b b b f b b b f f
    b b f b f f f f f f f f f f f b
    b b f f f b b f b b b b f b b b
    b b b f b b b f f f f f f b b b
    f f f f b b b f b b f b b b b b
    b b b f b b b f b b f f f f f f
    b b b f f f f f b b b b b b b b
    b b b f b b b f f f f f b b b b
    b b b f f b b b b b f f b b b b
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
    . . . . . . . 5 . . . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 f 5 5 . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . . . 5 . . . . . . . .
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
    a a 8 8 8 8 8 8 8 8 8 a 8 8 8 a
    a a a 8 8 8 8 8 8 8 a a 8 8 8 a
    a 8 a a 8 8 8 8 8 a a 8 8 8 a a
    a 8 8 a a 8 8 8 a a 8 8 8 a a a
    a 8 8 8 a a 8 8 a 8 8 8 a a 8 a
    a 8 8 8 8 a a 8 a 8 a a a 8 8 a
    a 8 8 8 8 8 8 a a a 8 8 8 8 8 a
    a 8 8 8 8 8 8 a a 8 8 8 8 8 8 a
    a a 8 8 8 8 a 8 8 a a 8 8 8 8 a
    a a a 8 8 a a 8 8 8 a 8 8 8 8 a
    a 8 a a a a 8 8 8 8 a a 8 8 8 a
    a 8 8 8 8 8 8 8 8 8 8 a 8 8 8 a
    a 8 8 8 8 8 8 8 8 8 a a 8 8 8 a
    a 8 8 8 8 8 8 8 8 a a 8 8 8 8 a
    a a a a a a a a a a a a a a a a
`)
scene.setTile(2, img`
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
    . . . . 1 . . . 1 . . . 1 . . .
    . . . 1 2 1 . 1 2 1 . 1 2 1 . .
    . . 1 2 2 2 1 2 2 2 1 2 2 2 1 .
`)
