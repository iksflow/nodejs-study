const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
// 서버를 실행할 포트
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

// 미들웨어는 요청과 응답의 중간에 위치해서 미들웨어라고 불린다. app.use(미들웨어) 형태로 추가함.
app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됨");
  next();
});
app.get("/login", (req, res) => {
  res.cookie("name", "admin", {
    expires: new Date(Date.now() + 100000),
    httpOnly: true,
    secure: true,
  });
  res.send("Login Success.");
});
// URL route 매핑
app.get(
  "/",
  (req, res, next) => {
    res.send("Hello, Express");
    console.log("GET / 요청에서만 실행됩니다");
    // res.sendFile(path.join(__dirname, "/index.html"));
    next();
  }
  // ,
  // (req, res) => {
  //   throw new Error("에러는 에러 처리 미들웨어로 갑니다.");
  // }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// listen 함수를 호출하면 앞서 설정한 port에서 서버를 실행한다.
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
