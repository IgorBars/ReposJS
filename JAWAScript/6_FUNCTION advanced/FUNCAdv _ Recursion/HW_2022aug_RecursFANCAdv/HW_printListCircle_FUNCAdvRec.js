/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл (и через рекурсию).
*/
'use strict';

alert("Start HW_printListCircle_FUNCAdvRec");

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(li) {

    while (li) {

      alert( li.value );

      li = li.next;
    };
}

printList(list);   // 


alert("End");
