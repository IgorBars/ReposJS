/* JawaScript - проверка идеи стирания инф в weakMap после уничтожения
объекта, который является ключом к этой инф*/
'use strict';

alert("Start weakMap_WeakMapSet");

let john = { name: "John" };

let array = [ john ];

john = null;

alert("array[0].name:  " + array[0].name);      // John !!!
// при уничтожении ссылки на объект, находящейся в массиве - 
                            //  объект доступен из массива по индексу элемента !!!

                            
let ann = { name: "Ann" };

let countVisit;

let weakMap = new WeakMap();

weakMap.set(ann, countVisit);

alert(`Данные в weakMap по ключу ann:  ${weakMap.has(ann)}`);   // true

alert(`countVisit weakMap vor func = ${weakMap.get(ann)}`); //undefined  - лічильник порожній

function counter(user) {                        // лічильник
    let count = weakMap.get(user) || 0;
    alert(`count func: ${count}`);
    count++;
    alert(`count++ func: ${count}`);
    return weakMap.set(user, count);
}

counter(ann);

alert(`countVisit weakMap nach func = ${weakMap.get(ann)}`);    // 1
counter(ann);

alert(`countVisit weakMap nach 2 func = ${weakMap.get(ann)}`);  // 2

ann = null;
alert(`Данные в weakMap по ключу ann после уничт ann:  ${weakMap.has(ann)}`);   // false


alert("End");
