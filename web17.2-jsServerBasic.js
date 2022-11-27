
/* http 모듈을 이용하여 서버 생성 기초 */
// http 모듈 export값 호출
const http = require('http');
// 파일시스템 fs 생성하여 html을 수신할거임.
const fs = require('fs').promises;

// http 서버 동작 정의
// 8080포트 동작
const server = http.createServer(async (req, res) => {
    const f = await fs.readFile('./web17.2-jsServerBasic.html');
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8' });
    res.end(f);
}).listen(8080);

// 동작(리스닝, 에러) 이벤트
server.on('listening', () => {console.log('8080포트 서버 연결 중...')});
server.on('error', () => {console.error(error)});

/*
위의 코드의 경우 css가 구현되지 않는다. 왜?
>>> 브라우저는 로컬이 아니라 서버에서 데이터를 전달 받는다.
따라서 서버에서 css를 읽은 뒤, 이를 웹브라우저에 쏘아주어야 한다.
*/