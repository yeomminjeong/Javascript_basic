"use strict";
/*
class
fields / methods
Object-oriendted programing
class : template
object : instance of a class
클래스는 틀, 클래스를 사용해서 만들어 지는 것은 객체.
클래스 : 붕어빵 틀, 객체 : 팥붕, 슈붕, 피자붕
Javascript classes
  - introduced in ES6
  - syntactical sugar over prototype-based inheritance
*/

//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

//object 생성
const ellie = new Person("ellie", 30);
console.log(ellie);
ellie.speak();

//2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // return this.age;
    return this._age;
  } //값을 받아오고

  set age(value) {
    // this.age = value; //Uncaught RangeError: Maximum call stack size exceeded

    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  } //값을 바꾸고
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//3. Fields (public, private)
//최근에 추가된 것이기 때문에 사파리에서도 지원을 안 함.
//추가로 알아만 둘 것
class Experiment {
  publicField = 2;
  #privateFeild = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
//Typescript에 많이 쓰임.
//알아만 두기
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(1);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

//5. 상속 Inheritance & 다양성
//a way for one class to extend another class.
//반복되는 부분, 공통적으로 사용되는 속성 값을 재사용
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} //Rectangle class가 Shpae class의 자식 class가 됨.
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의 메서드도 나오게 super 키워드를 붙여줌.
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  //overriding
  //필요한 함수만 재정의해서 사용
} //Triangle class가 Shpae class의 자식 class가 됨.

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6. Class checking instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); //모든 클래스 들은 Object 클래스를 상속한 것.
