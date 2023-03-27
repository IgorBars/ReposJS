/* JawaScript - 2_constructor_FprotoPrototype 
- свойство "prototype" функции-конструктора

rabbit.constructor == Rabbit . Властивість .constructor у rabbit наслідується від від об'єкта, що є прототипом 
для ф-ї Rabbit: Rabbit.prototype = { constructor: Rabbit } і який має лише одну властивість   constructor: Rabbit.

Мы можем использовать свойство constructor существующего объекта (яке вказує на ф-ю Rabbit) для создания нового объекта.
        F.prototype = { constructor: F }
        F.prototype.constructor = F
        obj.__proto__.constructor === F
        (obj.constructor == F       - властивості нема, але вона отримується по ланцюжку із прототипу)

*/
'use strict';
alert("Start 2_constructor_FprotoPrototype");


function Rabbit(name) {
    this.name = name;
    alert(name);            // alert викликається в момент виклику Rabbit
}

let whiterabbit = new Rabbit("White Rabbit");   // White Rabbit

let blackrabbit = new whiterabbit.constructor("Black Rabbit");  // Black Rabbit     (whiterabbit.constructor == Rabbit)


// Властивість constructor рідного об'єкту-прототипу ФУНКЦІЇ-КОНСТРУКТОРА має значення: функція-конструктор
alert(Rabbit.prototype.constructor === Rabbit);        // true

// Властивість constructor рідного об'єкту-прототипу створеного ОБ'ЄКТА має значення: функція-конструктор
alert(whiterabbit.__proto__.constructor === Rabbit);  // true

// Наслідувана (із рідного об'єкту-прототипу) властивість constructor створеного об'єкту тотожна функції-конструктору 
alert(whiterabbit.constructor === Rabbit);           // true

alert("End");

