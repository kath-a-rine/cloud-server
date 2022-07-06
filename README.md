# Lab 16: AWS

## Project: AWS - Cloud Servers

### Author: Katharine Swilley

### Problem Domain

Deploy a Node.js server to AWS EC2. Server built using the Basic Express Server from Lab 2.

### Links and Resources

### Set up

- [GUI Server](http://lab16cloudserver-env-1.eba-pek3ppda.us-west-2.elasticbeanstalk.com/)
- [CLI Server - Unable to deploy CLI]

#### `.env` requirements

- `PORT` - 3001

#### How to initialize/run your application

- `nodemon` on backend

#### How to use your library

#### Features / Routes

- Deploy a simple Node.js server to EC2, using Elastic Beanstalk
  - Choose a server you’ve built previously
    - Option 1: A simple API or Web Server
    - Option 2: A socket.io event Hub
    - The server should not require a database
    - Check in your server to GitHub
- **Task 1:**
  - Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
  - Manually deploy your application to this environment by uploading a .zip file

- **Task 2:**
  - Using the same server, create a new environment using Elastic Beanstalk from your terminal
  - Manually deploy your application to this environment by using eb deploy

#### Routes

- `/`
- `*`
