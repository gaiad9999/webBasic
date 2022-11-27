
/* 프로토타입을 이용한 상속 */
// 부모 역할 구조체
const pokemon = {
    ball: "몬스터볼",
    gatcha: function() {
        console.log(this.name + " 게또다제"); //this 동작은 python과 동일함.
    }
}

// 상속자 역할 구조체
const pikachu = {
    name: "피카츄",
    id: 25,
    type: "전기",
    chara: "정전기",
    ball: "하이퍼볼" //오버라이딩 가능
    /*gatcha: function(a) {
        console.log(a + "등록완료");
    }*/ //그냥 오버로딩하는건 안됨. 
        //대신 인수확인을 통해 억지로 구현하는건 가능함.
}

// __proto__를 이용하여 부모 구조체 지정
pikachu.__proto__ = pokemon; 
console.log(pikachu.ball);
pikachu.gatcha();



