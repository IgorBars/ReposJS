/* JawaScript - 3_asyncMethod_PromisyAsync
Как и promise.then, await позволяет работать с промис–совместимыми объектами. 
Идея в том, что если у объекта можно вызвать метод then, этого достаточно, чтобы использовать его с await.
*/
'use strict';


class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // выполнить resolve со значением this.num * 2 через 1000мс
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // код будет ждать 1 секунду,
  // после чего значение result станет равным 2
  let result = await new Thenable(1);
  alert(result);
}

f();


// Когда await получает объект с .then, не являющийся промисом, JavaScript автоматически запускает этот метод, 
//передавая ему аргументы – встроенные функции resolve и reject. Затем await приостановит дальнейшее выполнение кода, 
//пока любая из этих функций не будет вызвана (в примере это строка (*)). 
//После чего выполнение кода продолжится с результатом resolve или reject соответственно.

alert("End");

