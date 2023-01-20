//JSON
//Javascript Object Noataion

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit, ["name", "color"]); //원하는 값만 변환할 수 있음.
console.log(json); //method랑 symbol은 json으로 변환되지 않음.

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "nero" : value;
}); //세밀하게 통제하고 싶을 때 콜백 함수를 사용한다.
console.log(json);

//2. JSON to Object
//parse(json)

//json 나중에 다시 공부하기
