"use strict";

//* hoisting : 함수 선언이 hoisting 됨.
// function printImmediately(print) {
//     print();
//   }
// function printWithDelay(print, timeout) {
//     setTimeout(print, timeout);
//   }

//Javascript is synchronous.
//Execute the code block in order after hoisting.
//hoisting : var, function declaration 와 같은 선언들이 제일 위로 올라가는 것
//어떤 일이 완료된 후에 실행되는 함수

console.log("1"); //동기
setTimeout(() => console.log("2"), 1000); //비동기
console.log("3"); //동기

//Synchronous callback 동기적 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); //동기

//Asynchronous callback 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); //비동기

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSucess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSucess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSucess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSucess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter the id");
const password = prompt("enter the password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
