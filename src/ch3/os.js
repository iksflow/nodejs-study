// os모듈은 사용자 컴퓨터의 운영체제(OS)정보를 제공한다.
const os = require("os");

console.log("운영체제 정보 ---------------------------");
console.log("프로세서 아키텍처 - os.arch(): ", os.arch());
console.log("운영체제 플랫폼 - os.platform(): ", os.platform());
console.log("운영체제의 종류 - os.type(): ", os.type());
console.log("OS가동 시간(부팅 후 흐른 초) - os.uptime(): ", os.uptime());
console.log("컴퓨터 이름 - os.hostname(): ", os.hostname());
console.log("OS버전 - os.release(): ", os.release());
console.log("경로 ---------------------------");
console.log("홈 디렉터리 경로 - os.homedir(): ", os.homedir());
console.log("임시파일 저장 경로 - os.tmpdir(): ", os.tmpdir());
console.log("cpu 정보 ---------------------------");
console.log("CPU 코어 정보(배열) - os.cpus(): ", os.cpus());
console.log("CPU 코어 개수 - os.cpus().length: ", os.cpus().length);
console.log("메모리 정보 ---------------------------");
console.log("사용가능한 메모리 - os.freemem(): ", os.freemem());
console.log("전체 메모리 - os.totalmem(): ", os.totalmem());
