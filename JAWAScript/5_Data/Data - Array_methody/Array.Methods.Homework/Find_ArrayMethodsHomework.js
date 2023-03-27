/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start ForEach_ArrayMethodsHomework");


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let yulia = { name: "Юля", surname: "Санина", id: 4 };


let users = [ vasya, petya, masha, yulia ];

users.forEach(function(item, index, arrey){// item -объект с индексом index
    item.status = " IT";
    alert(item.id + arrey[index].name + item.surname + item.status);
}
);



let findelement = users.find(item => (// - для отдельных условий через запятые только круглая скобка
    item.name == "Петя",
    item.name == "Вася",
    item.id == 4    //найдена первой, т.к. через запятую приоритет id
)
);

alert("Найден элемент с name Петя, или Вася, или id 4: " 
+ findelement.id + findelement.name + findelement.surname
+ findelement.status);

let findelement1 = users.find(item => 
    item.surname == "Петрова" || 
    item.name == "Петя" || // найден первый, т.к. первый в массиве
    item.id == 4

);

alert("Найден элемент с name Петя, или surname Петрова, или id 4: " 
+ findelement1.id + findelement1.name + findelement1.surname
+ findelement1.status);



alert("End");
