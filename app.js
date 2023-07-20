const express = require("express");
const path = require("path");

const app = express();
// 서버를 실행할 포트
app.set("port", process.env.PORT || 4000);

// URL route 매핑
app.get("/", (req, res) => {
  // res.send("Hello, Express");
  res.sendFile(path.join(__dirname, "/index.html"));
});

// listen 함수를 호출하면 앞서 설정한 port에서 서버를 실행한다.
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
