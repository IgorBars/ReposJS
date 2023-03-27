/* JawaScript - 1_protectPreficsGetSet_privateProtectedPMClass

В терминах ООП отделение внутреннего интерфейса от внешнего называется ИНКАПСУЛЯЦИЯ.

                        ЗАХИЩЕНІСТЬ ЗА ДОМОВЛЕНІСТЮ полів (властивостей і методів)
Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка. 
Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.

Это не синтаксис языка: есть хорошо известное соглашение между программистами, что такие свойства и методы 
не должны быть доступны извне. Большинство программистов следуют этому соглашению.

Реалізація:     добавляємо get-set-аксесор доступу до "захищеного" поля (у дан вип - властивості)
*/
'use strict';

alert("Start 1_protectPreficsGetSet_privateProtectedPMClass"); // ЗАПУСК У КОНСОЛІ ІНСТРУМЕНТІВ


class CoffeeMachine {
    _waterAmount = 0; // Властивості, які ініціюються без вхідних параметрів (або 0) - поміщають за межами constructor.

    set waterAmount(value) {                                            // set-тер аксесора waterAmount
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    get waterAmount() {                                            // get-тер аксесора waterAmount
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
// В конструктор поміщають зазвичай властивості, що можуть мати різноманітні вхідні значення параметра при створенні об'єкту
// Властивості, які ініціюються без вхідних параметрів (або 0) - поміщають за межами constructor.
}

// создаём новую кофеварку потужністю 100
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = 200; // (звертаємось до аксесора як до звичайної властивості)
// coffeeMachine.waterAmount = -10; // Uncaught Error: Отрицательное количество воды
  


alert("End");
