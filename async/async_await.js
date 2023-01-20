// async, await
//- promise chaning 을 한 것보다 가독성이 좋아진다.

//1. async
//- 항상 프로미스를 반환한다.
async function getName() {
  return "Mike";
}
console.log(getName()); //promise
getName().then((name) => {
  console.log(name);
});
//- Promise를 반환하면 값을 그대로 사용
async function getName2() {
  return Promise.resolve("Tom");
  //   throw new Error("err...");
}
getName2().then((name) => {
  console.log(name);
});
// getName2().catch((name) => {
//   console.log(name);
// });

//2. await
//- await 키워드는 async 함수 내부에서만 사용 가능 (일반 함수 내부에서 사용하면 error)
//- awit 키워드 옆에는 promise가 오고 promise가 처리될 때 까지 기다린다.
function getName3(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}

async function showName() {
  const result = await getName3("zeta");
  console.log(result);
}

console.log("시작");
showName();

//3. promise 코드 async, await 사용해 간소화

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
// * promise chaning
// p_f1()
//   .then((res) => p_f2(res))
//   .then((res) => p_f3(res))
//   .then((res) => console.log(res))
//   .catch(console.log) //error
//   .finally(() => {
//     console.log("END");
//   });

// async function order() {
//   try {
//     const result1 = await p_f1();
//     const result2 = await p_f2(result1);
//     const result3 = await p_f3(result2);
//     console.log(result3);
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("종료");
// }
// order();

//promise.all
async function order() {
  try {
    const result = await Promise.all([p_f1(), p_f2(), p_f3()]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
