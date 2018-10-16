#!/bin/bash



sudo apt-get install wget git ncurses-dev -y
wget https://download.docker.com/linux/debian/dists/stretch/pool/stable/armhf/docker-ce_18.06.0~ce~3-0~debian_armhf.deb
sudo dpkg -i docker-ce_18.06.0~ce~3-0~debian_armhf.deb
