/* JawaScript - 1_PromiseAll_PromisyAPI
Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся.
Например, параллельно загрузить несколько файлов и обработать результат, когда он готов.
Для этого как раз и пригодится Promise.all 
(многопоточньій then, принимает несколько потоков промисов, возвр промис массива результатов).

Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) 
и возвращает новый промис (массива результатов).

Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов.
*/
'use strict';

alert("Start 1_PromiseAll_PromisyAPI");

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
])
  .then(alert);                                               //  1,2,3   (- массив, когда все промисы выполнятся)
// каждый промис даёт элемент массива


// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(alert); // Error: Ошибка!

alert("End");

