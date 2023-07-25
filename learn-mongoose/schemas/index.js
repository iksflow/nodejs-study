const mongoose = require("mongoose");

const connect = () => {
  // 개발환경에서만 쿼리를 출력하도록 설정
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  // 접속 시도는 admin으로 하지만 nodejs를 사용함.
  mongoose.connect(
    "mongodb://root:example@localhost:27017/admin",
    {
      dbName: "nodejs",
      // useNewUrlParser: true,
      // useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
  connect();
});

module.exports = connect;
