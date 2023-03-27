/* JawaScript - Transformation  Object.entries - Object.fromEntries  - TransfObject_DateObjKeys*/
// Трансформации объекта
// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

'use strict';

alert("Start TransfObject_DateObjKeys");

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  alert("doublePrices.meat: " + doublePrices.meat); // 8


alert("End");
