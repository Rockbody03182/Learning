/** 
 * 원시형 - String, Number 
 */

// const string1 = "Hello";
// const string2 = 'Hello';
// const string3 = `Hello ${string1} ?!`; // 템플릿 *리터럴*

// console.log(string3);

// ---------------------------------------------------------

// const number = -123.1234
// const pi = .14

// console.log(typeof (number + undefined)) // NaN = Not a Number
// console.log(typeof pi)

// ---------------------------------------------------------

// const a = 0.1
// const b = 0.2

// console.log(a + b)
// console.log((a + b).toFixed(1))
// console.log(Number((a + b).toFixed(1)))

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 원시형 - Boolean, null, undefined
 */

// // Boolean(불린) 논리 데이터
// const a = true
// const b = false

// if(a){
//   console.log('Hello')
// }

// ---------------------------------------------------------

// null 명시적 값이 없음  let age = null
// undefined 암시적 값이 없음 let age
// let age

// console.log(age);

// setTimeout(function (){
//   age = 85;
//   console.log(age);
// }, 1000)

// ---------------------------------------------------------

// const user = {
//   name: 'HEROPY',
//   age: 85,
//   email: null
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.abc);
// console.log(user.email);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 참조형 Array(배열)
 */

// const fruits = new Array('Apple', 'Banana', 'Cherry'); // 생성자 함수 or 자바스크립트 클래스
// const fruits = ['Apple', 'Banana', 'Cherry']; // 배열 리터럴방식 괄호안에 아이템 또는 요소(Element)

// console.log(fruits[0]); // 배열 데이터를 인덱싱한다.
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 참조형 Object(객체)
 */

// const user = new Object() // 생성자 함수
// user.name = 'HEROPY'
// user.age = 85

// console.log(user);

// ---------------------------------------------------------

// 함수를 이용한 생성자 함수 Object 데이터

// function User(){
//   this.name = 'HEROPY'
//   this.age = 85
// }

// const user = new User()

// console.log(user);

// ---------------------------------------------------------

// const user = {
//   name: 'HEROPY',
//   age: 85
// }
// const key = 'age'

// console.log(user.name); // 점표기법
// console.log(user['name']); // 대괄호 표기법
// console.log(user[key]);
// console.log(user);

// ---------------------------------------------------------

// const userA = {
//   name: 'HEROPY',
//   age: 85
// }
// const userB = {
//   name: 'Neo',
//   age: 22,
//   parent: userA
// }

// console.log(userB);
// console.log(userB.parent);
// console.log(userB.parent.name);
// console.log(userB['parent'].name);
// console.log(userB['parent']['name']);

// const users = [userA, userB]

// console.log(users[0]['name']);

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 참조형 Function
 */

// function hello(){
//   console.log('Hello!')
// }

// console.log(hello)

// ---------------------------------------------------------

// function getNumber(){
//   return 123
// }

// const getNumber = function(){
//   return 123
// }

// console.log(getNumber)
// console.log(getNumber()) // 소괄호가 있어야 함수가 호출된다
// console.log(typeof getNumber)
// console.log(typeof getNumber())

// ---------------------------------------------------------

// const a = function () {
//   console.log('A')
// }

// const b = function (c) {
//   console.log(c);
//   c()
// }

// b(a)

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 형변환(Type Conversion)
 */

// const a = 1 // Number
// const b = '1' // String

// console.log(a === b)
// console.log(a == b) 

// const a = 0
// const b = false

// console.log(a == b) // true

// const a = true
// const b = 1

// console.log(a === b) // false
// console.log(a == b) // true


// === 일치 연산자
// == 동등 연산자

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 참과 거짓 (Truthy & Falsy)
 */

// Falsy List
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n // BigInt

// if(0n) {
//   console.log('참');
// }
// ---------------------------------------------------------
// const fruits = ['Apple']

// if(fruits.length){
//   console.log('아이템이 들어있음');
// }

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/** 
 * 데이터 타입 확인
 */

// console.log(typeof('Hello') === 'string')
// console.log(typeof 123 === 'number')
// console.log(typeof false === 'boolean')
// console.log(typeof undefined === 'undefined')
// console.log(typeof null === 'object')
// console.log(typeof [] === 'object') // 배열
// console.log(typeof {} === 'object') // 객체
// console.log(typeof function () {} === 'function') // 함수

// // console.log(null.constructor ) // constructor는 null을 구분할 수없음
// console.log([].constructor === Array)
// console.log({}.constructor === Object)

// console.log(Object.prototype.toString.call(null))
// console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

// function checkType(data) {
//   return Object.prototype.toString.call(data).slice(8,-1)
// }

// console.log(checkType('Hello') === 'String')
// console.log(checkType(123) === 'Number')
// console.log(checkType(false) === 'Boolean')
// console.log(checkType(undefined) === 'Undefined')
// console.log(checkType(null) === 'Null')
// console.log(checkType([]) === 'Array')
// console.log(checkType({}) === 'Object')
// console.log(checkType(function () {}) === 'Function')