/* JawaScript - HW_
                                        Єксперименти з методом-стрілкою
*/
'use strict';
alert("Start HW_");


let handlers = Symbol("handlers");

let user = {
    [handlers]: [],
};

                                                            // декларация метода-стрелки об'ьекта user
user.observe = handler => user[handlers].push(handler);      //  у стрелки нет this, поєтому user[handlers]


// user.observe = function(handler) {                       // декларация метода-ф-и об'ьекта user
//     this[handlers].push(handler);
// };



user.observe((prop) => {                                        // вьізов метода об'ьекта
    // for( prop in user) 
    alert(`PROP: ${prop}`);
}); 
user.observe((prop, val) => {                                    // вьізов метода об'ьекта
    alert(`PROP/VAL: ${prop}=${val}`);
});


user.name = "John";

user.age = 39;




for (let [key, value] of Object.entries(user)) {

    user[handlers].forEach(handler => handler(key, value)); // PROP: observe    PROP/VAL: observe=function{...}
                                                            // PROP: name   PROP/VAL: name=John
                                                            // PROP: age    PROP/VAL: age=39
}


// for (let key in user) {alert(key); alert(user[key]);}    // ресурсо-затратньій for (каждая итерация: key in user)

alert("End");

