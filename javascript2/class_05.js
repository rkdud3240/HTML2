//자바스크립트 자료형
//여덟가지 기본 자료형

//no error
let message = "Hello";
message = 12345657;
console.log(message);
//변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있다.

//1. 숫자형(number type)
let n = 123;
n = 12.345;
// *, /, +, -

//특수숫자값
//infinity (무한대)

console.log(1 / 0);

//NaN
console.log("숫자가 아님" / 2);

//2.BigInt (수 뒤에 n붙음)
const bigNumber = 1233333333311111111111111111n;
console.log(bigNumber);

//3.문자형
let str = "Hello";
let str2 = 'Hello';
let str3 = `hello`;

console.log(`this return value ${1 + 100}`);//문자열 안에 값을 받아내는 

//4. 불린형
let check = true;
let check2 = false;

let isGreater = 4 > 1;
console.log(isGreater);

//5. null 값 (null이라는 값이 있음)
let age = null; //존재하지 않는 값, 알 수 없는 값
console.log(age);

//6. undefined (값이 할당되지 않은 상태를 나타낸다.) 
let age2;
console.log(age2);

//7. 객체(object) --> 특수한 자료형

//8. 심볼(symbol) --> 객체에 고유한 식별자를 만들 때 사용합니다.

//9. typeof 연산자
console.log("------------------------");
console.log(typeof (undefined));
console.log(typeof (0));
console.log(typeof (10n));
console.log(typeof (true));
console.log(typeof ("foo"));
console.log(typeof (Math));
console.log(typeof (null));
console.log(typeof (alert));
