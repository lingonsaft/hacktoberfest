#!/bin/bash

# ---------------------
# by: ★cyberpunka★
# 4. Oct 2018 at 17:11:09
# v0.0.1
# ---------------------

# cshasum

# ============================================================================================================
# help-text
helpText="\

macOS shasum checker

Usage: `basename $0` [algorithm] 1, 224, 256, 384, 512, 512224, 512256 [shasum] [file to check] \n\

 -h --help 	displays this help \n\
 "

# ======================================================
# colors
resetColor="\033[0m"
red="\033[31m"
yellow="\033[33m"
blink="\033[5m"

# ============================================================================================================
 # usage
option=$1

case $option in

	"")
		echo -e "$helpText"
		exit 0
		;;

	-h)
		echo -e "$helpText"
		exit 0
		;;

	--help)
		echo -e "$helpText"
		exit 0
		;;

	*)
        CHECKSUM="${2}"
        FILETOCHECK="${3}"
        ALGORITHM="${1}"

        FILESHASUM=$(shasum -a "${ALGORITHM}" "${FILETOCHECK}" | awk -F ' ' '{print $1}')

        if [[ $CHECKSUM == $FILESHASUM ]]
        then
            echo -e
            echo -e "${FILESHASUM}"
            echo -e "${CHECKSUM}"
            echo -e
            echo -e " is OK"
            echo -e
        else
            echo -e
            echo -e "${FILESHASUM}"
            echo -e "${CHECKSUM}"
            echo -e
            echo -e " $red $blink ATTENTION - CHECKSUMS did not match$resetColor"
            echo -e
        fi
        ;;

esac
