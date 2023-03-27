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

alert("Индекс елемента masha: " + users.indexOf(masha));


let MashaArr = users.splice(2, 1);// Удаляем 1 объект со 2-й позиции
// Массив MashaArr состоит из 1-го (удаленного) объекта
MashaArr.forEach(item => {
    alert("Удалено элемент с поз 2: "
     + item.id + item.name + item.surname + item.status);
}
);

users.forEach(item => {
    alert(item.id + item.name + item.surname + item.status);
}
);


alert("End");
