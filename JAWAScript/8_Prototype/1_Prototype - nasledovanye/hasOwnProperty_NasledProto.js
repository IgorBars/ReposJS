/* JawaScript - hasOwnProperty_NasledProto 
- Прототипы и наследование
Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key):
 он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.
*/
'use strict';
alert("Start hasOwnProperty_NasledProto");

let animal = {
    eats: true
};
  
let rabbit = {
    jumps: true,
    __proto__: animal
};
  
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
}

alert("End");

