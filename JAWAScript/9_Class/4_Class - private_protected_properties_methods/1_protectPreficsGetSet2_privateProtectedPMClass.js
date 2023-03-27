/* JawaScript - 1_protectPreficsGetSet2_privateProtectedPMClass

Защищенное по "договоренности" свойство _waterAmount
(с помощью сеттера/геттера)

Договорились: обращаемся к защищенному полю  только 
из его класса и классов, унаследованных от него.
*/
'use strict';

alert("Start 1_protectPreficsGetSet2_privateProtectedPMClass");

class CoffeeMachine {
    _waterAmount = 0; //Защищено с помощью сеттера/геттера
                      //Договорились: обращаемся к защищенному полю  только 
                      //из его класса и классов, унаследованных от него.
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // создаём новую кофеварку
  let coffeeMachine = new CoffeeMachine(100);
  
  // устанавливаем количество воды
//   coffeeMachine.waterAmount = -10;             // Error: 
coffeeMachine.waterAmount = 120; 
alert(coffeeMachine.waterAmount);                 // 120



alert(Object.getOwnPropertyNames(coffeeMachine)); //_waterAmount,_power 

// (методи об'єкту, створеного класом зберігаються у CoffeeMachine.prototype)
alert(Object.getOwnPropertyNames(CoffeeMachine.prototype)); // constructor,waterAmount


alert("End");

