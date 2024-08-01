// 1. <빈칸>을 작성해주세요
const obj1 = {
  value: 20,
  getValue() {
    return this.value;
  },
};
console.log(obj1.getValue()); //  출력값 20

// 2. 웹 브라우저에서 setTimeout 함수 내에서
//  this가 가리키는 출력값이 왜 그런지 설명해주세요
// 첫번째 : obj2 객체 출력 : 호출한 객체가 obj2 이므로 그 객체를 출력
// 두번째 : 윈도우 객체 출력 : setTimeout 안의 함수는 일반함수로, 일반함수 안의 this 는 전역객체이다.
const obj2 = {
  method: function () {
    console.log("첫번째 this : ", this);

    const innerMethod = () => {
      setTimeout(function () {
        console.log("두번째 this : ", this);
      });
    };
    innerMethod();
  },
};

obj2.method();
