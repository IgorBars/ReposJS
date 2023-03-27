/* JawaScript 2_OstatParam&OperRasshyr_AdvancPar_FUNCAdv    - Остаточные параметры и оператор расширения */
'use strict';


alert("Start 2_OstatParam&OperRasshyr_AdvancPar_FUNCAdv");

//Array.from работает как с псевдомассивами, так и с итерируемыми объектами

let ObjPseudoArray = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: " ",
    2: "World",
    length: 3
};
alert(Array.from(ObjPseudoArray)) ;


//Оператор расширения работает только с итерируемыми объектами, напр со Strimg:
let str = "Привет";
alert( [...str] ); // П,р,и,в,е,т

/*
Когда мы видим "..." в коде, это могут быть как остаточные параметры, 
так и оператор расширения.

Как отличить их друг от друга:

Если ... располагается в конце списка аргументов функции, то это «остаточные 
араметры». Он собирает остальные неуказанные аргументы и делает из них массив.

Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». 
Он извлекает элементы из массива
*/


alert("End");