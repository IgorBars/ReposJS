/* JawaScript - Конструкторы объектов, возвращающие ссылку на один объ */
'use strict';

alert("Start dubbl_constr_singl_obj");

//  объект user с вложенным объектом age
let user = {age: 30,
};

user.name = "John";
user["is Admin"] = true;
        
for (let key in user) {             // проверка полей на вложенность объектов
    alert(`user key: ${(key)}`);       
    alert(`user[key]: ${user[key]}`);        
}

function A() { return user; } // констр A() возвр ccылку на внешний объект user
function B() { return user; } // констр B() возвр ccылку на внешний объект user

alert(`Проверка на один объект: ${ new A() == new B() }`); // true

