/* JawaScript - 5_nasledStatMeth_statSvojstvaClass 

                        СТАТИЧНІ ВЛАСТИВОСТІ І МЕТОДИ так само наслідуються
Статичні методи і властивості класу при наслідуванні поводяться як мет/вл звичайних об'єктів і зберігаються у 
об'єктах-класах
*/
'use strict';
alert("Start 5_nasledStatMeth_statSvojstvaClass");

class Animal {
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {                                    // метод (добавлення) отримання швидкості у класі-прототипі
      this.speed += speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {                  // СТАТИЧНИЙ метод реалізації порівняння для sort у класі-прототипі
      return animalA.speed - animalB.speed;             // (зберігається у об'єкті-класі Animal, бо статичний)
    }
}

class Rabbit extends Animal {                         // Наследует от Animal (у тому числі статичні методи)
    hide() {
      alert(`${this.name} прячется!`);
    }
}



let rabbits = [
    new Rabbit("Белый кролик", 10),                     // об'єкти класу-наслідника
    new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare); // працює СТАТИЧНИЙ метод compare з-під класу-наслідника Rabbit, знайдений у об'єкті-класі Animal

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5 (відсортовано по властивості speed).



// Тобто extends не тільки встановлює посилання    Rabbit.prototype => Animal.prototype 
//                            (запозичення методів через наслідування прототипів класів), але

//  ще й посилання    Rabbit.[[Prototype]] => Animal.[[Prototype]] 
//                          (запозичення СТАТИЧНИХ методів через наслідування самих класів як об'єктів)


// Тому, унаслідувавши клас Rabbit від Object, отримуємо всі статичні методи Rabbit тепер у класі Rabbit:

class Rabbit extends Object {}
// обычно мы вызываем Object.getOwnPropertyNames
alert( Rabbit.getOwnPropertyNames({a: 1, b: 2}) ); // a,b



alert("End");

