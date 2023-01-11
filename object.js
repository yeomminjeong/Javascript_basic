//Objects
//one of the Javascript's data types.
//a collection of related data and/or functionlity.
//Nearly all objects in Javascript are instances of Object.
//object = { key : value };

//1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

const ellie = { name: "ellie", age: 4 };
console.log(ellie);

//with Javascript magic (dynamic typed language)
//can add properties later
ellie.hasJob = true; //동적 코딩이 가능함 -> 나중 유지보수 힘듬
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);
//실시간으로 원하는 값을 가져오고 싶을 때 사용
function printvalue(obj, key) {
  console.log(obj[key]);
}
printvalue(ellie, "name");
printvalue(ellie, "age");

//3. Constructor Function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

const person1 = new Person("zeta", "25");

//4. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log(ellie.random); //undefined

//5. for..in vs for ..of
//for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

//6. Fun cloning
//Object.assign(dest, obj1, obj2, obj3 ...])
const user = { name: "zeta", age: 25 };
const user2 = user;
console.log(user);

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
user4.age = 23;
console.log(user4);

//another example
function Fruit(color, size) {
  this.color = color;
  this.size = size;
}
const fruit1 = new Fruit("red");
const fruit2 = new Fruit("blue", "big");
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
//뒤에 있는 객체가 앞에 있는 객체를 덮어쓰기 함.
