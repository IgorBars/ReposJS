/* JawaScript - _РазноеProxy

*/
'use strict';

alert("Start HW_makeObservable2_РазноеProxy");

function makeObservable(target) {

    let handlers = Symbol("handlers");  // симв переменная об'ьявлена в makeObservable, а исп как св-во исх об'ьекта :(( (лучше об'ьявлять глобально)

    target[handlers] = [];                     // символьньій ключ-св-во в исх об'ьекте (HE перебирается циклом for..in)

    // target.observe = function(handler) {    // запишем в исходньій об'ьект метод-загрузчик handler-ов
    //     this[handlers].push(handler);
    // };

    target.observe = handler => target[handlers].push(handler); // this[handlers] => target[handlers] т.к. стрел ф-я не имеет this

    return new Proxy(target, {
        
        set(target, property, value, receiver) {

            let success = Reflect.set(target, property, value, receiver);
                if(success) {

                    target[handlers].forEach(handler => handler(property, value));
                }
            return success;
        },

    });
}
  
let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET: ${key}=${value}`);
});

user.observe((prop) => {    // еще обработчик - перебор свойств об'ьекта
    for( prop in user) alert(`PROP: ${prop}`);
});                                             



user.name = "John"; // SET: name=John       PROP: observe       PROP: name

user.age = 39;      // SET: age=39          PROP: observe        PROP: name       PROP: age



alert("End");

