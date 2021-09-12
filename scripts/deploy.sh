#!/bin/bash

# First run chmod +x deploy.sh

ssh -i ~/.ssh/skyfall-strapi.pem ec2-user@ec2-3-68-224-190.eu-central-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd backend
git checkout .
git pull origin main
npm ci
pm2 restart all
ENDSSH
