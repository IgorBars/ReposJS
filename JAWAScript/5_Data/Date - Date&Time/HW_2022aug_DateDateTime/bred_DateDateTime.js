/* JawaScript - bred_DateDateTime         Объект Time 

*/


'use strict';

alert("Start bred_DateDateTime");

let day = 1, month = 2, year = 3, hours = 4, minutes = 5;

let components = [day, month, year, hours, minutes];// Закинем все переменные в массив 
for (let i = 0; i < components.length; ++i) { // Чтобы сделать с ними что-то однотипное
    components[i] = ('0' + components[i]).slice(-2);
}

let [d, mo, y, h, m] = components; // деструктивно присваиваем из массива components в новьіе переменньіе
alert( `${d}.${mo}.${y} ${h}:${m}`); // вьіводим новьіе переменньіе


alert("End");

