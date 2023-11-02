namespace SpriteKind {
    export const EnemyBullet = SpriteKind.create()
    export const Bullet = SpriteKind.create()
    export const MuzzleFlash = SpriteKind.create()
    export const Flame = SpriteKind.create()
    export const Star = SpriteKind.create()
    export const PlayerExplosion = SpriteKind.create()
    export const Pickup = SpriteKind.create()
    export const Explosion = SpriteKind.create()
}
function start_screen () {
    cherryl = img`
        ffffffffffffffffffffffffffffffffffffffffffffffdfffffffaaffffffff8aaffafffffffffffffafaaffffa8affffffffafffaaffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffaaafaaffffafffffffaaaaffffffffffffffffffaaafffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffaffffaffffffffaaaffffffaaffffffaaaaafffffffaffffffffffaaaaffffffffffffafffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffffaaaffffaafffffffaaaaaffffffcffffffffafaaaaffffffffffffaffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffff8aff8faaaffafffffaaaaaffffffafffffffafbaaafffffffffffffaffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffafffffffaaafaaaaaffaaffaaaaaaffffffffffffffaafaaaffffafffffffaaffffffaffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffaffffffffaafaaaaaffaaaaaaaaaaffffffffffffffaffaaafffffffffffaaffffffaaffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffdffffffffffffffffffffffaafffffffaaaaaaaaffaaaaaaaaaafffffaafffffffafaaffffffffffafaafffffaaaaffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffdfffffffffffffffffffffafffffffaaaaaaaaaaaaaaaaaaafffffaafffffffafffffffffffffafaaafffaaaaaaffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaffffafaafffffffafffffffaffffaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffdfffffffffffffffffffffffafffffffffffffffaaaaaaaaaaaaaaaaffffffaaffffaffaafaffffaffffaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffafffffafffffffffffffffffaffffffaaaaaaaaaaaafaaffaaaaffffafaaffffffaffffaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff111122221122111122122222212222211112222211221111221111122222111111222211112211111221222221111fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff112222222122111122122222212222221112222221122112211111122222211122222222112221112221222222111fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff11122411221221111221221111122112221122112221221122111111221122111221122221122211122212211221111fffffbffffffffafffffffffffffffff
        fffffffffffffffffffffffffffffffff11224111111221111221221111122111221122111221122221111111221122112211122222122221222212211221111ffffffffbfffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff11221111111222222221222222122112221122112221122221111111222221112211222222122221222212222211111ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff11221111111222222221222222122222211122222211112211111111222222112222222222122122212212222221111ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffafffffffaffff11224111111221111221221111122222111122222111112211111111221142212222222222122122212212211422111fffffaffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff11122411221221111221221111122122211122122211112211111111221112211222222221122112112212211122111fffffaffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffaffff112222222122111122122222212211222112211222111221111111122222221122222222112211211221222222211fffffaafffffffffffaffffffffffffff
        fffffffffffffffffffffffffffffaffff111122221122111122122222212211122212211122211221111111122222411111222211112211111221222224111ffffaaaffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffaacaafffffffffffffffffffffffff
        ffffffffffffffffffffffffafff8f8ffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff8a8a8affffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaafff8ffffffffffffffffffff
        fffffffffffffffffffffffffffffffff8fffffffffffddfdfdffddfdddfdddffffffddfdfdfdfdfdddfdfdfdddffffffddfdfdfdddfdfdfdddfffffffffffffaa8a8a8afffffffffffffffffdffffff
        fffffffffffffffffffffffffffffffffaffffffffffdfffdfdfdfdfdfdffdffffffdfffdfdfdfdfdfdfdfdfdfffffffdfffdfdfdddfdfdfdfdffffffffffffaaaaaaaaaffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffdddfdddfdfdfddfffdffffffdddfdddfdfdfdddfdfdfddffffffdddfdddfdfdfdfdfdddfff8fffffff8a8a8a8a8affffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffdfdfdfdfdfdfdffdffffffffdfdfdfdddfdfdfdddfdfffffffffdfdfdfdfdfdfdfdfffffaafffaa8aaa8aaa8aafffffffffffffdffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffddffdfdfddffdfdffdffffffddffdfdfdddfdfdffdffdddfffffddffdfdfdfdffddfdfffff8aff8a8a8a8a8a8affffffffffffffffffffffffff
        fffffffffffffffffff6f6fffff6f6fffffaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaffaaaaffffffffffdffffffffffffffff
        ffffffffffffffffff6777ffff6777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8afa8a8afffa8a8fffffffffffffffffffffffffff
        fffffffffffffff6f6f187fffff187ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafa8aaa8fff8aaffffffffffffffffffffffffffff
        fffffffffffffff777ff666766ff66fffffffafafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffafa8a8a8f8a8ffffffffffffffffffffdffffffff
        fffffffffffffff187ffff6187fffffffffffafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8faa8aaa8aaafffffffffffffffffffffffffffff
        ffffffffffffffff66fffff61fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8f8a8a8a8a8affffffffffffffffffffffffffff
        ffffffffffffffffff8ffffff6fff8afffa8ffffffff7fff7fff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa8a8a8a8a8a8ffffdff66ff66fffffffffffffff
        ffffffffff7fffffffffffffff7ffa7fff7f8fffff7fff7fff7fff7fffffffffff88ffffffffffffffffffffffffffffff88fffffffffffffffffffffa8a8a8a8fffffffbf66766766ffffffffffffff
        ffffffffffffffffffffffff7fff7fff7faf7ffffffffffffffffffffff888fffffff8ffffffffffffffffffffffff8f8ffffffffffffffffffffffff8a8a8a8ffffffafff67777776ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888ffffffffffffff888fffffffff8fffffffffffffffdfff6a6a8fff6f6ffaff67118176ffffffffffffff
        ffffffffffffffffffffffffffa8ffaff8afffffffff88888888888888fffff8ffffffffffff88888888888888fffffffff8f8ffff88888888888ffff67778a8f6777ff8fff718817fffffffffffffff
        ffffff7ffffffff7ffffff8af66a866f8a8afffffff8888888888888888ffff8f88888ffffffffffffffffffffffff8ff8fffffff88888888888886f6f187a8a8a187f8affff6116ffffffffffffffff
        fffffffffffffffffffff8a866766766a8afa8affff888888888888888888fffffffff888888ffffffffffffff8888fffffffff888888888888886777ff666766ff66fa8fff6f66f6fffffffffffffff
        ffffffffffffffffffffff8a67777776888a888ffff8888aaaaacc888888888fffffffffffff88888888888888ffffffffff8888888cca4aaa8888187ffa861878ffff8afff6ffff6fffffffffffffff
        fffffffffffffffffffffff867118176a8a8affffff888aaaaaaacccc88888888fffffffffffffffffffffffffffffff8888888888ccd44411a888f66ff8af61a8fff8afffffffffffffffffffffffff
        ffffffffffffffffffffffff871881788a8f8ffffff888a1a1aaddddccc8888888888888ffffffffffffffffffffff888888888cccddd44aa4a888ffffff8ff86ff88a8ff7fff7ffffffffffffffffff
        fffffffffffffffff66ff66fa86116a8a8a8affffff888aaa444ddddddcccc88888888888888888888888888888888888cccccccdddddaaa44a888fffff8afffffa8fff7fff7fff7ffffff7fffffffff
        ffffffffffffffff667667768676686888888ffffff888aaaa4ddddddddddcccccc88888888888888888888888888ccccccdddddddddddaa44a888ffffff88f8f8ffffffffffffffffffffffffffffff
        ffffffffffff7fff6777777676a87868a8a8affffff888a4aadddddddddddddccccccc88888888888888888888cccccdddddddddddddddd444a888ffffffafa8a8ffffffffffffffffffffffffffffff
        ffffffffffffffff671181768a888a888a8886f6fff886a64ddddddddddddddddddccccccccccccccccccccccccccdddddddddddddddddd4444888ffffff7a887fff7fffffffffffffffffffffffffff
        fffffffffffffffff7188178a8a8a8a8a8a86777fff867774dddddddd11ddddddddd8881111188888888888888888ddddddd111d1d1ddddd444888ffff7ff878af7fff7fffffffffffffffffffffffff
        ffffffffffffffffff61168888888888f6f6f187fff881874ddddddddd111d1ddddd8881111188888888666888888dddddd111111111dddd444888fffffff8888fffffffffffffffffffffffffffffff
        fffffffffffffffff6f66f68a8aff8af6777ff66676688664ddddddd111111111ddd8881111118888888866688888dddd11111111111dddd444888ffffffffa8aff8affffffffffff7ffffffffffffff
        fffffffffffffffff6fff868888fff8ff187ffff618788444dddddd111111111d1118881111118888888666611881111111111111111dddd444888fffffff88888686fffff6f6fffffffffffffffffff
        fffffffffffffffffff8a8a8a8a8ffa8af66fffff61f888444ddddd1111111111111188811118888888886611188111111111111111ddddd444888ffffffa8a8a6777ffff6777ffffffffffffff7ffff
        ffffffffffffffffff8888888888f8888f8ffffffff6888444ddd6ddd61116111111188811118888888666111888111111111111111dddd4444888ffffff88686f187fffff187fffffffffffffffffff
        ffffffffffffffffffa888a8f8aff8ff88afffffffff88884446ddd61116111611111188888886868666611188881111111111111d1ddd4444888faffffff6777ff666766ff66fffffffffffffffffff
        fffffff7ffffffffff888888f888ff88888ffffffffff888444dddddd111111111111188888866666666111888811111111111d111dddd4444888ffffffff8187ffff6187fffffffffffffffffffffff
        ffffffffffffffffffffa8fffff8a788f7fff7ffffffff888444ddddddddd11111111118888866666666118888111111111d111dd1ddd4444888fff8fffff88668ffff61ffffffffffffffffffffffff
        fffffffffffffffffffffffffff78887f8f7fff7f8fffff8884444dddddd1111111111118888866666888888111111111ddd1111dddd4444886f6fffff6f688888ffffff6fffffffffff7fffffffffff
        ffffffffffffffffffffffffffff88a8ffffffffffffffff8884444dddddd111111111111888888888888811111111111111d11ddd44444886777ffff6777fa88fffffffffffffffffffffffffffffff
        ffffffffffffff7fffffffff8fff8888fffffffffffffffff8884444dddddd1d1111111111118888888111111111111111111dddd444446868187fffff187888ffffffffffffffffffffffffffffffff
        ffffffffff7ffffffffffffff88fa88fffffffffffffffffff88444444dddd4111111111111111111111111111111111111dddd4444446777ff666766ff66888fffffffff7fff7ffffffffff7fffffff
        fffffffffffffffffff7fff7fffff88fffff88fffffffffffff888444445dd4dd111111111111111111111111111111161dd6d44644888187ffff6187ffff88ffffffff7fff7fff7ffffffffffffffff
        fffffffffffffffff7fff7fff7fff8fffff885ffffffffffffff8554444444dddd111111111111111111111111111161dd6d4464446888866fffff61ffff8888ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff8ff5ff5fff5fff5fff4444844444444dd1111111111111111111111111111dd4444444888888ffffffffff6ff88888ff8fffffffffffffffffffffffffffff
        fffffffff7fffffffffffffffffffffffdff48fffff5ffff5544555445844411445dd111111111111111111111111ddd4411448888888ffffffffffffff8888ff88fffffffffffffffffffffffffffff
        fffffffffffffffffffff8fffffff88ffffff4444ffff5ff45551111558484544444dd111111111111111111111dd44441444888888fffffffffffff8f66886688ffffffff66ff66ffffffffffffffff
        fffffffffffffffffffff86f6ff8ff6865f44555544ffffd4511111111544544444444441111111111111111144444444448888888fff7fff7fff7fff667667668fffffff6676676ffffffffffffffff
        fffffffffffffffffffff6777ff8f67775f45111154ff5f445555111111555448444444444444444444444444444444448888888fff7fff7fff7fff7f67777776ffffffff67777776fffffffffffffff
        ffffffffffffffffff6f6f187ff8ff18784511111154ff45511115511111515544584444144114111114114414444448888888fffffffffffffffffff67118176ffffffff67118176fffffffffffffff
        fffffffffffffffff6777ff666766f86684511111154f45111111115111151115548888444454444444444444588888888888fffffffffffff66ff66f8718817ffffffffff718817ffffffffffffffff
        ffffff7fffffffffff187ffff6187f8ff84511111154451111111111511115111544858851111885888888858888888888fffffffffffffff66766766ff6116fff66ff66fff6116fffffffffffffffff
        fffffffffffffffffff66ff8ff61ffffff4511111154451111111111511115111448858554541588888885854554588811fffffffffffffff67777776f6f66f6f66766766f6f66f6ffffffffffffffff
        ffffffffffffffffffffffffffff6fff588451111544511111111111151115411155f4511115548588888451115154f111fffffffffffffff6711817686ffff6f67777776f6ffff6ffffffffffffffff
        ffffffffffffffffffffffffffff8fff888845555444511111811111151115455444f45151115155455411111511145f1fffffffffffffffff718817fff88888f67118176ffffffffffff7ffffffffff
        fffffffffffffffffffffff8ffffff4f888884445555511111a81111151151511154511111511111511541111111154e11fffffffffffffffff6116ffff8ff8fff718817ffffffffffffffffffffffff
        ffffffffff8fffffffffffffffffffff8858884511115111111aa11115151151115411111111111141115111151114c111aaefffffffffffff6f66f6fffff8f8f8f6116fffffffffffffffffffffffff
        fffffffffffffffffffffff8fff8ff8858885451111115111111a8115551114111451111111111155445151111d444f14444aaffffffffffff6ffff68fff888ff86f66d6ffffffffffffffffffffffff
        ffffffffffffffff8fffffffffff8888888884511111151111111a815111111145111111115111144181155551dde4f545eefffafffffffffffffffff8ffffffff6ffff6fffff8fffffffffffffff7ff
        fffffffffffffffffffffffffff88888888884511111155111111aaf811111155111511111151151aa4551151dddd55eeaeafffaffffffdffff8fffffffffffff88fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff88888f88844111111545511115a8f5111155888885555411411aa11111111ddd5deeaaafaffffffffffffff8fffffffffff88fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff88888fff58845111154844555544af8855588816868815111efaa11111111dddddd54aefffffffffffff8ffffffffffffff88ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff8f88ffff888455554884f4444fffff8c88868888888811ffaad1d1111111dddddd44efaaffffffffffffff8ffffffffffff8f88ffffff8ffffffffffffffffffffff
        ffffffffffffffffffffffffffffff88555888855444ff88ffff5aa8ffc888888f8f8ff88fffaddd1111111dddddddeefffafffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff85888ffffff55fff122a888a8888a88aa8a88ffcdedd1d1111dddddd4eeeefffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff8ffffff8fffffffffffffffffffff885ffffffff18a22a88aa8ff66f88fa88ffcdad1d1dd1dd1ddddd54eefffffdffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8f8ff88fff511fa22a8aafff6116f8f8aa8cc8eddd51ddd1dddddd444effffffffafffffffffffff8ffffffffffffffffffffffffffffffff8fffffff
        fffffffffffffff8fffffffffffffffffffffffffffffff5515ffa222aaf886111168fa8a8faaeedd415ddd41dddddeeeeffffffffffffffffdfffffffffffffffff8fffffff8fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff8fffffff511588fa22aaaf8c611116c8faaaa22e4dd4515ddedddeddd4daafdffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff88ffff5111588ffaa288f88f6116c8cfa8a22244dee4115dedddae4eeeaeefffffffff8ffffffffffffffffffffff888fffffffffff8fffffffffffff
        fffffffffffffffffffffffffffffffff88ffffd8fff511158f88a22288f8cff66fc8c8faa22e54daed5154aed4af44feeaadfffffff8ffffffffffffffffffffffffff8ffffffffffffffffffffffff
        fffffffffffffffffffffff8fffffffff8fffffffff51115ffffaa228f66f8bfff8868c8feaaee4efcf5115ae4defceffeeaffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff551115f8fffa22af6116ff8f8f666f8cf2afaeafdff5115ee4affaaffaaffffffff8ffffffffffffffffff8fff8ffffffffffffffffffffffffffff
        fffffff8ffffffffffffffffffffffffffffff8f511115f88f88a22a611116fff861116f8f2aaafffeef5115efefaff8ffff8ffff8f88fffffffffffffffffffff8fffffffff8fffffffffffffffffff
        ffffffffffffffff8ffffffffffaeeea44444444411158f88ff8a288611116f8866111668f2aaaaff8ffa5115fefaff8ffffffff8ffffffffffffffffff8ffff8fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffaaa22222224444444444444ac86116fbfb861116f8f2afaffffffa5115aeeafff88fffff88f8f88ff8ffffffffff88ffff8ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffbfffffffffaaaaa222222222222244a8df66f8cfb8f666f88f2adfffffffaf5115e88afffffffff8ffffffffffffffff8ff8ffffff8fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff8ff88aaa222222222224afb8fff8ffbcff6ff88faaaafffffaa8511158ffff888ff8f8888f8ff8fffffffff8f8f88ffff8ffff8fffffffff8fffffffffffff
        fffffffffffffffffffffffffffffff8ff8ffaa88aaa8aaaaaaaa2c88888fffffb8ffccffaafaaa8888888f51115f8888fffff888888ff8ffffff8fffff8ff88ffffffffffffffffffffffffffffffff
        ffffffffffffffffffff8ffffffffffffffff8aaa888888888aaaac8c8ffffffffb888ff8aaaa88888888f8f5111588888ffff88f888888fffffffffff8fffffffff8ffffff8ffffffffffffffffffff
        ffffffffffffffffffffffffffff88fffffffff88888888888888a88888ffffffff88fff8aaaaaa44444ffff51115a88888ffff8ffff8ffff8fff8fffff8ffff8fff88ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff88fffffffff888888888688888888f88888888888888faaaa822222222244444588f888888888ffff88ffff88ffffff88fff88fff8ffffffffffffffffffffffffff
        ffffffffffff8ffffffffffffffffffffffffff888888888888888888fffff8888888888ffff8aaa222222222222244448ffff888fff88fffff888fffff88fff88ffffffffffffffffffffffffffffff
        ffff8fffffffffffffffffffffffffffffffffffffff8888888888ff888ffffffffff8ffff88888aaa88aaaaaa22222222eafffffff888f8fff8f8fbffff8fffffffffffffffff8fffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8888888888ffff88fffffffffffff8888fff8ff8ff88fa88a88aaaaaaffffff88fffffff8ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff88888888ffffffff8ffffffffffff8f8ff888888ffff8aa8a8f88f8fffffffffff8fffff8f8fffffff8fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8ffffffffff88888888888ffffffffff88ffffffffff888888888888888aa8888fff888ffffffff8fffff8888ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff8ffffffffffffffffffff888888888888f8ff8ffffffffff8fffff88888888888888888888ff8ffff8ffffffffffffffff88ff8fffffffffffffffffffffffffffff8ffffffff
        ffffffffffffffffffffffffffffffffffffffff8f88f8888ffffffffffffffffffffffff8ff8888888888888888888ff88fff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8ff88f88ffffffffffffffffffffff8ff8888f888888888888888ffffff8ffffffffffffffffffffffffffff8ffffff8fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8f8ff8f8ff8fffffffffffff8ffffffffff88ff888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffff888888888888fffffff88fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffff8888888888fff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffff8ffff888f888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `
    scene.setBackgroundImage(cherryl)
    mode = "start"
    text_button = "Press A to start"
    press_button_text = textsprite.create(text_button)
    press_button_text.setOutline(1, 2)
    press_button_text.setPosition(80, 100)
}
function hurt_player (sprite: Sprite) {
    if (!(sprites.readDataBoolean(sprite, "invulnerable"))) {
        scene.cameraShake(6, 500)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        sprites.setDataBoolean(sprite, "invulnerable", true)
        player_explosion.setPosition(sprite.x, sprite.y)
        animation.runImageAnimation(
        player_explosion,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 9 9 8 . . . . . . 
            . . . . . . a 9 9 a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 8 . . . . . 
            . . . . a . . . . 8 8 . . . . . 
            . . . . a 8 . . 8 9 8 . . . . . 
            . . . . . a 8 b 9 9 8 . . . . . 
            . . . . . a 9 9 9 9 8 . . . . . 
            . . . . . . a 9 9 9 9 8 . . . . 
            . . . . . . a 9 8 a 8 8 . . . . 
            . . . . . . 8 8 . . a 8 8 . . . 
            . . . . . 8 8 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . a . . . . . . . . . . . 8 . . 
            . a a . . . . . . . . . 8 8 . . 
            . a b a . . 8 8 . . 8 8 b 8 . . 
            . . a 9 a 8 9 9 8 8 b b 8 8 . . 
            . . a b 9 b 1 1 b 9 9 b 8 8 . . 
            . . 8 9 9 1 1 1 1 9 1 1 9 8 . . 
            . 8 9 9 9 9 1 1 9 1 1 1 b 8 8 . 
            . 8 b 9 1 1 9 9 9 1 1 1 9 9 8 . 
            . 8 8 9 1 1 9 9 9 9 9 b 9 9 8 . 
            . . 8 a b 9 9 9 b 9 9 b b b 8 . 
            . 8 9 9 b 9 9 9 b b b 9 9 8 . . 
            . 8 9 9 b a 9 b b a b 9 9 8 . . 
            . 8 8 b b 8 b b b 8 a b b 8 . . 
            . . 8 9 8 8 8 8 8 8 8 8 8 . . . 
            . 8 9 8 . . 8 8 8 . . . 8 8 . . 
            . 8 8 . . . . . . . . . . 8 8 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b a 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . a d d b . . . . . b d 1 1 b 
            . b 1 d a . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d a d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b a d d a b . 
            . . b d d a a b d a a b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `,img`
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
            `,img`
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
            `,img`
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
            `,img`
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
            `],
        50,
        false
        )
        for (let index = 0; index < 6; index++) {
            sprite.setFlag(SpriteFlag.Invisible, true)
            pause(100)
            sprite.setFlag(SpriteFlag.Invisible, false)
            pause(100)
        }
        player_explosion.setImage(img`
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
        sprites.setDataBoolean(sprite, "invulnerable", false)
    }
}
function pop_text_update () {
    for (let value4 of sprites.allOfKind(SpriteKind.Text)) {
        if (!(sprites.readDataBoolean(value4, "cherryUI"))) {
            if (sprites.readDataNumber(value4, "age") > 0) {
                sprites.changeDataNumberBy(value4, "age", -1)
            } else {
                if (sprites.readDataBoolean(value4, "wave text")) {
                    spawn_wave()
                }
                sprites.destroy(value4)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pickup, function (sprite, otherSprite) {
    pickup_logic(otherSprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "game") {
        if (cher > 0) {
            music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            muzzleFlash(muzzle, myShip)
            spreadshot_from_shooter_number_of_shots_starting_angle(myShip, cher + 2, 135)
            cher = 0
            cherry_text.setText(convertToText(cher))
        } else {
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        }
    }
})
sprites.onOverlap(SpriteKind.Bullet, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    hurt_enemy(otherSprite)
})
function spawn_enemy_type_x_y (_type: number, x: number, y: number) {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Enemy)
    mySprite.left = x
    mySprite.top = y
    mySprite.setFlag(SpriteFlag.AutoDestroy, false)
    if (_type == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`greenEnemy`,
        100,
        true
        )
        sprites.setDataNumber(mySprite, "type", 1)
        sprites.setDataNumber(mySprite, "hp", 3)
        sprites.setDataNumber(mySprite, "score", 100)
    } else if (_type == 2) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`redEnemy`,
        200,
        true
        )
        sprites.setDataNumber(mySprite, "type", 2)
        sprites.setDataNumber(mySprite, "hp", 2)
        sprites.setDataNumber(mySprite, "score", 200)
    } else if (_type == 3) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`purpleEnemy`,
        100,
        true
        )
        sprites.setDataNumber(mySprite, "type", 3)
        sprites.setDataNumber(mySprite, "hp", 4)
        sprites.setDataNumber(mySprite, "score", 300)
    } else if (_type == 4) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`yellowEnem`,
        200,
        true
        )
        sprites.setDataNumber(mySprite, "type", 4)
        sprites.setDataNumber(mySprite, "hp", 20)
        sprites.setDataNumber(mySprite, "score", 1000)
    } else if (_type == 5) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        100,
        true
        )
        sprites.setDataNumber(mySprite, "type", 5)
        sprites.setDataNumber(mySprite, "hp", 5)
        sprites.setDataNumber(mySprite, "score", 10000)
        mySprite.setFlag(SpriteFlag.ShowPhysics, true)
    }
    sprites.setDataString(mySprite, "mission", "flyin")
    sprites.setDataNumber(mySprite, "targetX", mySprite.x + 14)
    sprites.setDataNumber(mySprite, "targetY", mySprite.y + 135)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mode == "game") {
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        muzzleFlash(muzzle, myShip)
        fire_from_shooter_at_angle(myShip, 180)
    } else if (mode == "start") {
        sprites.destroy(press_button_text)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        start_game()
    }
})
function aimed_shot_from_shooter_to_target (shooter: Sprite, target: Sprite) {
    angle = Math.atan2(target.x - shooter.x, target.y - shooter.y)
    // convert to degrees
    fire_from_shooter_at_angle(shooter, angle * 57.296)
}
function spreadshot_from_shooter_number_of_shots_starting_angle (shooter: Sprite, num: number, starting_angle: number) {
    if (shooter.kind() == SpriteKind.Enemy) {
        for (let index2 = 0; index2 <= num - 1; index2++) {
            fire_from_shooter_at_angle(shooter, index2 * 360 / (num - 1) + starting_angle)
        }
    } else {
        for (let index3 = 0; index3 <= num - 1; index3++) {
            fire_from_shooter_at_angle(shooter, index3 * 90 / (num - 1) + starting_angle)
        }
    }
}
function boss_attack (boss: Sprite) {
    if (sprites.readDataString(boss, "submission") == "mission1") {
        boss.x += sprites.readDataNumber(boss, "vx")
        boss.y += sprites.readDataNumber(boss, "vy")
        if (boss.x < 20 || boss.x > 140) {
            sprites.setDataNumber(boss, "vx", sprites.readDataNumber(boss, "vx") * -1)
            sprites.changeDataNumberBy(boss, "counter", 1)
        }
        if (sprites.readDataNumber(boss, "counter") == 5) {
            sprites.setDataNumber(boss, "counter", 0)
            sprites.setDataNumber(boss, "vy", 1)
            sprites.setDataNumber(boss, "vx", 0)
            sprites.setDataString(boss, "submission", "mission2")
        }
        if (!(t % 6 <= 1)) {
            if (t >= sprites.readDataNumber(boss, "shoot timer")) {
                fire_from_shooter_at_angle(boss, 0)
                sprites.setDataNumber(boss, "shoot timer", t + 1)
            }
        }
    } else if (sprites.readDataString(boss, "submission") == "mission2") {
        boss.x += sprites.readDataNumber(boss, "vx")
        boss.y += sprites.readDataNumber(boss, "vy")
        if (boss.y > 105) {
            sprites.setDataNumber(boss, "vx", 1)
            sprites.setDataNumber(boss, "vy", 0)
        }
        if (boss.x > 140) {
            sprites.setDataNumber(boss, "vx", 0)
            sprites.setDataNumber(boss, "vy", -1)
        }
        if (boss.y <= 29) {
            sprites.setDataNumber(boss, "vx", -1)
            sprites.setDataNumber(boss, "vy", 0)
            sprites.setDataString(boss, "submission", "mission3")
        }
        if (t >= sprites.readDataNumber(boss, "shoot timer")) {
            aimed_shot_from_shooter_to_target(boss, myShip)
            sprites.setDataNumber(boss, "shoot timer", t + 3)
        }
    } else if (sprites.readDataString(boss, "submission") == "mission3") {
        boss.x += sprites.readDataNumber(boss, "vx")
        boss.y += sprites.readDataNumber(boss, "vy")
        if (boss.x < 20 || boss.x > 140) {
            sprites.setDataNumber(boss, "vx", sprites.readDataNumber(boss, "vx") * -1)
            sprites.changeDataNumberBy(boss, "counter", 1)
        }
        if (sprites.readDataNumber(boss, "counter") == 4) {
            sprites.setDataNumber(boss, "counter", 1)
            sprites.setDataNumber(boss, "vy", 1)
            sprites.setDataNumber(boss, "vx", 0)
            sprites.setDataString(boss, "submission", "mission4")
        }
        if (t >= sprites.readDataNumber(boss, "shoot timer")) {
            spreadshot_from_shooter_number_of_shots_starting_angle(boss, 8, sprites.readDataNumber(boss, "starting angle"))
            sprites.changeDataNumberBy(boss, "starting angle", 6)
            sprites.setDataNumber(boss, "shoot timer", t + 3)
        }
    } else if (sprites.readDataString(boss, "submission") == "mission4") {
        boss.x += sprites.readDataNumber(boss, "vx")
        boss.y += sprites.readDataNumber(boss, "vy")
        if (boss.y > 105) {
            sprites.setDataNumber(boss, "vx", -1)
            sprites.setDataNumber(boss, "vy", 0)
        }
        if (boss.x < 20) {
            sprites.setDataNumber(boss, "vx", 0)
            sprites.setDataNumber(boss, "vy", -1)
        }
        if (boss.y <= 29) {
            sprites.setDataNumber(boss, "vx", 1)
            sprites.setDataNumber(boss, "vy", 0)
            sprites.setDataString(boss, "submission", "mission1")
        }
        if (t >= sprites.readDataNumber(boss, "shoot timer")) {
            if (sprites.readDataNumber(boss, "vx") < 0) {
                fire_from_shooter_at_angle(boss, 180)
            } else if (sprites.readDataNumber(boss, "vy") > 0) {
                fire_from_shooter_at_angle(boss, 270)
            } else if (sprites.readDataNumber(boss, "vy") < 0) {
                fire_from_shooter_at_angle(boss, 90)
            }
            sprites.setDataNumber(boss, "shoot timer", t + 4)
        }
    } else if (sprites.readDataString(boss, "submission") == "mission5") {
        sprites.setDataNumber(boss, "vx", 0)
        sprites.setDataNumber(boss, "vy", 0)
        boss.x += sprites.readDataNumber(boss, "vx")
        boss.y += sprites.readDataNumber(boss, "vy")
    }
}
function pick_shooter () {
    myEnemy = sprites.allOfKind(SpriteKind.Enemy)._pickRandom()
    for (let value3 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataNumber(value3, "type") == 4) {
            if (Math.percentChance(50)) {
                myEnemy = value3
            }
        }
    }
    enemy_shoot()
}
function createShip () {
    myShip = sprites.create(assets.image`shipfront`, SpriteKind.Player)
    controller.moveSprite(myShip)
    myShip.setPosition(80, 100)
    myShip.setStayInScreen(true)
    sprites.setDataBoolean(myShip, "invulnerable", false)
    muzzle = sprites.create(img`
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
        `, SpriteKind.MuzzleFlash)
    muzzle.setStayInScreen(true)
    flame = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Flame)
    animation.runImageAnimation(
    flame,
    [img`
        . . . . . . . . 
        . . . 1 1 . . . 
        . . 9 1 1 9 . . 
        . . 9 9 9 9 . . 
        . . . 9 9 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 9 9 . . . 
        . . . 9 9 . . . 
        . . . 9 9 . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . 1 1 . . . 
        . . 9 1 1 9 . . 
        . . 9 9 9 9 . . 
        . . . 9 9 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . 9 1 1 9 . . 
        . 9 9 9 9 9 9 . 
        . . 9 9 9 9 . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . 1 1 . . . 
        . . 9 1 1 9 . . 
        . . 9 9 9 9 . . 
        . . . 9 9 . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `],
    60,
    true
    )
    flame.setStayInScreen(true)
}
function blink (sprite: Sprite) {
    for (let index = 0; index < 2; index++) {
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(50)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(50)
    }
}
function enemy_action () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataString(value2, "mission") == "attack") {
            if (sprites.readDataNumber(value2, "wait") <= 0) {
                if (sprites.readDataNumber(value2, "type") == 1) {
                    value2.vy = 50
                    value2.vx = Math.sin(game.runtime() / 56) * 100
                } else if (sprites.readDataNumber(value2, "type") == 2) {
                    value2.vy = 75
                    value2.vx = Math.sin(game.runtime() / 1) * 100
                } else if (sprites.readDataNumber(value2, "type") == 3) {
                    value2.vy = 50
                    if (value2.y >= sprites.readDataNumber(value2, "targetY")) {
                        value2.vy = 0
                        value2.vx = sprites.readDataNumber(value2, "targetX")
                    }
                } else if (sprites.readDataNumber(value2, "type") == 4) {
                    value2.vy = 20
                    if (t >= sprites.readDataNumber(value2, "shoot timer")) {
                        if (value2.y < 110) {
                            spreadshot_from_shooter_number_of_shots_starting_angle(value2, 8, randint(0, 45))
                            sprites.setDataNumber(value2, "shoot timer", t + 10)
                        }
                    }
                } else if (sprites.readDataNumber(value2, "type") == 5) {
                    sprites.setDataString(value2, "submission", "mission1")
                    sprites.setDataString(value2, "mission", "bossattack")
                    sprites.setDataNumber(value2, "vx", -1)
                    sprites.setDataNumber(value2, "vy", 0)
                    sprites.setDataNumber(value2, "counter", 0)
                }
            } else {
                sprites.changeDataNumberBy(value2, "wait", -1)
                value2.x += Math.sin(game.runtime() / 10) * 1
            }
            if (value2.y > 140 || (value2.x > 180 || value2.x < -20)) {
                sprites.destroy(value2)
            }
        } else if (sprites.readDataString(value2, "mission") == "flyin") {
            if (Math.abs(sprites.readDataNumber(value2, "targetY") - value2.y) < 0.7) {
                value2.y = sprites.readDataNumber(value2, "targetY")
                sprites.setDataString(value2, "mission", "wait")
            } else {
                if (sprites.readDataNumber(value2, "type") == 5) {
                    value2.x += (sprites.readDataNumber(value2, "targetX") - value2.x) / 30
                    value2.y += (sprites.readDataNumber(value2, "targetY") - value2.y) / 30
                } else {
                    value2.x += (sprites.readDataNumber(value2, "targetX") - value2.x) / 16
                    value2.y += (sprites.readDataNumber(value2, "targetY") - value2.y) / 16
                }
            }
        } else if (sprites.readDataString(value2, "mission") == "bossattack") {
            boss_attack(value2)
        }
    }
}
function next_wave () {
    wave += 1
    if (wave > final_wave) {
        game.gameOver(true)
    } else {
        for (let value of sprites.allOfKind(SpriteKind.EnemyBullet)) {
            sprites.destroy(value)
        }
        if (wave == final_wave) {
            wave_text = textsprite.create("Final wave")
        } else {
            wave_text = textsprite.create("Wave " + wave + " of " + final_wave)
        }
        wave_text.setPosition(80, 40)
        wave_text.setOutline(1, 10)
        sprites.setDataNumber(wave_text, "age", 80)
        sprites.setDataBoolean(wave_text, "wave text", true)
    }
}
function start_game () {
    mode = "game"
    explosionImages_0 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ........................444444..................................
        ....................d4444444444444..............................
        ....................4444444444444444444...4.....................
        ...................444554444455444444444444.....................
        ..................44445555445555444444444444....................
        ..................44555555555dd55544444444444...................
        ..................45555d55555ddd55544444455444..................
        ..................4555dddddddddd55545555555544..................
        ..................455dddddddddd555555dddd55554..................
        .................4455dddddddddd555555dddddd554..................
        .................4555dddddddddd555555dddddd554..................
        .................455555ddddddd5555555dddddd554..................
        .................44555555555555555555555555444..................
        ................44445555555555555555555555544...................
        ................4455545555555555555555555554....................
        ...............4445555555555555555555dd555544...................
        ...............44555dddd555555555555ddddd55444..................
        ..............44555dddddd5555555555dddddd55444..................
        ..............4455dddddddddd5555555dddddd55544..................
        ..............44455ddddddddd5555555dddddd55544..................
        ...............444555555ddddddd5555ddddd555444..................
        ...............444555555ddddddd555555555554444..................
        ................4444444555dddd555555555554444...................
        .....................44455555555544444444444....................
        ......................4444555554444444444.......................
        ......................4444444444444.............................
        ..................44...44444444444..............................
        ..................d4....444444444...............................
        .....................................44.........................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    explosionImages_1 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .......................22222222...2444424.......................
        ......................244444442222444444424.....................
        .....................244444444444444444444444...................
        ....................2444444444444444444444442...................
        ....................24444444444444444444444442..................
        ..............22222224444444444444444444444442..................
        ............24444444444dddddddd444444dddd444444222..............
        ...........244444444444dddddddd44444ddddddd44444442.............
        ...........244444444dddddddddddd4444dddddddd444444444...........
        ...........24444444ddddddddddddd444dddddddddd44444444...........
        ...........4444444dddddddddddddd444dddddddddd44444444...........
        ..........2444444dddddddddddddd4444dddddddddddd444444...........
        .........24444444dddddddddd444444444dddddddddddd44444...........
        .........24444444dddddddddd4444444444dddddddddddd4444...........
        .........24444444dddddddddd4444444444dddddddddddd4444...........
        .........24444444dddddddd44444444444ddddddddddddd4444...........
        .........244444444444444444444444444ddddddddddddd4444...........
        .........b44444444444444444444444444ddddddddddddd4444...........
        ..........244444444444444444444444444dddddddddddd4444...........
        ...........44442444444dddd444444444444ddddddddddd444............
        ...............244444ddddddd4444444444dddddddddd4442............
        ...............44444dddddddd44444444444dddddddd4444.............
        ..............24444ddddddddd4444444444444444444442..............
        ..............24444ddddddddd444dddddddddd44442244...............
        ..............24444dddddddd444ddddddddddddd4444.................
        ..............24444dddddddd44ddddddddddddddd4442................
        ..............24444444ddd4444dddddddddddddd44442................
        ..............24444444444444dddddddddddddd444442................
        ...............2444444444444ddddddddddddd4444442................
        .................2444444442444ddddddddd44442224.................
        ..................2444444424444444444444444.....................
        ....................22222...244444444444424.....................
        .............................224444444444.......................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ...................................................4............
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    explosionImages_2 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .................................b22222222......................
        ................................b42224444422....................
        ....................b4222222bbb422244444444444..................
        ....................b2222222222222444444444444..................
        ...................422222222222224444dddd44444..................
        ...................422222222222224444ddddd4444..................
        .............222222222224444444224444ddddd4442..................
        ...........bb222222222224444444424444ddddd4442..................
        .........bb22222222222444444444444444ddddd44444222..............
        ........bb222222222222444ddddd444444444444444444442.............
        ........b422222222222244ddddddddd4444444444444444444............
        ........b22222222222244ddddddddddd444444444444444444............
        ......bb222222244444444dddddddddd4444444444dd444444442..........
        ......b4222222444444444dddddddddd44444444ddddd44444442..........
        ......b22222224444ddddddddddddddd4444444dddddddd444444..........
        ......b422222444ddddddddddddddddd444444dddddddddd44444..........
        ......bb22222444ddddddddddddddddd444444ddddddddd444444..........
        .......bb222444dddddddddddddddddd44444dddddddddd444444..........
        ........bb22444dddddddddddd44444444444dddddddddd444444..........
        ..........22444dddddddddddd44444444444dddddddddd444444..........
        .........222444dddddddddddd44444444444dddddddddd444444..........
        ........2222444dddddddddddd44444444444dddddddddd444444..........
        ........2222444ddddddddddd44444444444444ddddddd4444444..........
        ........22224444ddddddddd444444444444444444ddd44444444..........
        ........222244444444ddd4444444444444444444444444444442..........
        .......222224444444444444444444444444444444444444442............
        .......22222244444444444444444444444444444444444442.............
        .......22222224444444444444ddd444444444444444444442.............
        .......22222222244444422444ddd444444444444444444442.............
        ..........2222222222222244dddd44444444dddddddd44442.............
        ..........2222222222222244dddd44444444dddddddd44442.............
        ............22222222222244dddd44422444dddddddd4444..............
        ............422222.2222244444444222444dddddddd4444..............
        ...................2222444444442222244dddddddd4444..............
        ...................2222444444422222244dddddddd4444..............
        ....................22222222222222222224ddddd44442..............
        ....................22222222222222222222444444442...............
        ......................2222222222....22222222222.................
        .......................22222222........2222222..................
        ..........................2222..................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    explosionImages_3 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        .................................eeeeee.........................
        .................................eeeeeee........................
        .....................eeeeeeeee.eeeeeeeeeee......................
        ....................eeeeeeeeeeeeeeeeeeeeeee.....................
        ..................eeeeeeeeeeeeeeeeeeeeeeeeee....be..............
        ..................eeeeeeebbbeeeeeeeeeeeeeeee....be..............
        ..................eeeeebbbbbbbbeeeeeeeeeeeeee...................
        ..................eeeeebbbbbbbbbeeeeeeeeeeeee...................
        .............eeeeeeeeeebbbbbbbbbbeeeeeeeeeeee...................
        ............eeeeeeeeeeebbbbbbbbbbbeeeeeeeeeee...................
        ...........eeeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeee.............
        ...........eeeeeebbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeee............
        ..........eeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeee...........
        .........eeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeee...........
        ........beeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbeee..........
        ........beeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbeee..........
        ........beeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbeeee..........
        ........beeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        ........beeeeeeebbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        ........beeeeeeebbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        .........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        ..........eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeee..........
        .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        ............beeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeee..........
        ............eeeeeeeeeeebbbeeeeeeeeeeeeeeeebbbbbbbbeeee..........
        ............eeeeeeeeebbbbbbbeeeeeeeeeeeeeebbbbbbbbeeee..........
        ............eeeeeeeebbbbbbbbbbeeeeeeeeeeeebbbbbbbbeeee..........
        ............eeeeeeeebbbbbbbbbbbeeeeeeeeeeebbbbbbbeeeee..........
        ............eeeeeeebbbbbbbbbbbbeeeeeeeeeeebbbbbbeeeeee..........
        ............eeeeeeebbbbbbbbbbbbbbbeeeeeeeebbbbbbeeeeee..........
        ............eeeeeeebbbbbbbbbbbbbbbbbeeeeeeebbbbeeeeee...........
        ............eeeeeeebbbbbbbbbbbbbbbbbbeeeeeeebbeeeeee............
        .............eeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeee............
        ..............eeeeeebbbbbbbbbbbbbbbbbeeeeeeeeeeeeee.............
        ..............eeeeeeeeeeebbbbbbbbbbbeeeeeeeeeeeee...............
        ...............eeeeeeeeeebbbbbbbbbbbeeeeeeeeeeee................
        ..................eeeeeeeeebbbbbbbeeeeeeeeee....................
        ......................beeeebbbbbbeeeeeeeeeee....................
        ......................beeeeeebbbeeeeeeee........................
        ...............e.......eeeeeeeeeeeeeee..........................
        .......................eeeeeeeeeeeee............................
        .........................eeeeeeeeee.............................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    explosionImages_4 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ...................................eeeb.........................
        .................................eeeeeb.........................
        ...............................eeeeeeeee........................
        ...............................eeeebbbeee.......................
        ...............................eeeebbbeee.......................
        ...............................eeeebbbbee.......................
        ...............................eeeebbbbeeeeeeeb.................
        .................................eeeeeeeeeeeeeeeee..............
        .............eeeeeeeeee...eeee....eeeeeeeeeeeeeeeee.............
        .............eeeeeeeeee..eeeeee....eeeeeeeeeeeeeeeee............
        ............eeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        ............eeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        ............eeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        ...........eeeebbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............
        ............eeebbbbbeeeeeeeeeeeeeeeeeeeeeeebbeeeeeee............
        .............eeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbeeeee............
        ..............eeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeee............
        .................eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeee............
        .................eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbeee............
        ...............eeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbeeee............
        ..............eeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbeeee............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbeeeee............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeee............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeeee............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeeee.............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbbeeeeeee..............
        .............eeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeee...............
        ..............eeeeeeeeeeeeeeeeeeeeebbbbeeeeee...................
        ...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeee...................
        ................eeeeeeeeeeeeeeeeeeeeeeeeeeeeb...................
        .................beeeeeeeee.eeeeeeeeeeeeeeee....................
        .....................eeee....eeeeeeeeeeeeee.....................
        ..............................eeeeeeeeeee.......................
        ...............................eeeeeeee.........................
        ................................eeeeee..........................
        ......................bbbbb.....................................
        .....................bbbbbbb....................................
        .....................ebbbbbb....................................
        .....................ebbbbbb....................................
        .....................eebbbbe....................................
        .....................eeeeeee....................................
        ......................eeeee.....................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    explosionImages_5 = img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `
    boss_0 = img`
        .....44.....77777777.....44.....
        44...2414877777557777784142...44
        414.862216777551155777612268.414
        24126766677575511557577666762142
        .242867777777751157777777768242.
        .222887777777775577777777788222.
        ..8886677777667777667777766888..
        ..7788677577766776677757768877..
        77666886775777777777757768866677
        77776866677551777715577666867777
        67666686666777111177766668666676
        66666667766666777766666776666666
        .667767677766666666667776767766.
        ..6877676677776666777766767786..
        ...86776776667777776667767768...
        .668667766555666666555667766866.
        67768667776665111156667776686776
        66668666777776666667777766686666
        ....676666777751157777666676....
        ...67666666677777777666666676...
        ...666..6766677777766676..666...
        ...66...6766667aa7666676...66...
        ........666.66a88a66.666........
        ........66....6666....66........
        `
    boss_1 = img`
        .....44.....77777777.....44.....
        44...2414877777557777784142...44
        414.862216777551155777612268.414
        24126766677575511557577666762142
        .242867777777775577777777768242.
        .222886676677777777776676688222.
        ..8867887776666666666777887688..
        ..7786778677766666677768776877..
        77666866666677511577666666866677
        7118644dd66666777766666dd4468117
        6188644ddddd66666666ddddd4468816
        661164ddd11d81188888d11ddd461166
        .66764dd1111811886181111dd46766.
        ..68764d1111188661811111d46786..
        ...86764dd111188881111dd46768...
        .668667644d1111111111d446766866.
        67768667664441111114446676686776
        66668666776664444446667766686666
        ....676666777666666777666676....
        ...67666666677511577666666676...
        ...666..6766677777766676..666...
        ...66...6766667aa7666676...66...
        ........666.66a88a66.666........
        ........66....6666....66........
        `
    boss_2 = img`
        .....44.....77777777.....44.....
        44...2414877777557777784142...44
        414.862216777551155777612268.414
        24126766677575511557577666762142
        .242867777777775577777777768242.
        .222886676677777777776676688222.
        ..8867887776666666666777887688..
        ..7786778677766666677768776877..
        77666866666677511577666666866677
        7118644dd66666777766666dd4468117
        6188644ddddd66666666ddddd4468816
        661164ddd11d81188888d11ddd461166
        .66764dd1111811886181111dd46766.
        ..68764d1111188661811111d46786..
        ...86764dd111188881111dd46768...
        ..68667644d1111111111d44676686..
        .676866766444111111444667668676.
        67668666776664444446667766686676
        66..676666777666666777666676..66
        ....676666667751157766666676....
        ....666.6766677777766676.666....
        ....66..6766667aa7666676..66....
        ........666.66a88a66.666........
        .........66...6666...66.........
        `
    boss_3 = img`
        .....44.....77777777.....44.....
        44...2414877777557777784142...44
        414.862216777551155777612268.414
        24126766677575511557577666762142
        .242867777777775577777777768242.
        .222886676677777777776676688222.
        ..8867887776666666666777887688..
        ..7786778677766666677768776877..
        77666866666677511577666666866677
        7118644dd66666777766666dd4468117
        6188644ddddd66666666ddddd4468816
        661164ddd11d81188888d11ddd461166
        .66764dd1111811886181111dd46766.
        ..68764d1111188661811111d46786..
        ...86764dd111188881111dd46768...
        ..68667644d1111111111d44676686..
        ..6786676644411111144466766876..
        .676866677666444444666776668676.
        .66.666666777666666777666666.66.
        ....676666667751157766666676....
        ....676.6766677777766676.676....
        .....66.6676667aa7666766.66.....
        .........66.66a88a66.66.........
        ..........66..6666..66..........
        `
    t = 0
    wave = 8
    final_wave = 9
    cher = 0
    max_lives = 5
    effects.starField.startScreenEffect()
    cherry_text = textsprite.create(convertToText(cher), 1, 3)
    cherry_text.setIcon(assets.image`cherry`)
    cherry_text.setPosition(80, 4)
    cherry_text.setBorder(1, 3, 1)
    cherry_text.z = 0
    sprites.setDataBoolean(cherry_text, "cherryUI", true)
    cherry_text.z = 2
    createShip()
    enemy_muzzle = sprites.create(img`
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
        `, SpriteKind.MuzzleFlash)
    enemy_muzzle.z = 1
    player_explosion = sprites.create(img`
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
        `, SpriteKind.PlayerExplosion)
    info.setScore(0)
    info.setLife(max_lives - 1)
    next_wave()
}
function fire_from_shooter_at_angle (shooter: Sprite, ang: number) {
    // turn degrees to radians
    angle = ang / 57.296
    if (shooter.kind() == SpriteKind.Enemy) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
        muzzleFlash(enemy_muzzle, shooter)
        projectile = sprites.createProjectileFromSprite(img`
            . . 3 3 . . 
            . 3 c c 3 . 
            3 c 1 2 c 3 
            3 c 2 2 c 3 
            . 3 c c 3 . 
            . . 3 3 . . 
            `, shooter, Math.sin(angle) * 75, Math.cos(angle) * 75)
        if (sprites.readDataNumber(shooter, "type") == 5) {
            projectile.y = shooter.y + 8
        }
        animation.runImageAnimation(
        projectile,
        [img`
            . . 3 3 . . 
            . 3 c c 3 . 
            3 c 1 2 c 3 
            3 c 2 2 c 3 
            . 3 c c 3 . 
            . . 3 3 . . 
            `,img`
            . . 3 3 . . 
            . 3 2 2 3 . 
            3 2 1 3 2 3 
            3 2 3 3 2 3 
            . 3 2 2 3 . 
            . . 3 3 . . 
            `,img`
            . . 1 1 . . 
            . 1 3 3 1 . 
            1 3 1 1 3 1 
            1 3 1 1 3 1 
            . 1 3 3 1 . 
            . . 1 1 . . 
            `],
        100,
        true
        )
        projectile.setKind(SpriteKind.EnemyBullet)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . 4 4 4 4 . . 
            . 4 5 5 5 5 4 . 
            4 5 5 1 1 5 5 4 
            4 5 1 1 1 1 5 4 
            4 5 1 1 1 1 5 4 
            4 5 5 1 1 5 5 4 
            . 4 5 5 5 5 4 . 
            . . 4 4 4 4 . . 
            `, shooter, Math.sin(angle) * 200, Math.cos(angle) * 200)
        projectile.setKind(SpriteKind.Bullet)
    }
}
function kill_enemy (sprite: Sprite) {
    if (sprites.readDataNumber(sprite, "type") != 5) {
        if (sprites.readDataString(sprite, "mission") == "attack") {
            info.changeScoreBy(sprites.readDataNumber(sprite, "score") * 2)
            pop_text(convertToText(sprites.readDataNumber(sprite, "score") * 2), sprite.x, sprite.y)
            if (Math.percentChance(25)) {
                prepare_enemy_attack()
            }
            if (sprites.readDataNumber(sprite, "type") == 4) {
                drop_pickup(sprite.x, sprite.y)
            } else if (Math.percentChance(20)) {
                drop_pickup(sprite.x, sprite.y)
            }
        } else {
            info.changeScoreBy(sprites.readDataNumber(sprite, "score"))
            if (sprites.readDataNumber(sprite, "type") == 4) {
                drop_pickup(sprite.x, sprite.y)
            } else if (Math.percentChance(10)) {
                drop_pickup(sprite.x, sprite.y)
            }
        }
        sprite.setFlag(SpriteFlag.Ghost, true)
        music.play(music.createSoundEffect(WaveShape.Noise, 1848, 1, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        sprite.x += -4
        sprite.y += -4
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        50,
        false
        )
        pause(300)
        sprites.destroy(sprite)
    } else {
        sprites.setDataString(sprite, "submission", "mission5")
        explosion_left = sprite.left
        explosion_top = sprite.top
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        sprite.setImage(img`
            .....dd.....11111111.....dd.....
            dd...bd1db11111dd11111bb1db...dd
            d1d.bdbb1d111dd11dd111d1bbdb.d1d
            bd1bd1ddd11d1dd11dd1d11ddd1db1db
            .bdbbd11111111d11d11111111dbbdb.
            .bbbbb111111111dd111111111bbbbb.
            ..bbbdd11111dd1111dd11111ddbbb..
            ..11bbd11d111dd11dd111d11dbb11..
            11dddbbd11d1111111111d11dbbddd11
            1111dbddd11dd111111dd11dddbd1111
            d1ddddbdddd1111111111ddddbdddd1d
            ddddddd11ddddd1111ddddd11ddddddd
            .dd11d1d111dddddddddd111d1d11dd.
            ..db11d1dd1111dddd1111dd1d11bd..
            ...bd11d11ddd111111ddd11d11db...
            .ddbdd11dd111ddddddddddd11ddbdd.
            d11dbdd111ddd11111dddd111ddbd11d
            ddddbddd11111dddddd11111dddbdddd
            ....d1dddd1111d11d1111dddd1d....
            ...d1ddddddd11111111ddddddd1d...
            ...ddd..d1ddd111111ddd1d..ddd...
            ...dd...d1dddd1bb1dddd1d...dd...
            ........ddd.ddbbbbdd.ddd........
            ........dd....dddd....dd........
            `)
        info.changeScoreBy(sprites.readDataNumber(sprite, "score"))
        pop_text(convertToText(sprites.readDataNumber(sprite, "score")), sprite.x, sprite.y)
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        for (let index = 0; index < 10; index++) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1848, 1, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            explosion2 = sprites.create(img`
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
                `, SpriteKind.Explosion)
            explosion2.setPosition(randint(explosion_left, explosion_left + 32), randint(explosion_top, explosion_top + 24))
            animation.runImageAnimation(
            explosion2,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `,img`
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
                `,img`
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
                `],
            50,
            false
            )
            pause(200)
        }
        for (let index = 0; index < 10; index++) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1848, 1, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            explosion2 = sprites.create(img`
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
                `, SpriteKind.Explosion)
            explosion2.setPosition(randint(explosion_left, explosion_left + 32), randint(explosion_top, explosion_top + 24))
            animation.runImageAnimation(
            explosion2,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . 3 . . . . . . . . . . . 4 . . 
                . 3 3 . . . . . . . . . 4 4 . . 
                . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                . 4 4 d d 4 d d d 4 3 d d 4 . . 
                . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                . 4 4 . . . . . . . . . . 4 4 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . b b b . . . . . 
                . . . . b 1 1 b 1 1 1 b . . . . 
                . . b b 3 1 1 d d 1 d d b b . . 
                . b 1 1 d d b b b b b 1 1 b . . 
                . b 1 1 1 b . . . . . b d d b . 
                . . 3 d d b . . . . . b d 1 1 b 
                . b 1 d 3 . . . . . . . b 1 1 b 
                . b 1 1 b . . . . . . b b 1 d b 
                . b 1 d b . . . . . . b d 3 d b 
                . b b d d b . . . . b d d d b . 
                . b d d d d b . b b 3 d d 3 b . 
                . . b d d 3 3 b d 3 3 b b b . . 
                . . . b b b d d d d d b . . . . 
                . . . . . . b b b b b . . . . . 
                `,img`
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
                `,img`
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
                `],
            50,
            false
            )
            pause(100)
        }
        sprite.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
        pause(100)
        music.play(music.createSoundEffect(WaveShape.Noise, 1848, 1, 255, 0, 800, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        explosion2 = sprites.create(img`
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `, SpriteKind.Explosion)
        explosion2.setPosition(sprite.x, sprite.y)
        animation.runImageAnimation(
        explosion2,
        assets.animation`bigExplosion`,
        100,
        false
        )
        pause(1000)
        sprites.destroy(sprite)
    }
}
function prepare_enemy_attack () {
    if (sprites.readDataString(myEnemy, "mission") == "wait") {
        if (sprites.allOfKind(SpriteKind.Enemy).length >= 10) {
            myEnemy = sprites.allOfKind(SpriteKind.Enemy)[randint(sprites.allOfKind(SpriteKind.Enemy).length - 10, sprites.allOfKind(SpriteKind.Enemy).length - 1)]
        } else {
            myEnemy = sprites.allOfKind(SpriteKind.Enemy)[randint(0, sprites.allOfKind(SpriteKind.Enemy).length - 1)]
        }
        if (sprites.readDataNumber(myEnemy, "type") == 1) {
            animation.runImageAnimation(
            myEnemy,
            assets.animation`greenEnemy`,
            30,
            true
            )
        } else if (sprites.readDataNumber(myEnemy, "type") == 2) {
            animation.runImageAnimation(
            myEnemy,
            assets.animation`redEnemy`,
            50,
            true
            )
        } else if (sprites.readDataNumber(myEnemy, "type") == 3) {
            animation.runImageAnimation(
            myEnemy,
            assets.animation`purpleEnemy`,
            30,
            true
            )
            sprites.setDataNumber(myEnemy, "targetY", myShip.y)
            if (myEnemy.x > myShip.x) {
                sprites.setDataNumber(myEnemy, "targetX", -50)
            } else {
                sprites.setDataNumber(myEnemy, "targetX", 50)
            }
        } else if (sprites.readDataNumber(myEnemy, "type") == 4) {
            animation.runImageAnimation(
            myEnemy,
            assets.animation`yellowEnem`,
            50,
            true
            )
            sprites.setDataNumber(myEnemy, "shoot timer", t + 20)
        } else if (sprites.readDataNumber(myEnemy, "type") == 5) {
            animation.runImageAnimation(
            myEnemy,
            assets.animation`myAnim`,
            100,
            true
            )
            sprites.setDataNumber(myEnemy, "shoot timer", t + 10)
            sprites.setDataNumber(myEnemy, "starting angle", 0)
        }
        sprites.setDataString(myEnemy, "mission", "attack")
        sprites.setDataNumber(myEnemy, "wait", 60)
    }
}
function place_enemies () {
    for (let y = 0; y <= 3; y++) {
        row = level[y]
        for (let x = 0; x <= 9; x++) {
            if (row[x] != 0) {
                if (row[x] == 4) {
                    spawn_enemy_type_x_y(row[x], x * 15 + 2, y * 10 - 116)
                } else if (row[x] == 5) {
                    spawn_enemy_type_x_y(row[x], 60, y * 10 - 114)
                } else {
                    spawn_enemy_type_x_y(row[x], x * 15 - 6, y * 10 - 120)
                }
            }
        }
    }
}
function pop_text (text: string, x: number, y: number) {
    textSprite = textsprite.create(text)
    textSprite.setOutline(1, 3)
    textSprite.setPosition(x, y)
    textSprite.vy = -40
    sprites.setDataNumber(textSprite, "age", 40)
}
function shipControls () {
    if (myShip.vx < 0) {
        myShip.setImage(assets.image`shipleft`)
    } else if (myShip.vx > 0) {
        myShip.setImage(assets.image`shipright`)
    } else {
        myShip.setImage(assets.image`shipfront`)
    }
    flame.y = myShip.y + 8
    flame.x = myShip.x + 0
}
function spawn_wave () {
    if (wave == 1) {
        level = [
        [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
        ],
        [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
        ],
        [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
        ],
        [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0
        ]
        ]
    } else if (wave == 2) {
        level = [
        [
        1,
        1,
        2,
        2,
        1,
        1,
        2,
        2,
        1,
        1
        ],
        [
        1,
        1,
        2,
        2,
        1,
        1,
        2,
        2,
        1,
        1
        ],
        [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1
        ],
        [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1
        ]
        ]
    } else if (wave == 3) {
        level = [
        [
        1,
        1,
        2,
        2,
        1,
        1,
        2,
        2,
        1,
        1
        ],
        [
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1
        ],
        [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
        ],
        [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
        ]
        ]
    } else if (wave == 4) {
        level = [
        [
        3,
        3,
        0,
        1,
        1,
        1,
        1,
        0,
        3,
        3
        ],
        [
        3,
        3,
        0,
        1,
        1,
        1,
        1,
        0,
        3,
        3
        ],
        [
        3,
        3,
        0,
        1,
        1,
        1,
        1,
        0,
        3,
        3
        ],
        [
        3,
        3,
        0,
        1,
        1,
        1,
        1,
        0,
        3,
        3
        ]
        ]
    } else if (wave == 5) {
        level = [
        [
        3,
        1,
        3,
        1,
        2,
        2,
        1,
        3,
        1,
        3
        ],
        [
        1,
        3,
        1,
        2,
        1,
        1,
        2,
        1,
        3,
        1
        ],
        [
        3,
        1,
        3,
        1,
        2,
        2,
        1,
        3,
        1,
        3
        ],
        [
        1,
        3,
        1,
        2,
        1,
        1,
        2,
        1,
        3,
        1
        ]
        ]
    } else if (wave == 6) {
        level = [
        [
        2,
        2,
        2,
        0,
        4,
        0,
        0,
        2,
        2,
        2
        ],
        [
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2
        ],
        [
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1
        ],
        [
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1
        ]
        ]
    } else if (wave == 7) {
        level = [
        [
        3,
        3,
        0,
        1,
        1,
        1,
        1,
        0,
        3,
        3
        ],
        [
        4,
        0,
        0,
        2,
        2,
        2,
        2,
        0,
        4,
        0
        ],
        [
        0,
        0,
        0,
        2,
        1,
        1,
        2,
        0,
        0,
        0
        ],
        [
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        1,
        1
        ]
        ]
    } else if (wave == 8) {
        level = [
        [
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0
        ],
        [
        3,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        3,
        3
        ],
        [
        3,
        3,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3
        ],
        [
        3,
        3,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        3
        ]
        ]
    } else if (wave == 9) {
        level = [
        [
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
        ],
        [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
        ]
        ]
    }
    place_enemies()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyBullet, function (sprite, otherSprite) {
    hurt_player(sprite)
})
function enemy_shoot () {
    if (sprites.readDataString(myEnemy, "mission") == "wait") {
        if (sprites.readDataNumber(myEnemy, "type") == 1) {
            fire_from_shooter_at_angle(myEnemy, 0)
        } else if (sprites.readDataNumber(myEnemy, "type") == 2) {
            aimed_shot_from_shooter_to_target(myEnemy, myShip)
        } else if (sprites.readDataNumber(myEnemy, "type") == 3) {
            fire_from_shooter_at_angle(myEnemy, 0)
        } else if (sprites.readDataNumber(myEnemy, "type") == 4) {
            spreadshot_from_shooter_number_of_shots_starting_angle(myEnemy, 8, randint(0, 45))
        }
    }
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (sprites.allOfKind(SpriteKind.Enemy).length == 0) {
        next_wave()
    }
})
function hurt_enemy (sprite: Sprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    sprite.startEffect(effects.fountain, 100)
    if (sprites.readDataString(sprite, "mission") != "flyin") {
        sprites.changeDataNumberBy(sprite, "hp", -1)
        if (sprites.readDataNumber(sprite, "hp") <= 0) {
            if (sprites.readDataNumber(sprite, "type") == 5) {
                sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
                animation.stopAnimation(animation.AnimationTypes.All, sprite)
                sprite.setImage(img`
                    .....dd.....11111111.....dd.....
                    dd...bd1db11111dd11111bb1db...dd
                    d1d.bdbb1d111dd11dd111d1bbdb.d1d
                    bd1bd1ddd11d1dd11dd1d11ddd1db1db
                    .bdbbd11111111d11d11111111dbbdb.
                    .bbbbb111111111dd111111111bbbbb.
                    ..bbbdd11111dd1111dd11111ddbbb..
                    ..11bbd11d111dd11dd111d11dbb11..
                    11dddbbd11d1111111111d11dbbddd11
                    1111dbddd11dd111111dd11dddbd1111
                    d1ddddbdddd1111111111ddddbdddd1d
                    ddddddd11ddddd1111ddddd11ddddddd
                    .dd11d1d111dddddddddd111d1d11dd.
                    ..db11d1dd1111dddd1111dd1d11bd..
                    ...bd11d11ddd111111ddd11d11db...
                    .ddbdd11dd111ddddddddddd11ddbdd.
                    d11dbdd111ddd11111dddd111ddbd11d
                    ddddbddd11111dddddd11111dddbdddd
                    ....d1dddd1111d11d1111dddd1d....
                    ...d1ddddddd11111111ddddddd1d...
                    ...ddd..d1ddd111111ddd1d..ddd...
                    ...dd...d1dddd1bb1dddd1d...dd...
                    ........ddd.ddbbbbdd.ddd........
                    ........dd....dddd....dd........
                    `)
                blink(sprite)
            }
            kill_enemy(sprite)
        } else {
            if (sprites.readDataNumber(sprite, "type") == 5) {
                animation.stopAnimation(animation.AnimationTypes.All, sprite)
                sprite.setImage(img`
                    .....44.....77777777.....44.....
                    44...2414877777557777784142...44
                    414.862216777551155777612268.414
                    24126766677575511557577666762142
                    .242867777777751157777777768242.
                    .222887777777775577777777788222.
                    ..8886677777667777667777766888..
                    ..7788677577766776677757768877..
                    77666886775777777777757768866677
                    77776866677551777715577666867777
                    67666686666777111177766668666676
                    66666667766666777766666776666666
                    .667767677766666666667776767766.
                    ..6877676677776666777766767786..
                    ...86776776667777776667767768...
                    .668667766555666666555667766866.
                    67768667776665111156667776686776
                    66668666777776666667777766686666
                    ....676666777751157777666676....
                    ...67666666677777777666666676...
                    ...666..6766677777766676..666...
                    ...66...6766667aa7666676...66...
                    ........666.66a88a66.666........
                    ........66....6666....66........
                    `)
            }
            blink(sprite)
            if (sprites.readDataNumber(sprite, "type") == 5) {
                animation.runImageAnimation(
                sprite,
                assets.animation`myAnim`,
                200,
                true
                )
            }
        }
    }
}
function drop_pickup (x: number, y: number) {
    cherry = sprites.create(img`
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
        `, SpriteKind.Pickup)
    cherry.setPosition(x, y)
    animation.runImageAnimation(
    cherry,
    assets.animation`cherryAnim`,
    100,
    true
    )
    cherry.vy = 40
}
function muzzleFlash (muzzle: Sprite, shooter: Sprite) {
    if (shooter == myShip) {
        muzzle.setPosition(shooter.x, shooter.y - 7)
    } else {
        muzzle.setPosition(shooter.x, shooter.y + 4)
    }
    animation.runImageAnimation(
    muzzle,
    assets.animation`muzzleAnim`,
    20,
    false
    )
}
function pickup_logic (pickup: Sprite) {
    if (cher < 9) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        cher += 1
    } else {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        if (info.life() < max_lives) {
            pop_text("1Up", pickup.x, pickup.y)
            info.changeLifeBy(1)
            cher = 0
        } else {
            pop_text("5000", pickup.x, pickup.y)
            info.changeScoreBy(5000)
            cher = 0
        }
    }
    sprites.destroy(pickup, effects.rings, 100)
    cherry_text.setText(convertToText(cher))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    hurt_player(sprite)
})
let cherry: Sprite = null
let textSprite: TextSprite = null
let level: number[][] = []
let row: number[] = []
let explosion2: Sprite = null
let explosion_top = 0
let explosion_left = 0
let projectile: Sprite = null
let enemy_muzzle: Sprite = null
let max_lives = 0
let boss_3: Image = null
let boss_2: Image = null
let boss_1: Image = null
let boss_0: Image = null
let explosionImages_5: Image = null
let explosionImages_4: Image = null
let explosionImages_3: Image = null
let explosionImages_2: Image = null
let explosionImages_1: Image = null
let explosionImages_0: Image = null
let wave_text: TextSprite = null
let final_wave = 0
let wave = 0
let flame: Sprite = null
let myEnemy: Sprite = null
let t = 0
let angle = 0
let mySprite: Sprite = null
let cherry_text: TextSprite = null
let myShip: Sprite = null
let muzzle: Sprite = null
let cher = 0
let player_explosion: Sprite = null
let press_button_text: TextSprite = null
let text_button = ""
let mode = ""
let cherryl: Image = null
start_screen()
game.onUpdate(function () {
    if (mode == "game") {
        shipControls()
        enemy_action()
        pop_text_update()
    }
})
game.onUpdateInterval(2000, function () {
    if (mode == "game") {
        prepare_enemy_attack()
    }
})
game.onUpdateInterval(1000, function () {
    if (mode == "game") {
        pick_shooter()
    }
})
game.onUpdateInterval(500, function () {
    if (mode == "start") {
        if (text_button == "Press A to start") {
            text_button = ""
        } else {
            text_button = "Press A to start"
        }
        press_button_text.setText(text_button)
    }
})
game.onUpdateInterval(100, function () {
    if (mode == "game") {
        t += 1
    }
})
