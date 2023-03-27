/* JawaScript - Transformation Object.entries_fromEntries - Date*/
// Трансформации объекта
// У объектов нет множества методов, которые есть в массивах, например map, filter и других.

// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:

// Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// На нём вызываем методы массива, например, map.
// Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.

'use strict';

alert("Start TransfObject1_DateObjKeys");

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
for(let values of Object.values(prices)) {
    alert(values);
}

// let arr_entries = Object.entries(prices);
// let arr_double_entries = arr_entries.map(([key, value]) => ([key, value *= 2]));
// let doublePrices = Object.fromEntries(arr_double_entries);


let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value *= 2])
);


for(let values of Object.values(doublePrices)) {
    alert(values);
}
for(let [key, value] of Object.entries(doublePrices)) {
    alert(key + ": " + value);
}

alert("End");
