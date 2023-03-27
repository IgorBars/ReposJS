/* JawaScript - 6_privatPropGetSet_privateProtectedPMClass

                            Приватное свойство #waterAmount
Приватные поля не конфликтуют с публичными. У нас может быть два поля одновременно – приватное #waterAmount 
и публичное waterAmount. (Для удобства получения значения публичньім и затем записи в приватное, а по сути - одно поле)
*/
'use strict';

alert("Start 6_privatPropGetSet_privateProtectedPMClass");

class CoffeeMachine {

    wamount = 0;
    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      this.#waterAmount = value;
    }

    get amount() {
        this.wamount = this.#waterAmount;   // доступ до приватної властивості #waterAmount зсередини класу
        return this.wamount;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.waterAmount);      // 100     (доступ до приватної властивості #waterAmount зсередини класу через аксесор waterAmount)
// alert(machine.#waterAmount); // Error    (немає доступу зовні до приватної властивості #waterAmount)

alert(machine.amount);          // 100      (доступ до приватної властивості #waterAmount зсередини класу через метод amount)


alert("End");

