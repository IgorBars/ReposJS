/* JawaScript - HW_wait_AsyncPromisy
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
*/
'use strict';
alert("Start HW_wait_AsyncPromisy");


async function wait() {
    let res = await new Promise(resolve => setTimeout(() => resolve(5), 1000));
  
    return res;
}
// wait().then(alert);


// async function f() {
//     return await wait();

// // ...что здесь написать?
// // чтобы вызвать wait() и дождаться результата "10" от async–функции
// // не забывайте, здесь нельзя использовать "await"
// }
// f().then(alert);


function f() {
    wait().then(result => alert(result));

// ...что здесь написать?
// чтобы вызвать wait() и дождаться результата "10" от async–функции
// не забывайте, здесь нельзя использовать "await"
}
f();



alert("End");

