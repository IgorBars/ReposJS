/* JawaScript - умножает все числовые свойства объекта obj на 2 */
'use strict';

alert("Start Exercise_multiplyNumeric_obj");

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) 
    {
        alert(`Type obj: ${(typeof obj[key])}`);
        if (typeof obj[key] !== "number") continue;
        alert(`pre_key: ${(key)}`);
        alert(`pre_value: ${(obj[key])}`);      
        obj[key] *= 2;
        alert(`new_value: ${(obj[key])}`);
    }    
}

multiplyNumeric(menu);

for (let key in menu) 
    {
        alert(`fin_key: ${(key)}`);
        alert(`fin_value: ${(menu[key])}`);
    }


