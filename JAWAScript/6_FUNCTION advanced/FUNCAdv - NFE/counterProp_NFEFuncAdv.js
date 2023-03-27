/* JawaScript - counterProp_NFEFuncAdv.


    Функція, будучи об'єктом, може утримувати властивості
Створимо лічильник як властивість вкладеної функції
 */
'use strict';

alert("Start counterProp_NFEFuncAdv");

function makeCounter() {

    function counter() {

        counter.count++;  // добавляємо лічильник як властивість об'єкту counter
    }
    counter.count = 0;
    counter.st = function(num){counter.count = num};    // метод установки значення лічильника
    return counter;
}


let counter = makeCounter();            

counter();
counter();

alert(counter.count);   // 2

counter.count = 10;     // відмінність від замикання: є доступ до змінної з зовні
alert(counter.count);   // 10

counter.st(20);
alert(counter.count);   // 20

alert("End");