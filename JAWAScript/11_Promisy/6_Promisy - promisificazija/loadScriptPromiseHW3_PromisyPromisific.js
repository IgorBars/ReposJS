/* JawaScript - _PromisyPromisific

*/
'use strict';

alert("Start loadScriptPromiseHW3_PromisyPromisific"); //  
// Промисифицируем calc1(callback)

function calc1(callback) {
  callback("Hola mi amigo!");
}

calc1(console.log)


function calc2() {
  return new Promise(callback => {
    callback("Hola mi amigo!");
  });
}

calc2().then(console.log)

calc2(2, 2)
  .then()                         // Ничего не делаем, идем дальше
  .then(ret => ret)               // Тоже самое ничего :)
  .then(ret => {
    console.log("Digo " + ret);   // Можем поработать с результатом (вывод: Digo Hola mi amigo!)
    // return ret;                // И отправить его дальше...или не отправить (тогда пойдет undefined)
  })
  .then(() => "I'm Groot!")       // Можем изменить
  .then(console.log)              // Выводим результат (вывод: I'm Groot!)
  .then(console.log)              // Упс! Забыли на предыдущем шаге отправить внятное значение дальше (вывод: undefined)
  .then(() => "It's me again :)") // Исправим нашу оплошность
  .then(console.log)              // (вывод: It's me again :) )



alert("End");
