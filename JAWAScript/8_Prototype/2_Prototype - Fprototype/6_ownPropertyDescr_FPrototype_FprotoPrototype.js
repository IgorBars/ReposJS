/* JawaScript - 6_ownPropertyDescr_FPrototype_FprotoPrototype 
- свойство "prototype" функции-конструктора

Так само, як можна вручну призначити об'єкту obj (який від створення має прототип Object.prototype) за допомогою аксесора
__proto__ "проміжний" об'єкт-прототип (проміжний між obj і Object.prototype у ланцюжку прототипів) -
так само при створенні об'єкту obj ф-єю-конструктором new F() йому призначається "проміжний" об'єкт-прототип ф-ії-конструктора 
{ constructor: F } (проміжний між obj і Object.prototype у ланцюжку прототипів). Різниця цих "проміжних" об'єктів-прототипів
у тому, що прототип ф-ії-конструктора { constructor: F } має властивість constructor, яка має значення " F " (ф-я-конструктор)

При створенні об'єкту obj ф-єю-конструктором new F() створюваний об'єкт obj отримує від конструктора приховану властивість 
[[Prototype]]: { constructor: F }, отримати доступ до якої можна через аксесор __proto__ (прописаний у Object.prototype).
Тобто   F.prototype.constructor = F
    obj.__proto__.constructor = F   (через знайдений у Object.prototype аксесор __proto__)
    (obj.constructor == F  - властивість знайдена у прототипі ф-ії-конструктора { constructor: F } пошуком у ланцюжку прототипів

После создания об'ьекта ф-ей-конструктором new F() ее свойство F.prototype может измениться (указьівать на другой 
об'ьект-прототип, а не родной, присвоенньій по умолчанию),  и новые объекты, созданные с помощью new F(),
будут иметь уже другой объект в скрьітом свойстве [[Prototype]], но ранее созданньіе объекты сохранят 
в качестве прототипа родной об'ьект-прототип (так как они при создании получили прото-ссьілку на него).

*/
'use strict';

alert("Start 6_ownPropertyDescr_FPrototype_FprotoPrototype");

let bird = {  // при призначенні як прототипу замінює прототип за замовчуванням { constructor: Animal }
  fly: true
};


function Animal(name) {
  this.name = name;
}


let descriptors = Object.getOwnPropertyDescriptors(Animal);
alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "length":{
        "value": 1,
        "writable": false,
        "enumerable": false,
        "configurable": true
    },
    "name":{
        "value": "Animal",
        "writable": false,
        "enumerable": false,
        "configurable": true
    },
    "prototype":{
        "value": {},                    // без назви { constructor: F } - не відображається
        "writable": true,
        "enumerable": false,
        "configurable": false
    }
}
*/


Animal.prototype = bird;



//При виклику ф-ії-конструктора з оператором new прототип конструктора Animal призначається прототипом створюваного об'єкта
let eagl = new Animal("White Eagl"); //  eagl.[[Rrototype]] = bird 

descriptors = Object.getOwnPropertyDescriptors(Animal);
alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "length":{
        "value": 1,
        "writable": false,
        "enumerable": false,
        "configurable": true
    },
    "name":{
        "value": "Animal",
        "writable": false,
        "enumerable": false,
        "configurable": true
    },
    "prototype":{
        "value": {fly: true},                    // bird - призначений прототип
        "writable": true,
        "enumerable": false,
        "configurable": false
    }
}
*/

descriptors = Object.getOwnPropertyDescriptors(eagl);
alert(JSON.stringify(descriptors, null, 2));
/* дескриптор свойств:
{
    "name":{
        "value": "White Eagl",
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}                                               // прихована властивість [[Rrototype]]: bird не відображається
*/

alert(eagl.__proto__);        // [object Object]
alert(eagl.__proto__.fly);    // true               (геттер аксесора __proto__ із Object.prototype працює)


alert("End");

