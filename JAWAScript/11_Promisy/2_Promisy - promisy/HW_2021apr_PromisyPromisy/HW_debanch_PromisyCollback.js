/* JawaScript - _PromisyPromisy
промисом оборачиваем весь рабочий код исходной "затяжной" функции
в месте результата фнкции устанавливаем resolve (и reject)

    Создайте функцию задержки delay(), использующую setTimeout и промис.
    Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
    «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/
'use strict';

alert("Start HW_debanch_PromisyCollback");

// стрел ф-я debounce(синхронный аналог асинхронного setTimeout)
const debounce = (callback, debounceTime) => {
  debounceTime += Date.now();
  while (Date.now() < debounceTime) {
    callback();
  }
};

// оборачиваем стрелочным промисом ф-ю debounce
const delay = (ms) => new Promise(resolve => debounce(resolve, ms));

delay(3000).then(() => console.log("hello there"));



alert("End");

