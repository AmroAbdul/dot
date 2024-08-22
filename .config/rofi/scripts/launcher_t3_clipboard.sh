#!/usr/bin/env bash
dir="$HOME/.config/rofi/launchers/type-3"
theme='style-5'

## Run
rofi \
    -modes "clipboard:greenclip print" \
    -show  clipboard 
    # -theme ${dir}/${theme}.rasi
