#!/bin/bash

# First run chmod +x deploy.sh

ssh -i ~/.ssh/skyfall-strapi.pem ubuntu@ec2-3-70-19-236.eu-central-1.compute.amazonaws.com << 'ENDSSH'
sudo yum update -y
cd backend
git checkout .
git pull origin main
npm ci
pm2 restart all
ENDSSH
