/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program finds temperature
*/

// variables
let randomNumber: number
let temperature = input.temperature()

// clean up
basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

// on button A
input.onButtonPressed( Button.A, function() {
  temperature = input.temperature()
  basic.showNumber(input.temperature())
})
