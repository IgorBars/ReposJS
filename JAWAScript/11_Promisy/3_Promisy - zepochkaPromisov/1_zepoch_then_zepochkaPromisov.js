/* JawaScript - 1_zepoch_then_zepochkaPromisov

Це не ланцюжок промісів. Це ланцюжок обробників .then, які повертають (дооброблений кожним наступним then) результат першого промісу

Pезультат передаётся по цепочке обработчиков, и мы видим несколько
 alert подряд, которые выводят: 1 → 2 → 4.
*/
'use strict';

alert("Start 1_zepoch_then_zepochkaPromisov");

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
    alert(result);                 //  1
});

promise.then(function (result) {
    alert(result);                 //  1
    return result * 2;
})
.then(function (result) {
    alert(result);              //  2
    return result * 2;
})
.then(function (result) {
    alert(result);              //  4
    return result * 2;
})
.then(function (result) {
    alert(result);              //  8
    return result * 2;
})
.then(function (result) {
    alert("Конец цепочки then");
});



alert("End");

