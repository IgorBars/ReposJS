/* JawaScript - клонирование объекта с вложенным объектом */
'use strict';

//Если внутри копируемого объекта есть свойство значение, 
// которого не является примитивом, оно будет передано по ссылке.

alert("Start clone_assign_vlojenny_obj");
//  объект user с вложенным объектом age
let user = {age:    30,
            sizes:  {
                hight: 172,
                weight: 72
            } 
};                
user.name = "John";
user.surname = "Smith";
user["is Admin"] = true;
        
for (let key in user) { // проверка полей на вложенность объектов
    if( typeof(user[key]) == "object" ) {
        alert(`user key obj: ${(key)}`);       
        alert(`user[key] obj: ${user[key]}`);   
    }  
}

let clone = Object.assign({}, user);

for (let key in clone) {;
    alert(`clone key: ${(key)}`);
    alert(`clone[key]: ${clone[key]}`);            
}

alert (`Проверка на клонирование clone.age: ${clone.sizes == user.sizes}`); // true!!! - не клонирован! (один и тот же объ!)
alert (`Проверка на клонирование clone: ${clone == user}`);   //false, не смотря, что вложенный объект скопирован по ссылке   //

clone.sizes = Object.assign({}, user.sizes);    // доп "врукопашную" клонирование влож объ .sizes
alert (`Проверка #2 на клонирование clone.age: ${clone.age == user.age}`); // false - теперь клонирован (разные объ .sizes)



alert("End");