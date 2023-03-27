/* JawaScript - _РазноеProxy

*/
'use strict';

alert("Start HW_makeObservable4_РазноеProxy");

let user = {}; 

function makeObservable(target) {
    let handlers = Symbol("handlers");// сохраняем символьное зн в переменную

    target[handlers] = [];// добавляем симв св-во об'ьекту target и присваиваем ему массив

    target.observ = function(f) {// добавляем метод об'ьекту target
        this[handlers].push(f);
    };

    return new Proxy(target, {

        set(target, property, value, receiver) {

            let success = Reflect.set(target, property, value, receiver);

            target[handlers].forEach(handler => {
                handler(property, value);
            });

            alert(`ВСЕ СВОЙСТВА: ${Object.keys(target)}`);

            return success;
        },

    });
}

user = makeObservable(user);

user.observ((key, value) => {
    alert(`PROP:  ${key} = ${value}`);
})


user.name = "Jon";  // PROP: name = Jon         ВСЕ СВОЙСТВА: observ,name
user.age = 39;      // PROP: age = 39           ВСЕ СВОЙСТВА: observ,name,age


alert("End");

