# Sequelize 학습용 프로젝트

## 1. 프로젝트 설정

다음은 Sequelize 학습을 위한 프로젝트를 설정하는 방법이다.

### 1.1. 의존성 설치

먼저 프로젝트 구성에 필요한 의존성을 설치한다. 아래는 의존성에 대한 간단한 설명이다.  
`npm init -y` 로 npm프로젝트를 생성한다. `-y` 옵션은 프로젝트의 내용을 하는 구간을 스킵하기위해 추가한다.

- mysql2: MySQL 커넥터.
- sequelize: Javascript로 SQL을 작성하기 위한 ORM.
- sequelize-cli: sequelize 명령어를 실행하기 위한 도구.
- nunjucks: HTML에 로직을 추가하거나 데이터를 바인딩하는 용도로 사용하는 템플릿엔진.
- nodemon: 코드가 변경되면 이를 감지해 서버를 재시작시킨다. 개발 환경에서 편의를 위해 사용하는 것이므로 `-D` 옵션으로 개발용 의존성인 `devDependencies`에 추가한다.

```sh
$ npm init -y
$ npm i express morgan nunjucks sequelize sequelize-cli mysql2
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

## 2. 실행

Node.js서버와 MySQL DB는 Docker 환경에서 구동되게 만들 예정
