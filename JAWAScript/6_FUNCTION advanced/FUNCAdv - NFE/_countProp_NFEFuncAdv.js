/* JawaScript - _countProp_NFEFuncAdv.

    Функція, будучи об'єктом, може утримувати властивості
Добавимо лічильник викликів як властивість об'єкту-функції
 */
'use strict';

alert("Start _countProp_NFEFuncAdv");

function sayHi() {

    alert("Hi!");

    sayHi.count++;  // добавляємо лічильник викликів як властивість об'єкту sayHi
}

sayHi.count = 0;    // встановлюємо (як властивість ф-ї)  початкове значення лічильника


sayHi();            // Hi
sayHi();            // Hi
alert(sayHi.count); // 2

sayHi.count = 0;    // відмінність від замикання: є доступ до змінної
alert(sayHi.count); // 0

alert("End");