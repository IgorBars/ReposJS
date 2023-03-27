/* JawaScript - Опциональная цепочка */
'use strict';

alert("Start opt_chain1_obj");

function Man() { 
    this.name = "Alex";
    this.admin = function () {
        alert("I am Admin");
    };
}

let man = new Man();
alert(man.name);
man.admin();            // I am Admin

let superman = {};

// доступ к свойству, которого может не быть (без ошибки)
man.admin?.();          // I am Admin
//  I am Admin - метод man.admin()  в наличии 

superman.admin?.();
//  - метод superman.admin() отсутствует, но ошибки нет
let key = "name";
alert("[ ]: " + man?.[key]);        // Alex
alert("[ ]: " + superman?.[key]);   // undefined

alert("End");
