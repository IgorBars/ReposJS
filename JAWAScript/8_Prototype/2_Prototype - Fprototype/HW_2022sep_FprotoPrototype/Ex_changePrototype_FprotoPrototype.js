/* JawaScript - Ex_changePrototype_FprotoPrototype 
- свойство "prototype" функции-конструктора

rabbit.constructor == Rabbit  Властивість .constructor наслідується від Rabbit.prototype = { constructor: Rabbit },
тобто від об'єкта, що є прототипом для ф-ї Rabbit і має лише одну властивість   constructor: Rabbit.

*/
'use strict';
alert("Start Ex_changePrototype_FprotoPrototype");


function Rabbit() {}

Rabbit.prototype = {                // переназначили прототип за замовчуванням на "недопрототип" з власт  eats: true
  eats: true
};

let rabbit = new Rabbit();          // получает скрьітое св-во  rabbit.[[Prototype]] = {eats: true}

alert( rabbit.__proto__.eats );     // true   (звертаємся до властивості eats "недопрототипа" через геттер __proto__ із Object.prototype)

alert( rabbit.eats );               // true   (бо властивість знайдена у "недопрототипі", від якого наслідує rabbit)



// 1.   Замінюємо призначений "недопрототип" у Rabbit на новий {}. 
// Rabbit.prototype = {};

// alert( rabbit.eats ); // true   (бо об'єкт rabbit при створенні отримав приховану властивість rabbit.[[Prototype]] = {eats: true} 
                                                                                            //  і продовжує його наслідувати)

// 2.   Змінюємо у призначеному "недопрототипі" значення властивості. 
// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // false      (бо змінюючи властивість у актуальному для rabbit прототипі вона віднайдеться саме така)
                                        // (бо і Rabbit і rabbit мають один спільний об'єкт-прототип ("недопрототип"))


// 3.   Намагаємось видалити властивість у створеному об'єкті.
// delete rabbit.eats;

// alert( rabbit.eats ); // true   (бо у у створеному об'єкті rabbit немає цієї властивості, 
                                // а видалити властивість у прототипі із-під наслідника по ланцюжку прототипів неможливо)

// 4.   Напряму видаляємо властивість у призначеному "недопрототипі".
delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefinet  (бо не знайдено властивість ні у створеному об'єкті rabbit, ані у його прототипі ("недопрототипі"))


alert("End");

