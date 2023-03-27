/* JawaScript - for_in_NasledPrototype 
- Прототипы и наследование
Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
*/
'use strict';
alert("Start for_in_NasledPrototype");

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // Object.keys возвращает только собственные ключи
  alert(Object.keys(rabbit)); // jumps
  
  // for..in проходит и по своим, и по унаследованным ключам
  for(let prop in rabbit) alert(prop); // jumps, затем eats

alert("End");

