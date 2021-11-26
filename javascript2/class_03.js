// 'use strict'
//엄격모드 -> ECMA6을 쓰겠다. 이 코드가 최상단에 와야 엄격모드 적용

// let user = 'John';
// let age = 25;
// let massage = 'Hello';

//let massage = 'test';
//선언을 한것을 잊고 다시 선언 할 수 있으므로 아래는 권장 안함
let user = 'John', age = 25, massage = 'Hello';

console.log(user, age, massage);

//변수 명명 규칙
//1. 변수명은 오직 문자와 숫자, 기호 $ , _만 사용할 수 있다.
//2. 첫 글자는 숫자가 될 수 없다.

//카멜 표기법

//대소문자 구별
//let apple 와 let Apple는 서로 다른 변수이다.
//예약어 변수로 사용할 수 없습니다.
//let, class, return, function

//use strict 사용해보기 
num = 5;
console.log(num);