"""
Created by: Daki A.B
Created on: Sep 2023
This module is a Microbit finds temperature
"""



from microbit import *
import random

# our varibale for temperature
temperature = 0

display.clear()
display.show (Image.HAPPY)

while True: 
    if button_a.is_pressed():
        temperature = temperature()
        display.show(str(temperature))

