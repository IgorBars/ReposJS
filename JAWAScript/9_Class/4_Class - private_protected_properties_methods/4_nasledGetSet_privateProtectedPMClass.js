/* JawaScript - 4_nasledGetSet_privateProtectedPMClass

Если мы унаследуем class MegaMachine extends CoffeeMachine, ничто не помешает нам обращаться 
к наследуемому свойству this._waterAmount из методов нового класса. 

Таким образом, защищённые поля и get-set-терьі (в отличие от приватных полей) наследуются через прототипьі класов:
 MegaMachine.prototype => CoffeeMachine.prototype */
'use strict';
alert("Start 4_nasledGetSet_privateProtectedPMClass"); 


class CoffeeMachine {
    constructor() {
        this._waterAmount = 0;
    }
  
    set waterAmount(value) {                // аксесор waterAmount, насдідуємо у MegaMachine
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.waterAmount = 200;
alert(coffeeMachine.waterAmount);   // 200
alert(Object.getOwnPropertyNames(CoffeeMachine.prototype)); // constructor,waterAmount


class MegaMachine extends CoffeeMachine {   // унаслідувана властивість _waterAmount і аксесор waterAmount
    constructor() {
        super();
        this._waterAmountMega = 0;
    }

    set waterAmountProto(value) {
        this.waterAmount = value;           // звертаємося до унаслідуваного аксесора waterAmount
    }
    get waterAmountProto() {
        return this.waterAmount;
    }
}

let megaMachine = new MegaMachine();

megaMachine.waterAmountProto = 200;
// megaMachine.waterAmountProto = -200;     // Error    (унаслідуваний аксесор waterAmount викинув помилку)
alert(megaMachine.waterAmountProto);        // 200
alert(Object.getOwnPropertyNames(MegaMachine.prototype)); // constructor,waterAmountProto

alert("End");

