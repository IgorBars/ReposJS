/* JawaScript - умножает все числовые свойства объекта obj на 2 */
'use strict';

alert("Start Exercise_multNumer_obj");

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
//   menu = {           // должно быть так
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

function multiplyNumeric(obj) {

    for (let prop in obj) {
        
        alert(typeof(obj[prop]));
        if ( typeof(obj[prop]) == "number" ) {
            obj[prop] *= 2;
        }

        alert(`Key: ${prop} Value: ${menu[prop]}`);
    }
}
  
multiplyNumeric(menu);

for (let prop in menu) {
    alert(`Key: ${prop} Value: ${menu[prop]}`);
} 

alert("End");