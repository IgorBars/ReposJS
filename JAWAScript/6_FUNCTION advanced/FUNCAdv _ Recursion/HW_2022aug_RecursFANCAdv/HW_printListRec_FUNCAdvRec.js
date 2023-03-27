/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя (цикл и) рекурсию.
*/
'use strict';

alert("Start HW_printListRec_FUNCAdvRec");

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

function printListRec(li) {
    alert( li.value ); 

    if ( li.next ) {

        printListRec(li.next); //   без return !!!
    }
}

printListRec(list);   // 


alert("End");
