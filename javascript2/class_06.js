// 형 변환 type conversion

//숫자 1이 true , 숫자 0이 false
let value = true;

value = String(value);
console.log(typeof (value));

value = "123";

value = Number(value);
console.log(value + 10);

let age = Number("임의의 문자열 123");
console.log(age); //NaN, 형변환이 실패합니다. 

//불린형으로 형변환 
let abc1 = Boolean(1);
console.log(abc1);
let abc0 = Boolean(0);
console.log(abc0);
