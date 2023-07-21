# Learning Node.js

## 1. Node.js 버전

짝수번째 버전은 LTS로 관리되므로 현재 LTS는 `18.16.1` 이지만 `20.4.0`버전을 선택함

```sh
$ nvm install 20.4.0
Downloading and installing node v20.4.0...
Computing checksum with shasum -a 256
Checksums matched!
Now using node v20.4.0 (npm v9.7.2)

$ node -v
v20.4.0
```

## 2. 의존성 설치

서버를 구현하기 위해 express를 추가한다.
nodemon은 소스 코드가 수정되면 서버를 자동으로 재시작시켜주는 모듈이다.
자주 사용하지만 개발 단계에서만 사용할 기능이므로 -D 옵션으로 설치한다.

```sh
$ npm install express
$ npm install -D nodemon
```

### 2.1. 실무에서 자주 사용하는 패키지

morgan: 추가적인 로그를 제공하는 미들웨어. HTTP메서드, 주소, 상태코드, 응답 속도 같은 정보를 출력한다.  
dotenv: `.env`파일을 읽어서 `process.env` 로 만드는 역할.

```sh
$ npm i morgan cookie-parser express-session dotenv
```
