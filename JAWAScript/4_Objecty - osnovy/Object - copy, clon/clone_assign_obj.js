/* JawaScript - клонирование объектов assign */
'use strict';

alert("Start clone_assign_obj");

let user = {age: 20};    // объект user для клонирования
user.name = "John";
user.surname = "Smith";
user["is highadmin"] = true;
user["isAdmin"] = true;

let user1 = {age1: 30};       // еще объект user1 для клонирования    

for (let key in user) {
    alert(`user key: ${(key)}`);       
    alert(`user[key]: ${user[key]}`);     
}

let clone = {};             //  создание объекта clone 
Object.assign(clone, user, user1);  //  клонирование user и user1 в clone

// клонирование assign не предусматривает клонирование вложенных объектов !!!

for (let key in clone) {
    alert(`clone key: ${(key)}`);
    alert(`clone[key]: ${clone[key]}`);            
}

Object.assign(clone, { name: "Пётр" }); // перезапись одноименного ключа
alert(`Перезаписано в clone name: ${clone.name}`);  //Пётр

let user2 = user;
alert (`копия: ${user2 == user}`); //true - скопирован по ссылке - тот же объект
alert (`клон: ${clone == user}`);   //false - клонирован - другой объект
alert (`typeof(user): ${typeof(user)}`);   //   object


alert("End");