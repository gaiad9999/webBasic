
/* 콜백함수 소개 */
/* 콜백함수란?
   1) 스크립트 함수가 전부 동작한 뒤, 맨 마지막에 동작하는 함수.
   2) 비동기적으로 동작함.
     - 아래예제 설명 : 입력값(함수, 딜레이);
                       두 함수가 동시에 비동기적으로 동작함.
*/
setTimeout(()=>{console.log("First run");}, 3000);
setTimeout(()=>{console.log("Second run");}, 2000);

console.log("print 1");
console.log("print 2");

/* 결과
print 1
print 2
Second run
First run
*/

