/* JawaScript - Ex_makeObservable_SymbolArray_ProxyРазное
Возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), 
который позволяет запускать handler при любом изменении свойств.

При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
*/
'use strict';
alert("Start Ex_makeObservable_SymbolArray_ProxyРазное");   // варіант із сховищем у оболонці


function makeObservable(target) {

    let observes = Symbol("observes");  // символьна змінна у ф-ї-оболонці makeObservable
    observes = [];                   //  хранилище обработчиков 

    return new Proxy (target, {

        set(target, prop, value, receiver) {    // при запису у властивість спочатку поступає value

            if (typeof value == "function") {
                observes.push(value);

            } else {
                for(let observe of observes) {
                    observe(prop, value);
                }
            }
            
            return Reflect.set(target, prop, value, receiver);
        }
    });
}

let user = {
    name: "Alex",
};

user = makeObservable(user);

user.observe = function(key, value) {   // 1-й обробник запису у властивість (поки нема цього метода, об'являємо як ф-ю)
    alert(`SET ${key}=${value}`);
};
user.observe2 = function(key, value) {   // 2-й обробник запису у властивість
    alert(`SET2 ${key}=${value}`);
};

user.name = "John"; // выводит: SET name=John




alert("End");

