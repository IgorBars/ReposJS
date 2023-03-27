/* JawaScript - 7_nasledPrivatProp_privateProtectedPMClass
                                    Приватное свойство  #waterAmount
Но если мы унаследуем от CoffeeMachine, то мы не получим прямого доступа к #waterAmount. ( Взагалі ніякого доступу! )
Мы будем вынуждены полагаться на геттер/сеттер waterAmount: (???)
 */
'use strict';
alert("Start 7_nasledPrivatProp_privateProtectedPMClass"); 


class CoffeeMachine {
    #waterAmount = 0;                  // приватна властивість
    constructor() {
    }

    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      this.#waterAmount = value;
    }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.waterAmount = 200;
alert(coffeeMachine.waterAmount);  // 200
alert(Object.getOwnPropertyNames(coffeeMachine));                // приватна властивість #waterAmount невидима в об'єкті
alert(Object.getOwnPropertyNames(CoffeeMachine.prototype));      // constructor,waterAmount



class MegaMachine extends CoffeeMachine {
    constructor() {
        super();
    }
    method() {
        // alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
    }

    set waterAmountProto(value) {
        // this.#waterAmount = value;     // Error (немає доступу до приватної властивості #waterAmount)
    }
    get waterAmountProto() {
        // return this.#waterAmount;     // Error (немає доступу до приватної властивості #waterAmount)
    }
}

let megaMachine = new MegaMachine();

megaMachine.waterAmountProto = 200;
alert(megaMachine.waterAmountProto);            // 
alert(Object.getOwnPropertyNames(megaMachine)); // 
alert(Object.getOwnPropertyNames(MegaMachine.prototype)); // constructor,method,waterAmountProto

alert("End");

