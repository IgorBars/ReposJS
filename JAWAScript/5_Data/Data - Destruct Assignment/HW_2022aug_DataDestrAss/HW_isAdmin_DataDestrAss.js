/* JawaScript - Деструктурирующее присваивание 
     Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)        
*/

'use strict';

alert("Start Destruct_rest_DataDestrAss");

let user = {
    name: "John",
    years: 30
};

let {
    name,
    years: age,
    isAdmin = false
} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


alert("End");
