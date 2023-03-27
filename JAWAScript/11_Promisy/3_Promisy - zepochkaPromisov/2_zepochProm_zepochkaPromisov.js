/* JawaScript - 2_zepochProm_zepochkaPromisov
Возвращая промисы, мы можем строить цепочки из асинхронных действий

Как правило, функции с асинхронными действиями (в данном случає с setTimeout) должны возвращать промис.
Это позволяет ПЛАНИРОВАТЬ ПОСЛЕ таких функций (с асинхронными действиями) какие-то дополнительные действия.
*/
'use strict';
alert("Start 2_zepochProm_zepochkaPromisov");


// new Promise((resolve, reject) => {        // ф-я промісу має лише одну інструкцію, тому її можна замінити на стрілку
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
.then(function (result) {
    alert(result);                                  //  1
    return new Promise(function (resolve, reject) {         // вертаємо проміс, бо вводимо затримку
        setTimeout(() => resolve(result * 2), 1000);        // затримка
    });
})
.then(function (result) {
    alert(result);                                  //  2
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result * 2), 1000);
    })
})
// .then(result => {                        // ф-я обробника then має лише одну інструкцію, тому її можна замінити на стрілку
.then(function (result) {
    alert(result);                                  //  4
})
.then(result => {
    alert("Конец цепочки промисов");
});


// Таким образом, выводятся 1 → 2 → 4, a между вызовами alert существует пауза в 1 секунду.



alert("End");

