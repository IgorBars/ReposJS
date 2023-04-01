/* JawaScript - 2_then_PromisyPromisy                 ПОЛУЧАТЕЛИ

Затяжная ф-я-исполнитель            => Promise =>               ПОЛУЧАТЕЛИ

setTimeout             => resolve,reject => Promise =>.then =>      ПОЛУЧАТЕЛИ

Для обработки результата следует использовать методы-обработчики .then/.catch/.finally

Объект Promise служит связующим звеном между исполнителем («создающим» кодом или «певцом») и 
функциями-потребителями («фанатами»), которые получат либо результат, либо ошибку. 
Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов ожидания .then и .catch.

Синтаксис:

promise.then(
  function(result) { result => ...обработает успешное выполнение...  },
  function(error) { error =>... обработает ошибку ... }
);

Первый аргумент метода-обработчика .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», 
и получает результат.

Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», 
и получает ошибку.
*/
'use strict';
alert("Start 2_then_PromisyPromisy");


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});
  
// resolve запустит первую функцию, переданную в .then (в не зависимости от имени параметра)(имя параметра - условно-интуитивно-понятное)
promise.then(
    // error => alert("error: " + error),     // done!  (для полож resolve сработает всегда первая инструкция)
    kresult1 => alert(kresult1),             // done!   (через одну секунду)      - отработает, т.к. первая инструкция
    error => alert(error)                   // не будет запущена             (полож resolve направляется в первую инстр)
);



let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
  
// reject запустит вторую функцию, переданную в обработчик .then
// promise1.then(
//     result => alert(result),        // не будет запущена (потому, что єто первая инструкция - для положительного результата)
//     berror1 => alert(berror1)       // Error: Whoops!                (спустя одну секунду)
// );
// перепутаем имена переменньіх:
promise1.then(
    berror => alert(berror),                 //  не будет запущена (первая инструкция - для положительного результата) 
    result => alert("result: " + result),    // result: Error: Whoops!     (вторая инструкция - для ошибочного результата)
);



//Если мы заинтересованы только в результате успешного выполнения задачи, то в обработчик then можно передать только одну функцию:

let promise2 = new Promise(resolve => {  //  присутствие reject необязательно
  setTimeout(() => resolve("done!"), 1000);
});
promise2.then(alert); // done!  
// promise2.then(berror => alert(berror)); // (первьій) по-обьічному аргумент then - для успешного выполнения задачи


//Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента::

let promise3 = new Promise(function(resolve, reject)  { // обязательное присутствие resolve, даже если обрабатьіваем только ошибку
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
// promise3.then(null, error => alert(error));             // первая инстр в обработчике then - для положительного результата
promise3.then(null, alert);




alert("End");

