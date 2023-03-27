/* JawaScript - _PromisyAsync
    Есть «обычная» функция. Как можно внутри неё получить результат 
выполнения async–функции?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
*/
'use strict';

alert("Start HW_wait_PromisyAsync");

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

// wait()
// .then(alert);

function f() {
        wait()
        // .then(result => alert(result)); 
        .then(alert);   
}

f();
// .then(alert);

alert("End");

