/* JawaScript - создать пустой объект... */
'use strict';

alert("Start Exercise_Create_obj");



let user = {};
let user1 = {age: 20};

user.name = "john";

user.surname = "Smith";

user["name"] = "Pete";

user["is highadmin"] = true;

let key = "isAdmin";

user[key] = true;   // свойство создано последним

for (let prop in user){
    alert(prop);
    alert(user[prop]);
}

delete user.name;

let i =  0; 
for (let prop in user){
    alert(prop);           // вывод всех ключей-имен объекта
    alert(user[prop]);     // вывод значений всех свойств объекта
    i++;
}
alert(i);


alert("End");

