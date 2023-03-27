/* JawaScript - AsyncGen_AsyncGnrIterGenerator        АСИНХРОННО ИТЕРОВАНИЙ ОБ'ЄКТ

Чтобы сделать объект итерируемым асинхронно:
1.  Используется Symbol.asyncIterator вместо Symbol.iterator.
2.  next() должен возвращать промис.
3.  Чтобы перебрать такой объект, используется цикл for await (let item of iterable).
*/
'use strict';
alert("Start AsyncGen_AsyncGnrIterGenerator");

let range = {
    from: 1,
    to: 5,
  
    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() { // (1)                           - async - для понимания, что внутри логика async-await
      // ...возвращает объект-итератор:
      // далее for await..of работает только с этим объектом,
      // запрашивая у него следующие значения вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
        async next() { // (2)
          // должен возвращать значение как объект {done:.., value :...}
          // (автоматически оборачивается в промис с помощью async)
  
          // можно использовать await внутри для асинхронности:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)   просто створюємо показову затримку
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
};

(async () => {
  
    for await (let value of range) { // (4)
      alert(value); // 1,2,3,4,5
    }
  
})()

//async(2), await(3) дозволяють простіше написати повернення промісу і зберегти попередню структуру if

alert("End");

