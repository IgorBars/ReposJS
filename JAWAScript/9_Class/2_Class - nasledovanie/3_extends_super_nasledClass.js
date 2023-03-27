/* JawaScript - 3_extends_super_nasledClass 
                                 КЛЮЧОВЕ СЛОВО  SUPER
 -викликає метод прототипу "як є"
*/                      
'use strict';
alert("Start 3_extends_super_nasledClass");

class Animal {                           // плануємо як клас-прототип
  constructor(name) {                   // constructor завжди тільки один у класі-прототипі
    this.name = name;
    this.speed = 0;
  }

  run(val) {
    this.speed = val;
    alert(`${this.name} має швидкість ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} стоїть.`);
  }
}


class Rabbit extends Animal {       // extends встановлює прототип класу Animal для класу-наслідника Rabbit
  hide() {
    // this.stop();                   // викликаємо метод прототипу (також працює)
    super.stop();                      // викликаємо метод прототипу
    alert(`${this.name} сховався.`);
  }
}

let whiteRabbit = new Rabbit("WhiteRabbit");

whiteRabbit.run(40);                // MyAnimal має швидкість 40
whiteRabbit.hide();                 // WhiteRabbit стоїть.  WhiteRabbit сховався.


alert("End");

