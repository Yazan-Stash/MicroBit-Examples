input.onButtonPressed(Button.A, function () {
    ID += -1
    basic.showNumber(ID)
})
input.onButtonPressed(Button.B, function () {
    ID += 1
    basic.showNumber(ID)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(message)
    basic.showString(message)
})
radio.onReceivedString(function (receivedString) {
    basic.pause(1000 * ID)
    basic.showString(receivedString)
})
let message = ""
let ID = 0
radio.setGroup(1)
ID = 1
message = "Al Ahli Club"

