const express = require("express");
const path = require("path");

const app = express();
// 서버를 실행할 포트
app.set("port", process.env.PORT || 4000);

// 미들웨어는 요청과 응답의 중간에 위치해서 미들웨어라고 불린다. app.use(미들웨어) 형태로 추가함.
app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됨");
});

// URL route 매핑
app.get("/", (req, res) => {
  // res.send("Hello, Express");
  res.sendFile(path.join(__dirname, "/index.html"));
});

// listen 함수를 호출하면 앞서 설정한 port에서 서버를 실행한다.
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
