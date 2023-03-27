/* JawaScript - 4_constructorProto_FprotoPrototype 
- свойство "prototype" функции-конструктора


*/
'use strict';

alert("Start 4_constructorProto_FprotoPrototype");

let animal = {
    eats: true,
    hous: true
  };

  let animal_Sammer = {
    eats: true,
    hous: false
  }; 

function Rabbit(name) {         //Rabbit.prototype = { constructor: Rabbit };
    this.name = name;
    }
let rabbitProto = new Rabbit("Proto Rabbit");

      // rabbitProto получает ( [[Prototype]] ) __proto__ - скрытое свойство со ссылкой на бъект-прототип { constructor: Rabbit }
Rabbit.prototype.hous = true;  //Не заменяем прототип на другой объект, а добавляем требуемое св-во hous
                               // в родной прототип: { constructor: Rabbit, hous: true }

let Wrabbit = new Rabbit("White Rabbit");// единоразовое исп свойства Rabbit.prototype
            //для установки ссылки в скрытом свойстве ( [[Prototype]] ) __proto__ на родной объект-прототип { constructor: Rabbit }

//Заменяем родной объект-прототип на другой объект animal_Sammer (с потерей свойства constructor: Rabbit)
Rabbit.prototype = animal_Sammer;   

let Grabbit = new Rabbit("Grey Rabbit");

alert( "Wrabbit.hous: " + Wrabbit.hous ); // true  (находит добавленное св-во в Rabbit.prototype)
alert( "Grabbit.hous: " + Grabbit.hous ); // false  (находит св-во в назначенном об'ьекте-прототипе animal_Sammer)

alert(rabbitProto.constructor == Rabbit); // true, создан до переназначения прототипа в конструкторе
alert(Wrabbit.constructor == Rabbit); // true, создан до переназначения прототипа в конструкторе
alert(Grabbit.constructor == Rabbit); // false, создан после переназначения прототипа в конструкторе (перезаписью св-ва Rabbit.prototype конструктора)
                                      // (в назначенном об'ьекте-прототипе animal_Sammer св-во constructor отсутствует)

alert("End");

