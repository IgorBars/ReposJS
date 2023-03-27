/* JawaScript - _PromisyPromisy
промисом оборачиваем весь рабочий код исходной "затяжной" функции
в месте результата фнкции устанавливаем resolve (и reject)

    Создайте функцию задержки delay(), использующую setTimeout и промис.
    Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
    «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/
'use strict';

alert("Start HW_delay_PromisyCollback");

// промисом оборачиваем затяжную часть рабочего кода исходной функции
// в месте результата затяжной части устанавливаем resolve (и reject)
// активный результат теперь возвращаем в аргументе resolve
function delay(ms) { 

    return new Promise( resolve => {
        let teimObj = {};
        teimObj.dif = 0;
        teimObj.start = new Date();

        while ( teimObj.dif < ms ) {
            
            teimObj.dif = new Date() - teimObj.start;
        }

        resolve(teimObj);
    });
}

delay(2000).then((tObj) => 
alert(`выполнилось через ${tObj.dif} ms, start: ${tObj.start}`));
//изменили название результата в аргументе



alert("End");

