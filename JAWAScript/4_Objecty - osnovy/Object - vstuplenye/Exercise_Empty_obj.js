/* JawaScript - функция проверки объекта на наличие свойств */
'use strict';

alert("Start Exercise_Empty_obj");

function isEmpty(obj) {
    let i = 0;
    for (let key in obj) {
        ++i;
    }
    alert(`i = ${i}`);
    return (i == 0);        //return true
}

let user = {};
alert(`result: ${isEmpty(user)}`);  // true
user.name = "Peter";
user.age = 30;
alert(user.name);                   //Peter
alert(`result: ${isEmpty(user)}`);  //false
