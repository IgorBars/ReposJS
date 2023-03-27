/* JawaScript - 6_extends_super_myConstructor_Svojstvo_nasledClass 
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
Поле класса инициализируется:
    -Перед конструктором для базового класса (который ничего не расширяет)  (myFeld;)
    -Сразу после super(name) для производного класса    (this.earLength = earLength;)
*/
'use strict';
alert("Start 6_extends_super_myConstructor_Svojstvo_nasledClass");

class Animal {
    name = 'animal';
  
    constructor() {          // батьківський constructor навіть у похідних класах використовує рідні поля
      alert(this.name);      // (*) 
    }
}

class Rabbit extends Animal {
    // якщо не перевизначити constructor, у це місце JS прописує рідний constructor, який використовує рідне поле name
    name = 'rabbit'; // Тут, клас Rabbit розширяє Animal і перевизначає поле name своїм власним значенням,
}                    // але до перевизначеного поля name = 'rabbit' черга не дохлдить

new Animal(); // animal
new Rabbit(); // animal



alert("End");

