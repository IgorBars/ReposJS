/* JawaScript -возвращает количество свойств объекта  */


'use strict';

alert("Start HW_countProp1_DateObjKeys");

let user = {
    name: 'John',
    age: 30
};
  
function count(obj) {
    // return Object.entries(obj).length
    return Object.keys(obj).length;
}

alert( count(user) ); // 2

// let user = {
//     name: 'John',
//     age: 30
// };
// function countLog(user) {
// console.log(Object.keys(user).length)
// }

// countLog(user);


alert("End");
