input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . . . # .
        # # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Eu sou o SHARK8BIT HAHAHAH")
})
basic.showIcon(IconNames.Pitchfork)
