/* JawaScript - 3_asyncMethod_PromisyAsync
Для объявления асинхронного метода достаточно написать async перед именем.
Как и в случае с асинхронными функциями, такой метод гарантированно возвращает промис, и в его теле можно использовать await.
*/
'use strict';

alert("Start 3_asyncMethod_PromisyAsync");

class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(alert); // 1

alert("End");

