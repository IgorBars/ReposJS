/* JawaScript - Ex_makeObservable_Symbol_ProxyРазное
Возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), 
который позволяет запускать handler при любом изменении свойств.

При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
*/
'use strict';
alert("Start Ex_makeObservable_Symbol_ProxyРазное");


function makeObservable(target) {
         
    let observe = Symbol("observe");        //  обработчик

    return new Proxy (target, {

        set(target, prop, value, receiver) {    // при запису у властивість спочатку поступає value

            if (typeof value == "function") {
                // observes.push(value);
                observe = value;
            } else {
                observe(prop, value);
            }
            
            return Reflect.set(target, prop, value, receiver);
        }
    });
}

let user = {
    name: "Alex",
};

user = makeObservable(user);

user.observe = function(key, value) {
    alert(`SET ${key}=${value}`);
};

user.name = "John"; // выводит: SET name=John




alert("End");

