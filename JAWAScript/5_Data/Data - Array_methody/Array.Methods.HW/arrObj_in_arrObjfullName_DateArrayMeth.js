/* JawaScript - arrObj_in_arrObjfullName_DateArrayMeth
Створити новий массив объектов с параметрами id и fullName
*/
'use strict';

alert("Start arrObj_in_arrObjfullName_DateArrayMeth");

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( item => ( {  // екрануємо фігурні дужки об'єкта круглими

    fullName: item.name + " " + item.surname,
    id: item.id
    } ) 
);

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

alert("End");
