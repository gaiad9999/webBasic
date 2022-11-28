
/* express 모듈을 이용하여 서버 생성 기초 */
const express = require('express');

// express 서버 동작 정의
// 8080포트 동작
const app = express();
app.set('port', process.env.PORT || 8080);
// web17.2에서 안되던 css 적용문제를 express에선 아래와 같이
// 접근가능 폴더를 선언해주는걸로 해결가능하다.
app.use(express.static(__dirname + '/src'));

// 동작 이벤트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web17.3-jsServerBasic.html');
});
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '포트 서버 연결 중...');
});



