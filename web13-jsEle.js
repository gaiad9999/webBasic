
/* 변수 선언 */
var a = 10;   // 지역변수 선언
const b = 15; // 상수 선언
c = 20;       // 전역변수 선언. 옵션 이외에는 절대 사용하지 말도록!!
let d = 25;   // 블록변수 선언 (특이하게도 재선언 불가능)
var la = ["1", "2", "3", "4"]

console.log(a, b, c, d);
console.log(la, la[1]);


/* 구조체 선언 */
var pokemon = {
    name: "피카츄",
    num: 25,
    type: "전기",
    chara: "정전기",
    loud: function() {
        console.log("삐까삐까");
    }
};

console.log(pokemon);
console.log(pokemon.name);
console.log(pokemon.num);
console.log(pokemon.type);
console.log(pokemon.chara);
pokemon.loud();


/* 함수 선언 */
// 일반 함수선언
function sum1(a,b) {
    var result = a+b;
    result2 = a+b;  // 전역변수 처리
    return result;
}
// 익명함수선언
var sum2 = function(a,b) { 
    var result = a+b;
    return result;
}
// 축약 함수선언
var sum21 = (a,b) => { return a + b; }
var sum22 = (a,b) => a + b;
var sum3 = a => ++a;

console.log("결과1  :"+sum1(1,1));
console.log("결과2  :"+sum2(2,2));
console.log("결과2-1:"+sum21(2,3));
console.log("결과2-2:"+sum22(2,4));
console.log("결과3  :"+sum3(6));
console.log(result2);


/* 조건문 사용 */
if(4 > 3) {
    console.log("4는 3보다 큽니다")
} else {
    console.log("4는 3보다 작습니다")
}

var session = 0;
switch(session) {
    case 1: console.log("국어"); break;
    case 2: console.log("수학"); break;
    case 3: console.log("영어"); break;
    default: console.log("지정된 값이 없습니다");
}


/* 반복문 사용 */
let sum4 = 0;  // 블록변수는 다음 블록 { } 안에서만 수정가능함.
for(let i = 1; i < 10; i++) {
    sum4 += i;
}

let sum5 = 0;
let n = 1;
while(n < 10) {
    sum5 += n;
    n++;
}

console.log(sum4);
console.log(sum5);


/* 리스트 컨트롤 */
var nums = [1, 2, 3];
console.log("list:"+nums);
console.log("length:"+nums.length);
// 추가 (기존값 변경)
console.log(nums.unshift(0));
console.log(nums.push(4)); // 추가함수의 리턴값 = length
console.log(nums);         // 크롬 콘솔의 출력이 이상하지만 값은 정상반영됨.
// 떼내기 (기존값 변경)
console.log(nums.shift()); // 맨 처음값 떼어냄
console.log(nums.pop());   // 맨 마지막값 떼어냄
console.log(nums);
// 자르기 (기존값 변경)
var lang1 = ["html", "css", "js", "python"];
var slice1 = lang1.splice(2); //[2]부터 끝까지 자르기
console.log(lang1);
console.log(slice1);
var lang2 = ["html", "css", "js", "python"];
var slice2 = lang2.splice(1,2); //[1]부터 2개 자르기
console.log(lang2);
console.log(slice2);
// 자르기 (기존값 변경안함)
var lang3 = ["html", "css", "js", "python"];
var slice3 = lang3.slice(1);
console.log(lang3);  // 기존값이 변경되지 않음
console.log(slice3);  


