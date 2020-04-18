# Microservice Example using Node, Python & Docker
Just another example of microservice
this repo use Python **Fastapi** framework for services, Nodejs **Express** framework as gateway & **Vuejs** as frontend application


![running application](https://paper-attachments.dropbox.com/s_22F4075258F549BDABAEEE2EA8C52EA10D42CB84DA3BCC6F5E4B0753E7E23093_1587195502662_screenshot-localhost_8080-2020.04.18-14_37_37.png)

## Installation

you can install run application using docker-compose

1️⃣ Docker
execute command below

    $ docker-compose up

or you can install this repo application manually using existing package list file

2️⃣ Manual Installation

this application was build using **Python3.6, Python Pipenv,** **NodeJS 12.6.2** & **Yarn 1.22.4,** make you have those installed to avoid error


- initialize python environment & install packages using pipenv by executing command 
    $ cd TaskService && pipenv install
- install nodejs packages by executing command
    $ cd TaskService && yarn && cd ../ApiGateway && yarn

if all packages are installed you can run application by run it all separately


1. **TaskService**
    $ cd TaskService && pipenv run python main.py
2. **ApiGateway**
    $ cd ApiGateway && yarn start
3. **Frontend**
    $ cd Frontend && yarn serve


## Information

ApiGateway using basic auth with username `admin` & password `R2G1iN*$@0m1VUjex7*z0`
