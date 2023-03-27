/* JawaScript - _PromisyPromisy
промисом оборачиваем весь рабочий код исходной "затяжной" функции
в месте результата фнкции устанавливаем resolve (и reject)

    Создайте функцию задержки delay(), использующую setTimeout и промис.
    Функция delay(ms) должна возвращать промис, который перейдёт в состояние 
    «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
*/
'use strict';

alert("Start HW_delay_PromisyCollback");

            // мое решение
// function delay(ms) {     // new Date()
            //промисом оборачиваем весь рабочий код исходной "затяжной" функции
            //в месте результата фнкции устанавливаем resolve (и reject)

//     return new Promise( function(resolve) {
//         let start = new Date();
//         let dif;

//         for(let i = 1; i < 1000000; i++) {
//             dif = new Date() - start;

//             if( dif > ms - 1 ) { resolve(dif); break; }
//         }   
//     });
// }
// delay(3000).then((dif) => alert(`выполнилось через ${dif} ms`));



// решение с помощью setTimeout
function delay(ms) {    

    return new Promise( resolve => setTimeout( resolve, ms ));//setTimeout обёрнут промисом
} //рабочую функцию здесь представляет setTimeout


delay(3000).then(() => alert(`выполнилось через 3000 ms`));



alert("End");

