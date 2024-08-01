// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력 : yuno2
// 이유 : a() 의 상위 스코프에 yuno2 변수를 가진 name 이 선언되어있다.

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력 : 2
// 이유 : var 키워드는 함수 스코프를 가진다. 새로운 블록 스코프를 생성하지 않아서 기존 함수 내의 스코프 x 에 재할당한 것

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수 : yuno
// 일반 함수 : undefined
// 화살표 함수는 화살표 함수가 정의된 위치의 this를 그대로 사용
// 함수가 일반 함수로서 호출될 때 this가 undefined가 된다( strict mode에서)

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
