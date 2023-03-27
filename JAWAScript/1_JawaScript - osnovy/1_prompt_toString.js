/* JawaScript - 1_prompt_toString преобразование типа в строку*/

// однострочный комментарий

'use strict';

alert("Start 1_promt");

let age = prompt("Сколько Вам лет?", 100);
alert(`Вам ${age} лет!`);

let value = true;
alert(`Присвоен тип true - ${typeof value}`); // boolean
value = String(value); // теперь value это строка "true"
alert(`Тип изменен на String - ${typeof value}`); // string
alert(`Содержимое строчного типа - "${value}"`); //true

alert("End");