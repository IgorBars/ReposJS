/* JawaScript - PromiseResolve_PromiseAll_PromisyAPI
Превратим об'ьектьі в промисьі с пом Promise.resolve
*/
'use strict';

alert("Start PromiseResolve_PromiseAll_PromisyAPI"); // отсебятина


let names = [
  'Artem',
  'Tom',
  'Seyla'
];

// Преобразуем каждый елемент в промис c объектом (имитация получения от сервера)
let objects = names.map( name => Promise.resolve({"name": name, "age": 30}) );    // масив промісів (синтетично Promise.resolve)

// добавим еще один объект
objects.push( Promise.resolve( {"name": "Deyl", "age": 40} ) );

// Обработаем обь'ект из массива как промис с пом then
objects[0]
  .then(
    obj => alert(`${obj.name}: ${obj.age}`)
  );

// обробляємо декілька промісів за допомогою Promise.all:
Promise.all(objects)
  .then(objs => objs.forEach(
    obj => alert(`${obj.name}: ${obj.age}`)
  ));


alert("End");

