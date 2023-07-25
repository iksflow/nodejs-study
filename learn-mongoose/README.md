# Mongoose 학습용 프로젝트

## 1. 프로젝트 설정

다음은 Mongoose 학습을 위한 프로젝트를 설정하는 방법이다.

### 1.1. 의존성 설치

먼저 프로젝트 구성에 필요한 의존성을 설치한다. 아래는 의존성에 대한 간단한 설명이다.  
`npm init -y` 로 npm프로젝트를 생성한다. `-y` 옵션은 프로젝트의 내용을 하는 구간을 스킵하기위해 추가한다.

- express: Express 서버를 구성에 필요한 기능을 제공하는 도구.
- morgan: Log정보를 풍부하게 해주는 기능을 제공하는 도구.
- mongoose: mongodb 쿼리를 편리하게 실행하도록 도와주는 ODM(Object Document Mapping) 도구.
  - throw new MongooseError('Mongoose.prototype.connect() no longer accepts a callback'); 그냥 설치하면 위 에러가 발생한다. 따라서 6.10.0 버전으로 설치했다.
  - [참고](https://stackoverflow.com/questions/75603536/throw-new-mongooseerrorquery-prototype-exec-no-longer-accepts-a-callback)
- nunjucks: HTML에 로직을 추가하거나 데이터를 바인딩하는 용도로 사용하는 템플릿엔진.
- nodemon: 코드가 변경되면 이를 감지해 서버를 재시작시킨다. 개발 환경에서 편의를 위해 사용하는 것이므로 `-D` 옵션으로 개발용 의존성인 `devDependencies`에 추가한다.

```sh
$ npm init -y
$ npm i express morgan nunjucks mongoose@6.10.0
$ npm i -D nodemon
```

### 1.2. MongoDB 설치

docker로 `MongoDB 6.0.8` 버전을 설치한다.  
Dockerhub의 MongoDB Official 사이트에서는 Mac M1 CPU 아키텍처인 `arm64v8` 타입을 지원하지 않는다.  
대신 arm64v8에서 제공하는 이미지가 있으므로 `arm64v8/mongo:6.0.8` 이미지로 설정한다.  
Volume mount와 Port 설정 정보는 `docker-compose.yml`에서 설정한다.

```sh
# MYSQL container와 Host를 volume mount해서 데이터를 영속적으로 저장할 경로.
$ mkdir -p /var/tmp/docker/nodejs-mongodb
# docker-compose.yml의 내용대로 이미지를 빌드하고 실행.
$ docker compose up -d --build
```

## 2. 실행

Node.js서버와 MongoDB는 Docker 환경에서 구동되게 만들 예정
