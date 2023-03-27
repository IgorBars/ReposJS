/* JawaScript - 5_PromiseRace_PromisyAPI
    Метод Promise.race очень похож на Promise.all, 
но ждёт только первый исполненный промис, (самый быстрый)
из которого берёт результат (или ошибку).
*/
'use strict';

alert("Start 5_PromiseRace_PromisyAPI");

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(4), 4000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
// Быстрее всех выполнился второй промис, он и дал результат. После этого остальные промисы игнорируются.


alert("End");

