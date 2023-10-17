/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Sep 2023
 * This program finds temperature in Celsius
*/

// variables
let temperature: number

// clean up
basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

// on button A
input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.clearScreen()
  basic.showString('The current temperature is')
  basic.showNumber(temperature)
  basic.showString('C')
})
