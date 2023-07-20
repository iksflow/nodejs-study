const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});

// addListener와 동일하다.
myEvent.on("event2", () => {
  console.log("이벤트 2");
});

myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});

// 1번만 실행되는 이벤트
myEvent.once("event3", () => {
  console.log("이벤트 3");
});
// 이벤트를 호출하는 메서드
myEvent.emit("event1"); // 이벤트 호출
myEvent.emit("event2"); // 이벤트 호출
myEvent.emit("event3"); // 이벤트 호출
myEvent.emit("event3"); // 실행 안 됨

myEvent.on("event4", () => {
  console.log("이벤트 4");
});

myEvent.removeAllListeners("event4");
myEvent.emit("event4"); // 실행 안 됨

const listener = () => {
  console.log("이벤트 5");
};

myEvent.on("event5", listener);
// off와 동일하다.
myEvent.removeListener("event5", listener);
myEvent.emit("event5"); // 실행 안 됨

// 연결된 listener의 개수를 반환한다.
console.log(myEvent.listenerCount("event2"));
