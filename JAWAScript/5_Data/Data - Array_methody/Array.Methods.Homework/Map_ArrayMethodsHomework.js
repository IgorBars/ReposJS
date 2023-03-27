/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start Map_ArrayMethodsHomework");


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let yulia = { name: "Юля", surname: "Санина", id: 4 };

let nastia = { name: "Настя", surname: "Гуркина", id: 5 };

let users = [vasya, petya, masha, yulia];
users.map(item => {

    item.kompl = "*" + item.name + item.surname + "*";
}
);


let usersconcat = users.concat(nastia);// добавляем в массив объ nastia
usersconcat.map(item => { // доб в массиве в объ nastia свойство kompl
    if(item.id == 5) item.kompl = "@" + item.name + item.surname + "@";
}
);

usersconcat.forEach(item => alert("usersNew: id,name,surname,kompl: " + 
item.id + " " + item.name + " " + item.surname + " " + item.kompl));


usersconcat.map(item => {

        item.kompl2 = "#" + item.kompl + "IT" + "#";
        item.id = 100 + item.id;
    }
);

usersconcat.forEach(item => alert(item.id + " " + item.name + " "
 + item.surname + " " + item.kompl + " " + item.kompl2));


alert("End");
