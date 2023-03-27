/* JawaScript - возвращает количество свойств объекта */


'use strict';

alert("Start countProp_DateObjKeys");

function countProp(obj) {

    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
  };
  
alert( countProp(user) ); // 2

alert("End");
