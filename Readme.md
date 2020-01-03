
> npm init -y
> npm i express sequelize mysql2 body-parser --save
> npm i nodemon sequelize-cli babel-cli babel-preset-env babel-preset-stage-3 faker lodash.times lodash.random --save-dev


> "start": "npm run init-db && npx nodemon --exec babel-node server.js",
> "sequelize-skeleton": "npx sequelize init:models; npx sequelize init:config",
> docker-compose -f docker-compose.build.yml build
> docker-compose -f docker-compose.yml up -d

npm run sequelize-skeleton



sudo sequelize-auto -c "." -o "./src/domain/model" -d chat_local -h localhost -u root -p 3306 -x 1234 -e mysql
sudo sequelize-auto -c "./config" -d chat_local -h localhost -u root -p 3306 -x 1234 -e mysql
