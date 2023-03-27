/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start Filter_ArrayMethodsHomework");


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let yulia = { name: "Юля", surname: "Санина", id: 4 };


let users = [vasya, petya, masha, yulia];

let arrFilterUsers = users.filter(item => 
    item.id == 1 || item.name == "Юля" 
    || item.surname == "Петрова"
);//независимо от порядка в условии, в новом архиве порядок архива-оригинала

alert(arrFilterUsers);

arrFilterUsers.forEach((item) => 
    alert(item.id + item.name + item.surname)
);


alert("End");
