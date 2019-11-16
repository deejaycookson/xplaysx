import win32api
import win32con
import win32ui
import win32gui
import win32com.client
import time,sys
import fileinput

import fileinput
import sys

keyDelay = 0.1
keymap = {
    "1": ord("1"),
    "2": ord("2"),
    "3": ord("3"),
    "4": ord("4"),
    "5": ord("5"),
    "6": ord("6"),
    "7": ord("7"), #for NDS
    "8": ord("8"), #for NDS
    "9": ord("9"), #start
    "0": ord("0"), #select
}

def sendKey(button):
    print(button)
    win32api.keybd_event(keymap[button], 0, 0, 0)
    time.sleep(keyDelay)
    win32api.keybd_event(keymap[button], 0, win32con.KEYEVENTF_KEYUP, 0)

for line in fileinput.input():
    if line:
        print(keymap[line[0]])
        sys.stdout.flush()
        win = win32gui.FindWindow(None, "VisualBoyAdvance")
        shell = win32com.client.Dispatch("WScript.Shell")
        shell.SendKeys('%')
        win32gui.SetForegroundWindow(win)
        # win32gui.SetFocus(win)
        sendKey(line[0])