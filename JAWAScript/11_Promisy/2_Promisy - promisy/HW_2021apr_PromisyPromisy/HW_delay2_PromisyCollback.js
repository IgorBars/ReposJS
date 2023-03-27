/* JawaScript - _PromisyPromisy
промисом оборачиваем весь рабочий код исходной "затяжной" функции
в месте результата фнкции устанавливаем resolve (и reject)

    Создайте функцию задержки delay(), использующую setTimeout и промис.
    Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
    «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/
'use strict';

alert("Start HW_delay2_PromisyCollback");

// промисом оборачиваем затяжную часть рабочего кода исходной функции
// в месте результата затяжной части устанавливаем resolve (и reject)
// активный результат теперь возвращаем в аргументе resolve

function delay(ms) {
    // return new Promise( function(resolve) {
    //     setTimeout(() => resolve(ms), ms);
    // });

    return new Promise( resolve => {setTimeout(() => resolve(ms), ms); }
    );  // () => - без функции нет задержки ( setTimeout(resolve(ms), ms) )
}

delay(2000).then(result => alert(`выполнилось через ${result / 1000} секунды`));

// название результата в аргументе можно менять: resolve(ms) => .then(result
// ms => result



alert("End");

