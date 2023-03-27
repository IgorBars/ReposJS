/* JawaScript - 5_SymbolIterator_generator_GeneratorGnrtr
Перебираемый объект с итератором-генератором
(реализация итератора: итератор-герератор)
*/
'use strict';
alert("Start 5_SymbolIterator_generator_GeneratorGnrtr");


let range = {             // Перебираемый объект с генератором для итерации
  from: 1,
  to: 10,

  *[Symbol.iterator]() {  // запись для декларации генераторного метода-итератора *[Symbol.iterator] <=> function* ХХХ()
                          // тепер він повертає генератор (з методом next() который возвращает значения в виде {value: ..., done: true/false})
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
  }
};

//...range расшаривает перебираемый объект range в список элементов
alert( [...range] );       // 1,2,3,4,5,6,7,8,9,10  ( [1,2,3,4,5,6,7,8,9,10] )

//  При обращении к об'ьекту range (напр. из-под for..of) функция-генератор *[Symbol.iterator]() возвращает генератор
// и его методы – в точности то, что ожидает for..of:

alert("End");

