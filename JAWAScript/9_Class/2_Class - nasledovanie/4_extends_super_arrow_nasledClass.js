/* JawaScript - 4_extends_super_arrow_nasledClass 
                              SUPER І СТРІЛКОВА ФУНКЦІЯ
-У стрелочных функций нет super
-При обращении к super стрелочной функции он берётся из внешней функции:
*/
'use strict';
alert("Start 4_extends_super_arrow_nasledClass");

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


class Rabbit extends Animal {           // extends встановлює прототип класу Animal для класу-наслідника Rabbit
    stop() {                            // Пропишемо "свій" метод об'єкту stop
    setTimeout(() => super.stop(), 2000); // стрілка не має super, але вона бере його зовні (зовнішній stop має this: super) 
    alert(`${this.name} сховався.`);
  }
}

let whiteRabbit = new Rabbit("WhiteRabbit");

whiteRabbit.run(40);                // MyAnimal має швидкість 40
whiteRabbit.stop();                 // WhiteRabbit сховався.    - через 2с: WhiteRabbit стоїть.

// stop() {setTimeout(() => this.stop(), 2000);} - працює як setInterval
alert("End");

