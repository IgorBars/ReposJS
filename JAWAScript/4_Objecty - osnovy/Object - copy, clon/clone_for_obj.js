/* JawaScript - копирование и клонирование объектов for in */
'use strict';

alert("Start clone_for_obj");

let user = {age: 20};    // объект user для клонирования
user.name = "John";
user.surname = "Smith";
user["is highadmin"] = true;
user["isAdmin"] = true;
        
for (let key in user) {
    alert(`user key: ${(key)}`);       
    alert(`user[key]: ${user[key]}`);     
}

let clone = {};             //  создание объекта clone
for (let key in user) {     //  клонирование user в clone
    clone[key] = user[key];            
}

for (let key in clone) {;
    alert(`clone key: ${(key)}`);
    alert(`clone[key]: ${clone[key]}`);            
}
let user1 = user;
alert (`копия: ${user1 == user}`); //true - скопирован по ссылке - тот же объект
alert (`клон: ${clone == user}`);   //false - клонирован - другой объект
alert (`typeof(user): ${typeof(user)}`);   //
alert("End");