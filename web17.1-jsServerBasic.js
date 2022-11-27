
/* http 모듈을 이용하여 서버 생성 기초 */
// http 모듈 export값 호출
const http = require('http');

// http 서버 동작 정의
// 8080포트 동작
const server = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8' });
    res.write('<h1>Node.js로 서버 만들기</h1>');
    res.end('<p>http 모듈 공부중</p>');
}).listen(8080);

// 동작(리스닝, 에러) 이벤트
server.on('listening', () => {console.log('8080포트 서버 연결 중...')});
server.on('error', () => {console.error(error)});

