/* JawaScript - _РазноеProxy

*/
'use strict';

alert("Start HW_makeObservable3_РазноеProxy");

function makeObservable(target) {

    let handlers = Symbol("handlers"); // симв переменная для симв св-ва

    target[handlers] = [];              // симв св-во = хранилище handler-ов

    target.observe = function (handler) { // метод исх об'ьекта
        this[handlers].push(handler);
    }

    return new Proxy(target, {
        
        set(target, property, value, receiver) {

            let success = Reflect.set(target, property, value, receiver);

            target[handlers].forEach(handler => handler(property, value));

            return success;
        },
    });
}
  
let user = {};
user = makeObservable(user);

user.observe((prop, value) => {
    alert(`SET: ${prop}=${value}`);
});

user.observe((prop) => {    // еще обработчик - перебор свойств об'ьекта
    for( prop in user) alert(`PROP: ${prop}`);
}); 
  
user.name = "John"; // SET: name=John   PROP: observe  PROP: name
user.age = 39;      // SET: name=John   PROP: observe  PROP: name  PROP age

alert("End");

