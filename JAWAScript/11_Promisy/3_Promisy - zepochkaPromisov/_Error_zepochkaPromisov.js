/* JawaScript - _zepochkaPromisov
throw error;  - "пробрасываем" ошибку дальше, отменяя след then
*/
'use strict';

alert("Start _Error_zepochkaPromisov");

new Promise(function(resolve, reject) {

  setTimeout(() => {
    // throw new Error("Whoops!");
    return resolve(1)
  }, 1000);

})
.then(
    result => alert(result),    // 1
)
.then(result => new Promise(function(resolve, reject) {
    throw new Error("Ошибка!"); // генерируем ошибку
}))
.catch(error => {    // ловим ошибку в catch (и изолируем ее) 

  alert(`Неизвестная ошибка: ${error}`);    //Неизвестная ошибка: Error: Ошибка!
  // ничего не возвращаем => выполнение продолжается в нормальном режиме


// throw error;    // "пробрасываем" ошибку дальше, отменяя след then

}).then(
    result => alert(2), // 2
)
;



alert("End");

new Promise(function() {
  throw new Error("Ошибка!");
});
