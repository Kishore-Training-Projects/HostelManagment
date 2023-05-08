#!/bin/bash

# Update package lists
sudo apt-get update

# Install Git
sudo apt-get install -y git

# Install Docker
sudo apt-get install -y docker.io

# Install Docker Compose
sudo curl -sSL https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add current user to the docker group to avoid running docker commands with sudo
sudo usermod -aG docker $USER

echo "Git, Docker, and Docker Compose installed successfully"
