/* JawaScript - 3_constructorProto_FprotoPrototype 
- свойство "prototype" функции-конструктора

У функції-конструктора F() є "проміжний" об'єкт прототип - { constructor: F }, а у нього - об'єкт прототип Object.prototype.
Єдина властивість цього "проміжного" об'єкта від інших - властивість constructor - вказує на саму функцію-конструктор F()
*/
'use strict';

alert("Start 3_constructorProto_FprotoPrototype");

let animal = {
    // constructor: Rabbit,
    eats: true,
    hous: true
  };

  let animal_Sammer = {
    // constructor: Rabbit,
    eats: true,
    hous: false
  }; 

function Rabbit(name) { //Rabbit.prototype = { constructor: Rabbit };
    this.name = name;
    }

//Створюваний об'єкт за замовчуванням отримує прототип ф-ії-конструктора:   { constructor: Rabbit }
let rabbitProto = new Rabbit("Proto Rabbit"); // rabbitProto.__proto__ = { constructor: Rabbit }

// Можна змінити прототип ф-ії-конструктора
Rabbit.prototype = animal;  // Перезаписываем заново св-во Rabbit.prototype (больше не { constructor: Rabbit })

let Wrabbit = new Rabbit("White Rabbit");// единоразовое исп свойства Rabbit.prototype для установки ссылки в скрьітом 
                                          // свойстве [[Prototype]] об'ьекта Wrabbit на актуальный объект-прототип (animal)
                                          // Grabbit.__proto__ = animal
Rabbit.prototype = animal_Sammer  // Перезаписываем заново св-во Rabbit.prototype (больше не animal)

let Grabbit = new Rabbit("Grey Rabbit");  // Grabbit.__proto__ = animal_Sammer

alert( "Wrabbit.hous: " + Wrabbit.hous ); // true  (Wrabbit не имеет, но св-во по цепочке находится в прототипе animal)
alert( "Grabbit.hous: " + Grabbit.hous ); // false (Grabbit не имеет, но св-во по цепочке находится в прототипе animal_Sammer)

alert(rabbitProto.constructor == Rabbit); // true  -получает копию св-ва constructor в момент создания (от родного прототипа: { constructor: Rabbit })
alert(Wrabbit.constructor == Rabbit); // false     -в назначенном прототипе animal отсутствовало св-во constructor: Rabbit

alert("End");

