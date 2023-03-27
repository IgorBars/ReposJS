/* JawaScript - 3_2_enumerable_FlagsDescriptKonfigSvObj Конфигурация свойств объекта

Значение флага    enumerable:false - делает свойство неперечислимьім 

Встроенный метод toString в объектах – неперечислимый, его не видно в     цикле for..in     и      Object.keys. 
Но если мы напишем свой собственный метод toString, цикл for..in будет выводить его по умолчанию.
 */
'use strict';

alert("Start 3_2_enumerable_FlagsDescriptKonfigSvObj");


let user = {
    name: "John",
    toString() {          // по умолчанию у создаваемьіх свойств  значение флагов: true
      return this.name;   // writable: true, enumerable: true, configurable: true
    }
};

for (let key in user) alert(key); // name   toString 

Object.defineProperty(user, "toString", {
    enumerable: false     // writable: true, configurable: true
});

// Теперь наше свойство toString пропало из цикла:
for (let key in user) alert(key);   // name

alert(Object.keys(user));           // name

alert("End");