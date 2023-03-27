/* JawaScript - 1_userPrototype_FprotoPrototype 
- свойство "prototype" функции-конструктора

Так само, як можна вручну призначити об'єкту obj (який від створення має прототип Object.prototype) за допомогою
аксесора __proto__ "проміжний" об'єкт-прототип (проміжний між obj і Object.prototype у ланцюжку прототипів) -
так само при створенні об'єкту obj ф-єю-конструктором new F() йому призначається "проміжний" об'єкт-прототип ф-ії-конструктора 
{ constructor: F } (проміжний між obj і Object.prototype у ланцюжку прототипів). Різниця цих "проміжних" об'єктів-прототипів
у тому, що прототип ф-ії-конструктора { constructor: F } має властивість constructor, яка має значення " F " (ф-я-конструктор)

При створенні об'єкту obj ф-єю-конструктором new F() створюваний об'єкт отримує від конструктора приховану властивість 
( [[Prototype]] ) із значенням { constructor: F }, тобто  obj.__proto__: { constructor: F }
Тобто   F.prototype.constructor = F
        obj.__proto__.constructor == F        (доступ до властивості constructor напряму через аксесор __proto__)
        obj.constructor == F       - значення властивості constructor отримується по ланцюжку із прототипу { constructor: F }

После создания об'ьекта ф-ей-конструктором new F() ее свойство F.prototype может измениться (указьівать на другой 
об'ьект-прототип, а не родной, присвоенньій по умолчанию),  и новые объекты, созданные с помощью new F(),
 будут иметь уже другой объект в скрьітом свойстве ( [[Prototype]] - доступ через аксессор __proto__), но ранее созданньіе 
 объекты сохранят в качестве прототипа родной об'ьект-прототип (так как они при создании получили прото-ссьілку на него).

*/
'use strict';

alert("Start 1_userPrototype_FprotoPrototype");

let bird = {  // при призначенні як прототипу замінює прототип за замовчуванням { constructor: Animal }
  constructor: Animal,  // (важливо не загубити властивість прототипу за замовчуванням: constructor: Animal
  fly: true
};

let fish = {
  constructor: Animal,
  fly: false
};

function Animal(name) {
  this.name = name;
}
//Для ф-ї-конструктора new Animal() прототип визначає звичайна властивість .prototype (як властивість об'єкту Animal)
Animal.prototype = bird;

//При виклику ф-ії-конструктора з оператором new прототип конструктора Animal призначається прототипом створюваного об'єкта
let eagl = new Animal("White Eagl"); //  eagl.__proto__ = bird 
alert(eagl.__proto__.fly);  //  true  

Animal.prototype = fish;
let shark = new Animal("White Shark"); //  shark.__proto__ = fish (це виконує оператор new)

alert( eagl.fly ); // true    (читає властивість із назначеного прототипу bird)
alert( shark.fly ); // false  (читає властивість із назначеного прототипу fish)

alert("End");

