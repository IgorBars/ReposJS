/* JawaScript - Ex_obj_constructor_FprotoPrototype 
- свойство "prototype" функции-конструктора

имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
но хотелось бы создать ещё один объект такого же типа.

*/
'use strict';
alert("Start Ex_obj_constructor_FprotoPrototype");



function Animal(name) {
    this.name = name;
    this.getName = function() { alert(this.name); }
};
// Animal.prototype = {};

let obj = new Animal("Alex"); // obj отримує obj.constructor = Animal ( із об'єкту-прототипу { constructor: Animal } )
// obj.getName();                   // Alex
alert(obj.name);                    // Alex
alert(obj.constructor);             // Animal  (знайшов у прототипі { constructor: Animal })
alert(obj.__proto__.constructor);   // Animal   (отримав через аксесор __proto__ у Object.prototype з прототипу { constructor: Animal })

// let obj2 = new obj.__proto__.constructor("Tom"); // шлях через аксесор __proto__
let obj2 = new obj.constructor("Tom");              // скорочений шлях з пошуком у прототипах
// obj2.getName();                  // Помилка (немає такого метода)
alert(obj2.name);                   // undefined

alert(Animal.prototype.constructor);// Animal

alert("End");

