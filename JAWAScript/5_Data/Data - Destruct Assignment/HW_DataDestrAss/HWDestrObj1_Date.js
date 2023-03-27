/* JawaScript - Напишите деструктурирующее присваивание */
// , которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

'use strict';

alert("Start HWDestrObj1_Date");

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert(`"name: " ${name}`);
alert(`"age: " ${age}`);
alert(`"isAdmin: " ${isAdmin}`);

alert("End");

