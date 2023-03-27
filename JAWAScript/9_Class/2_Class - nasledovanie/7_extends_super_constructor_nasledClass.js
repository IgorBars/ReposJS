/* JawaScript - 7_extends_super_constructor_nasledClass 
                              SUPER В CONSTRUCTOR
Переопределение конструктора об'єкта-наслідника.
Перевизначення полів об'єкта-наслідника.

Согласно спецификации, если класс расширяет другой класс и не имеет конструктора, 
то автоматически создаётся такой «пустой» конструктор:

class Rabbit extends Animal {
  constructor(...args) {            // генерируется для классов-потомков, у которых нет своего конструктора
    super(...args);
  }
}
*/
'use strict';
alert("Start 7_extends_super_constructor_nasledClass");

class Animal {
    constructor(name) {
      this.name = name;
      alert(this.name);
    }
}

class Rabbit extends Animal {
    constructor(name) {    // Перевизначаємо constructor
      super(name);         // -тепер перевизначений constructor правильно відобразить перевизначене поле name
    }
}

new Animal("Animal"); // Animal
new Rabbit("Rabbit"); // Rabbit


alert("End");

