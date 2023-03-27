/* JawaScript  - функция проверки объекта на наличие свойств */
'use strict';

alert("Start Exercise_Empty1_obj");

function isEmpty(obj) {

    for (let key in obj) {

        return false;   // return выполняется только единожды
    }

    return true;    // после "return false" уже не сработает
}

let user = {};

alert(`result: ${isEmpty(user)}`);


user.name = "Peter";

user.age = 30;

alert(`result: ${isEmpty(user)}`);
