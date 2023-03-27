/* JawaScript - 3_funcSetGet_privateProtectedPMClass

В большинстве случаев использование функций get.../set... предпочтительнее:
*/
'use strict';

alert("Start 3_funcSetGet_privateProtectedPMClass");


class CoffeeMachine {
    _waterAmount = 0;

    setwaterAmount(value) {                           // set - просто название для наглядности
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    getwaterAmount() {                               // getwaterAmount - функція-"геттер"
      return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine();
  
coffeeMachine.setwaterAmount(120); 
alert( coffeeMachine.getwaterAmount() );                     // 120

alert(Object.getOwnPropertyNames(coffeeMachine));            // _waterAmount



alert(Object.getOwnPropertyNames(CoffeeMachine.prototype)); // constructor,setwaterAmount,getwaterAmount


  // устанавливаем количество воды
//   coffeeMachine.setwaterAmount = -10; // Error: 

alert("End");

