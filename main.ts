basic.forever(function () {
    if (input.temperature() > -5) {
        music.playTone(494, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
    } else {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # . # . .
            . # . . .
            `)
        basic.clearScreen()
    }
})
