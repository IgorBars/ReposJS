/* JawaScript - 2_protectOnlyRead_privateProtectedPMClass

                        ЗАХИЩЕНІСТЬ ЗА ДОМОВЛЕНІСТЮ полів (властивостей і методів)
Защищённые свойства обычно начинаются с префикса _.

Это не синтаксис языка: есть хорошо известное соглашение между программистами, что такие свойства и методы 
не должны быть доступны извне. Большинство программистов следуют этому соглашению.

Реалізація:     добавляємо get-set-аксесор доступу до "захищеного" поля (у дан вип - властивості)

                            Свойство только для чтения «power»
*/
'use strict';

alert("Start 2_protectOnlyRead_privateProtectedPMClass"); // ЗАПУСК У КОНСОЛІ ІНСТРУМЕНТІВ


class CoffeeMachine {
  // ...

  constructor(power) {       // запис значення constructor-ром тільки в момент створення об'єкту
    this._power = power;
  }

  get power() {               // тільки  get-тер waterAmount
    return this._power;       // отже без можливості запису значення
  }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

alert(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

coffeeMachine.power = 25; // Uncaught TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter
  


alert("End");

