# Nodebird 실습 프로젝트

## 1. 프로젝트 설정

다음은 Sequelize 학습을 위한 프로젝트를 설정하는 방법이다.

### 1.1. 의존성 설치

먼저 프로젝트 구성에 필요한 의존성을 설치한다.

```sh
$ npm init -y
$ npm i sequelize mysql2 sequelize-cli
$ npx sequelize init
$ npm i express cookie-parser express-session morgan multer dotenv nunjucks
$ npm i -D nodemon
```

### 1.2. Sequelize 설정

`npx sequelize init` 명령어를 실행해 sequelize를 사용하는데 필요한 설정들을 생성한다.  
명령어를 실행하면 `config, migrations, models, seeders` 라는 폴더를 생성한다.

```sh
$ npx sequelize init
Sequelize CLI [Node: 18.16.1, CLI: 6.6.1, ORM: 6.32.1]
```

sequelize init을 완료했으면 이어서 `models/index.js` 라는 파일을 아래와 같이 수정한다.  
기본값으로 설정되어있는 내용에서 실습에 필요한 부분만 남겨두기 위한 작업이다.

```js
// models/index.js
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = (sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
));

db.sequelize = sequelize;

module.exports = db;
```

### 1.3. MySQL 설치

docker로 `MySQL 8.0.33` 버전을 설치한다.  
초기 설정 데이터가 들어있는 파일인 `docker/init-scripts/init.sql`, `docker-compose.yml`, `.env` 를 준비하고 아래 명령어를 실행한다.

```sh
# MYSQL container와 Host를 volume mount해서 데이터를 영속적으로 저장할 경로.
$ mkdir -p /var/tmp/docker/nodejs-mysql
# docker-compose.yml의 내용대로 이미지를 빌드하고 실행.
$ docker compose up -d --build
```

### 1.4. Nodebird database 생성.

Sequelize의 db:create 기능을 사용하면 config.json의 정보를 바탕으로 데이터베이스를 생성할 수 있다.  
npm global에 sequelize를 설치하지 않았으니 npx를 통해 스크립트를 실행한다.

```sh
$ npx sequelize db:create

```

## 2. 실행

Node.js서버와 MySQL DB는 Docker 환경에서 구동되게 만들 예정
