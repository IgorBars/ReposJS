/* JawaScript - 2_extendsExpression_nasledClass 
                    РОЗШИРЯЕМОСЯ ВІД    function Fly{return class {...}}
*/
'use strict';

alert("Start 2_extendsExpression_nasledClass");

function Fly(val) {                           // функція-констр для добавлення класу-прототипу з необхідними плюшками-методами
    return class {                            // клас-констр з необхідними плюшками-методами для добавлення як клас-прототип
        constructor(name) {                   // constructor завжди тільки один у класі-прототипі
            this.name = name;
            this.speed = 0;
        }
        setfly() {                    // необхідні нові загальні методи для класу-наслідника Animal (з параметрами у extends)
            this.flying = val;
            alert(`${this.name} is flying: ${this.flying}!!!`);
        }
        speedfly(val) {   // необхідні нові унікальні методи-плюшки для класу-наслідника Animal (з оперативними параметрами)
            this.flying = val;
            alert(`${this.name} flying ${this.flying}!!!`);
        }
    };
}

class Animal extends Fly(true) {
  run(val) {
    this.speed = val;                                  // буде створена властивість об'єкта "нальоту"
    alert(`${this.name} має швидкість ${this.speed}`);
  }
}

let myAnimal = new Animal("MyAnimal");

alert(myAnimal.name);                   // MyAnimal                      (із constructor класу-прототипу)
myAnimal.run(25);                       // MyAnimal має швидкість 25
myAnimal.setfly();                      // WhiteRabbit  is flying: true!!!      (необхідні нові методи)
myAnimal.speedfly(40);                  // WhiteRabbit flying 40!!!      (необхідні нові методи)

// Это может быть полезно для продвинутых приёмов проектирования, где мы можем использовать функции для генерации классов 
// в зависимости от многих условий и затем наследовать их.

alert("End");