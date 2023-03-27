/* JawaScript - _GeneratorGnrtr
Создайте прокси, который реализовывал бы возможность получать элементы массива,
 используя отрицательные индексы, отсчитываемые с конца.
 Другими словами, array[-N] – это то же, что и array[array.length - N].

 // вся остальная функциональность массивов должна остаться без изменений
*/
'use strict';

alert("Start HW_array_РазноеProxy");


let array = [11, 22, 33, 44];

array = new Proxy(array, {

  get(target, prop, receiver) {
    
    if (prop < -target.length || prop > target.length - 1) return "Нет такого индекса";

    if (prop < 0) {
      prop = +prop + target.length;    
    }
    return Reflect.get(target, prop, receiver);
  }
});

alert( array[-5] ); // Нет такого индекса   (-5 < -array.length)

alert( array[-1] ); // 44
alert( array[-2] ); // 33


alert( array[4] ); // Нет такого индекса   (4 > array.length - 1)

alert("End");

