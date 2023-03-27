/* JawaScript - 5_extends_super_myConstructor_nasledClass 
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
alert("Start 5_extends_super_myConstructor_nasledClass");

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
// ...
}

class Rabbit extends Animal {
    constructor(name, earLength) {  // добавляємо свої параметри у область параметрів
      super(name);                  // маємо вказати на constructor об'єкту-прототипу через super(name)
      this.earLength = earLength;   // Чтобы конструктор Rabbit работал, он должен вызвать super() до того, как использовать this
}

// ...
}

// теперь работает
let rabbit = new Rabbit("Белый кролик", 10);
alert(rabbit.name);                // Белый кролик
alert(rabbit.earLength);           // 10
alert("End");

