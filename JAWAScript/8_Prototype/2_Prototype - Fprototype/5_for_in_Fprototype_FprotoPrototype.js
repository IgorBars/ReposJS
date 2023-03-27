/* JawaScript - 5_for_in_Fprototype_FprotoPrototype 
- дивимось властивість constructor у прото-об'єкті.

rabbit.constructor == Rabbit . Властивість .constructor у rabbit наслідується в момент народження rabbit ф-ією new F() 
від об'єкта, що є рідним прототипом для ф-ї Rabbit: Rabbit.prototype = { constructor: Rabbit } і який має лише одну властивість 
  constructor: Rabbit.

        F.prototype = { constructor: F }
        F.prototype.constructor = F
        obj.__proto__.constructor = F
        (obj.constructor == F   - властивості нема, але вона отримується по ланцюжку із прототипу через вл-ть __proto__)

*/
'use strict';
alert("Start 5_for_in_Fprototype_FprotoPrototype");

//Протооб'єкт ф-ії-конструктора створюється оночасно з самою ф-ією-конструктором
function Rabbit(name) {         // Rabbit.prototype = { constructor: Rabbit }
    this.name = name;
}

alert(Rabbit.prototype.constructor);    // Rabbit

Rabbit.prototype.jump = true;   // Додамо потрібну властивість у рідний прототип { constructor: Rabbit }:
                                // { constructor: Rabbit, jump: true }

let whiterabbit = new Rabbit("White Rabbit");   // whiterabbit.__proto__ = { constructor: Rabbit, jump: true }


let Proto = Rabbit.prototype;   // призначимо ім'я рідному прототипу ф-ії-конструктора

for (let key in Proto) {    // властивість constructor не виводиться for...in

    alert(key);              // jump
}

let descriptors = Object.getOwnPropertyDescriptors(Proto);

alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "constructor":{
        "writable": true,
        "enumerable": false,                    // ось чому властивість constructor не виводиться for...in
        "configurable": true
    },
    "jump":{
        "value": true,
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}
*/

alert("End");

