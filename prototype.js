//상속, prototype
//객체에서 프로퍼티를 읽으려 할 때 없으면 prototype으로 가서 읽음

//1. Prototype Chain & 상속

//공통된 부분 처리
const car = {
  wheels: 4,
  navigation: 1,
  drive() {
    console.log("drive..");
  },
};
const bmw = {
  color: "red",
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car; //bmw 는 car의 상속을 받음

const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw; //상속은 계속 이어질 수 있다.
//prototype chain

for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log("o", p);
  } else {
    console.log("x", p);
  }
}
console.log(Object.keys(x5)); //prototype는 나오지 않음.

//2. 생성자 함수를 이용해서 prototype 만들기

// const car_2 = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

const Bmw = function (color) {
  this.color = color;
};

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function () {
//   console.log("STOP");
// };

Bmw.prototype = {
  constructor: Bmw, //수동 처리
  //명확한 constructor 를 제공하지 않음 -> 개발자에 의해 언제든 수정 될 수 있음.
  wheels: 4,
  drive() {
    console.log("drive..");
  },
  navigation: 1,
  stop() {
    console.log("STOP");
  },
};

const x6 = new Bmw("red");
const z6 = new Bmw("black");

// x6.__proto__ = car;
// z6.__proto__ = car;

console.log(z6.constructor === Bmw);

//2. Closure
const Bmw_1 = function (color) {
  //   this.color = color;
  const c = color;
  this.getColor = function () {
    console.log(c);
  }; //Closure 부분
};

const x7 = new Bmw_1("red");
// x7.color = "blue";
// 이런 식으로 값을 마음대로 바꿀 수 있는 것을 방지하기 위해 -> Closure
