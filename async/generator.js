//Generator
//- 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
//- 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행
//ex) Redux Saga

//1. next(), return(), throw()
// function* fn() {
//   try {
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     console.log(3);
//     console.log(4);
//     yield 3;
//     return "finish";
//   } catch (e) {
//     console.log(e);
//   }
// }
// const a = fn();

//2. literable
//- Symbol.literator 메서드가 있다.
//- Symbol.literator는 literator를 반환해야 한다.

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
//(+)for...of : 반복가능한 객체(Array, Map, Set, String, TypedArray, arguments 등) 반복
for (let num of arr) {
  console.log(num);
}

//2-1. literator
//- next 메서드를 가진다.
//- next 메서드는 value와 done 속성을 가진 객체를 반환한다.
//- 작업이 끝나면 done은 true가 된다.

function* fn2() {
  yield 4;
  yield 5;
  yield 6;
}

const b = fn2();
console.log(b[Symbol.iterator]() === b);

for (let num of b) {
  console.log(num);
}

//string
const str = "hello";
const xx = str[Symbol.iterator]();
for (let num of str) {
  console.log(num);
}

//3. next()에 인수 전달
function* fn3() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);

  return num1 + num2;
}
const c = fn3();
console.log(c.next());
console.log(c.next(2));
console.log(c.next(3));

//4. 값을 미리 만들어 두지 않음.
//- 메모리 관리 측면에서 효율적
//- 필요한 값만 그때 그때 만들어냄
function* fn4() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const d = fn4();

//5. yield* 이용
function* gen1() {
  yield "w";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello,";
  yield* gen1(); //다른 literator를 넣어도 됨.
  yield "!";
}
console.log(...gen2());
