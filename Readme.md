
> npm init -y
> npm i express sequelize mysql2 body-parser --save
> npm i nodemon sequelize-cli babel-cli babel-preset-env babel-preset-stage-3 faker lodash.times lodash.random --save-dev


> "start": "npm run init-db && npx nodemon --exec babel-node server.js",
> "sequelize-skeleton": "npx sequelize init:models; npx sequelize init:config",
> "init-db": "cd DIR_WHERE_MYSQL_BIN_IS && echo 'DROP DATABASE IF EXISTS api_node_demo; CREATE DATABASE api_node_demo CHARACTER SET utf8 COLLATE utf8_general_ci' | ./mysql -u root && cd -"


npm run sequelize-skeleton