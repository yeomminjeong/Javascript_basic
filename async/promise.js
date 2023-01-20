//Promise

// const pr = new Promise((resolve, reject) => {
//   //code
// });

// 1. 구조
// - resolve, reject : 매개변수 (실행, 거절)
// - .catch : reject의 경우
// - .finally : 어떤 매개변수를 받든 마지막에 실행됨.

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("OK");
//     reject(new Error("err...."));
//   }, 1000);
// });

// console.log("시작");
// pr.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("끝");
//   });

// 2. Callback Hell 콜백 지옥
// const f1 = (callback) => {
//   setTimeout(function () {
//     console.log("1번 주문 완료");
//     callback();
//   }, 1000);
// };

// const f2 = (callback) => {
//   setTimeout(function () {
//     console.log("2번 주문 완료");
//     callback();
//   }, 3000);
// };

// const f3 = (callback) => {
//   setTimeout(function () {
//     console.log("3번 주문 완료");
//     callback();
//   }, 2000);
// };

//* 콜백 지옥 Callback Hell
//깊어지면서 계속 콜백함수를 호출하는 것
// console.log("시작");
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("끝");
//     });
//   });
// });

//위 예제 promise로 구현

const p_f1 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const p_f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
      //   rej(new Error("this is error umhahahaha"));
    }, 3000);
  });
};

const p_f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

//3. Promise.all
//- 다음 프로미스를 기다리지 않고 모두 실행해서 시간 단축
//- rej -> no code 어떠한 값도 갖지 못함.
//- 하나의 정보라도 누락되면 페이지의 정보를 알려주지 않을 경우에 사용

// console.time("x");
// Promise.all([p_f1(), p_f2(), p_f3]).then((res) => {
//   console.log(res);
//   console.timeEnd("x");
// });

//4. Promise Chaning (프로미스 체이닝)
//- 프로미스가 연결되는 것

// console.time("시작");
// p_f1()
//   .then((res) => p_f2(res))
//   .then((res) => p_f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log) //error
//   .finally(() => {
//     console.log("END");
//     console.timeEnd("시작");
//   });

//5. Promise.race
//- 1개라도 1등으로 끝내면 완료
//- 용량이 큰 이미지를 로딩하는데 그 중 한개라도 완료되면 끝나게 할 때 사용

// console.time("x");
Promise.race([p_f1(), p_f2(), p_f3]).then((res) => {
  console.log(res);
  //   console.timeEnd("x");
});
