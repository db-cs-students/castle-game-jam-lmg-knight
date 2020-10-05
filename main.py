"""
Title : crusade
Creators : Chandler Varney and Jackson Clark
Description : You're a Knight going on a crusade to kill the dragon
"""
#Make the player, camera, and controls
Knight = sprites.create(img("""
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
"""),SpriteKind.player)
controller.move_sprite(Knight, 75, 0)
scene.camera_follow_sprite(Knight)
Knight.ay = 275
can_jump = True
def jump():
    global can_jump
    if can_jump:
        Knight.vy= -100
        can_jump = Knight.is_hitting_tile(CollisionDirection.BOTTOM)
controller.up.on_event(ControllerButtonEvent.PRESSED, jump)
info.player1.set_life(1)
game.show_long_text("You need at least 10 coins to exit through the portal.", DialogLayout.BOTTOM)
info.set_score(0)

#Make the level
scene.set_tile_map(img("""
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b6.................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b..................................................................................................b
    b...............................5..................................5..................5............b
    b...................................................bbbbb..........................................b
    b.................................................................bbbbbb2bbbbbb2bbbbbbb............b
    b...e.........................bbbbbbbbbb.......5.................bb................................b
    bbbbbbbbb.......5...........bb..................................bb.................................b
    b....................bbbbbbb..........................e........bb..................................b
    b...................b......................2bbbbbbbbbbbbbbbbb2bb...................................b
    b.............bbbbbb..................................................................48...........b
    b....5.......b..........................................................5.............a7.2.........b
    b...........bb........................................5..............................bbbb2b........b
    b..........bb.....................................................bbb2bbbbbbbbbb2b.................b
    b.........bb...............5.............5....bbbbbbbbbbbbbbbb.....................................b
    bb2bbbbbb....................................bb...............bb....5.......5......................b
    b....................bb22bbbb22b......bbbbbbbb..................bb.................................b
    b........b...........b6........b..................................bbbbbbbbbbbbb....................b
    b........bb...bbbbb..b.........b...............................................2bbbbbbbbbbb2.......b
    b.......5.bb.........b.........b.............................5.................b6..........bbbb....b
    b..........bb........b.........b........................................5......b..........5b.......b
    b..........bbbbbbbb..b...5.....b.........5.....bbbbbb2bbbb2bbbbbb..b...........b...........b....bbbb
    b...................bb.........b...............b................b..b...........b......e....b.......b
    b..5...............bbb.........b......bbbbbbbb.b...............5b..b...bbbb....b..bbbbbbbbbbbbb....b
    b.......bbbbbbbbbbbbbb...bbbbbbb.....bb6.......b....bbbbbbbbbbbbb..b...........b..................bb
    b......b.............bb.............b.......5.bbb............5.................bb................bbb
    b....bbb.............bbb...........b...........bbb.............................bbb..............bbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2bbbbbbb2bbbbbbbbbb2bbbbbbbbbbb
"""))
scene.set_tile(11, img("""
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
"""),True)
scene.set_tile(6, img("""
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
"""))
scene.set_tile(5, img("""
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
"""))
scene.set_tile(14, img("""
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
"""))
scene.set_tile(8, img("""
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
"""))
scene.set_tile(2, img("""
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
"""),True)
scene.set_tile(10, img("""
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
"""))
scene.set_tile(4, img("""
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
"""))
scene.set_tile(7, img("""
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
"""))

#Make life losing system
def on_hit_tile(sprite):
    scene.camera_shake(15)
    info.change_life_by(-1)
scene.on_hit_tile(SpriteKind.player, 2 , on_hit_tile)

# Make the projectiles
def on_button_event_a_pressed():
    projectile = sprites.create_projectile_from_sprite(img("""
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
    """), Knight, 70, 0)
    projectile = sprites.create_projectile_from_sprite(img("""
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
    """), Knight, -70, 0)
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)

# make double jump
def on_update():
    global can_jump
    if Knight.is_hitting_tile(CollisionDirection.BOTTOM):
        can_jump = True
game.on_update(on_update)

#make enemy
voodoo_skull = sprites.create(img("""
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
"""),SpriteKind.enemy)
voodoo_skull.follow(Knight, 50)

corrupt_knight = sprites.create(img("""
    . . . . . . c c c c . . . . . .
    . . . . . c c c c c c . . . . .
    . . 2 . . c . . . . c . . . . .
    . 2 2 . . c c . . c c . . . . .
    . 2 2 . . c . . . . c . . . . .
    . 2 2 . . . c c c c . . . . . .
    . 2 2 . . . . . . . . . . . . .
    . 2 2 . . c c c c c c . . . . .
    . 2 2 . . c c . . c c . . . . .
    . 2 2 . . c c . . c c . . . . .
    . . c . . c . . . . c . . c . .
    . . 2 . . c c . . c c . . . . .
    . . . . . c c c c c c . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . c . . . . c . . . . .
"""), SpriteKind.enemy)
corrupt_knight.set_position(0, 0)
#Make the damage and stuff
def on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    sprite.destroy()
    info.change_score_by(3)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_overlap)
