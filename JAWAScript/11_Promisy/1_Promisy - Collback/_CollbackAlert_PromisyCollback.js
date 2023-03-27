/* JawaScript - _CollbackAlert_PromisyCollback
                                    Суть колбєк
*/
'use strict';

alert("Start _CollbackAlert_PromisyCollback");

//  имеем затяжную функцию
// обычно есть доступ только к аргументу сторонней функции foo(...)
// в єтот аргумент и помещаем функцию-колбек (callback)
function foo(callback) { 
    // Есть что-то очень долгое, например супер сложное вычисление.
    // Вопрос, как нам выполнить код после того как это вычисление закончится и использовать результат этого действия?
    let b = 1000000000; // 3c
    let result = 0;
    for (let i = 0; i <= b; i++) {
        result = 'result';
    }
    // И здесь появляется наш Callback! Он подождет пока вычисления в цикле закончатся и выведет наш результат в консоль.
    callback(result);
}

function funcAlert(res) {                   // наш колбэк, выполнит желаемое после оконч сторонней ф-и
    alert(res);
    alert(res + res);
    alert(res + res + res + res);
}

foo( funcAlert );                           // вызов затяжной функции с коллбэком funcAlert

// foo( function (res) {                    // наш колбэк, прописанньій прямо в параметрах
//     alert(res);
//     alert(res + res);
//     alert(res + res + res + res);
// } );

alert("End");

