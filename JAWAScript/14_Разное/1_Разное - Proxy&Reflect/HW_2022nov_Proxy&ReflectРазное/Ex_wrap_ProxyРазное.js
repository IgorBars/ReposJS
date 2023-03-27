/* JawaScript - Ex_wrap_ProxyРазное
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.
*/
'use strict';
alert("Start Ex_wrap_ProxyРазное");


let user = {
    name: "John"
};
  
function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver); // идентичность get и Reflect.get - обязательна!!!      (target, prop, receiver)
                // return target[prop];
            } else {
                throw new Error("Такого свойства не существует");
            }
        }
    });
}

user = wrap(user);

alert(user.name); // John

try {
    alert(user.age); // Ошибка: такого свойства не существует

}   catch(err){
    alert(err);
}




alert("End");

