//기본 연산자

let x = 1;
x = -x;
console.log(x);

// 거듭 제곱 연산자
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

let s = "my" + "String";
console.log(s);

console.log('1' + 2); //문자열 연산됨
console.log(2 + '1');


console.log(2 + 2 + '1'); //41

//연산자 우선순위
//단항 덧셈, 단항 부정

//증감 감소 연산자

let counter = 2;
counter++;
console.log(counter);//3
console.log(counter--);//3
console.log(counter);//2

// ++counter , counter++ 가 존재 

let a = 1;
let b = 1;
let c = ++a; //2
let d = b++; //1
console.log(c);
console.log(d);

//전위형, 후위형
a = 2;
b = 2;
c = 2;
d = 1;

let test1 = 2;
let test2 = 1 + (test1 *= 2); //5

console.log(test2);
