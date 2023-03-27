/* JawaScript - 5_privatProp_privateProtectedPMClass

                            Приватное свойство #waterLimit
Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.
    На уровне языка # является специальным символом, который означает, что поле приватное. 
    Мы не можем получить к нему доступ извне или из наследуемых классов.
*/
'use strict';

alert("Start 5_privatProp_privateProtectedPMClass");

class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }
}

let coffeeMachine = new CoffeeMachine();

            // снаружи  нет доступа к приватным свойствам и методам класса #waterLimit и #checkWater:                !!!

  // coffeeMachine.#checkWater();        // Error  (звертаємося до приватної властивості #waterLimit)
  // coffeeMachine.#waterLimit = 1000;   // Error  (звертаємося до приватної властивості #waterLimit)


            // Також приватні методи і властивості класу #waterLimit и #checkWater не наслідуються:                   !!!

class MegaMachine extends CoffeeMachine {

  set waterAmountProto(value) {
      // this.#waterLimit = value;       // Error  (звертаємося до приватної властивості #waterLimit)
  }
  get waterAmountProto() {
      // return this.#waterLimit;        // Error  (звертаємося до приватної властивості #waterLimit)
  }
}

let megaMachine = new MegaMachine();
megaMachine.waterAmountProto = 150;
alert(megaMachine.waterAmountProto);

alert("End");

// Приватные поля имеют префикс #. JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.