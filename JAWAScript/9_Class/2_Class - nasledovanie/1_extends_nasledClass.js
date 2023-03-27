/* JawaScript - 1_extends_nasledClass 

*/
'use strict';
alert("Start 1_extends_nasledClass");

class Animal {                                // плануємо як клас-прототип
  speed = 0;
  constructor(name) {                        // constructor завжди тільки один у класі-прототипі
    this.name = name;
  }
// В конструктор поміщають зазвичай властивості, що можуть мати різноманітні вхідні значення параметра при створенні об'єкту
// Властивості, які ініціюються без вхідних параметрів (або 0) - поміщають за межами constructor.
  run(val) {
    this.speed = val;
    alert(`${this.name} має швидкість ${this.speed}`);
  }
}

let myAnimal = new Animal("MyAnimal");
myAnimal.run(25);                             // MyAnimal має швидкість 25
alert(Object.getOwnPropertyNames(myAnimal));  // speed,name

class Rabbit extends Animal {                // extends встановлює прототип класу Animal для класу-наслідника Rabbit
  sleep(val) {
    this.sleeping = val;
    alert(`${this.name} спить: ${this.sleeping}`);
  }
}

let whiteRabbit = new Rabbit("WhiteRabbit");

whiteRabbit.sleep(true);                   // WhiteRabbit спить: true
whiteRabbit.run(40);                       // WhiteRabbit має швидкість 40
alert(Object.getOwnPropertyNames(whiteRabbit));  // speed,name,sleeping

// Rabbit.prototype.[[Prototype]]: Animal.prototype       (через аксесор: Rabbit.prototype.__proto__: Animal.prototype)

alert("End");

