/* JawaScript - _8_0Delay_РазноеProxy
Предыдущая реализация декоратора delay(f, ms) на основе функции не перенаправляет операции чтения/записи свойства и другие. 
После обёртывания доступ к свойствам оригинальной функции, таким как name, length, и другим, будет потерян.
*/
'use strict';

alert("Start _8_0Delay_РазноеProxy");

function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(user) {
    alert(`Привет, ${user}!`);
}


alert("sayHi.length: " + sayHi.length); // 1 (в функции length - это число аргументов в её объявлении)
alert("sayHi.name: " + sayHi.name);

sayHi = delay(sayHi, 3000);

alert("sayHi.length: " + sayHi.length); // 0 (в объявлении функции-обёртки ноль аргументов)
alert("sayHi.name: " + sayHi.name);

alert("End");

