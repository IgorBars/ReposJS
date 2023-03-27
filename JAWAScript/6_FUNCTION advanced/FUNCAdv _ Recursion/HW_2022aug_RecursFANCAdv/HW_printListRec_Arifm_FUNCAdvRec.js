/* JawaScript - Рекурсия и стек | Зв'язаний список 

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя (цикл и) рекурсию.
*/
'use strict';

alert("Start HW_printListRec_Arifm_FUNCAdvRec");

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

function printListRec(li, res) {
    res += li.value;
    alert( li.value );

    if ( li.next ) {
        
        return printListRec(li.next, res);
    }

    return res;
}

alert( printListRec(list, 0) );   // 10     (1 + 2 + 3 + 4)


alert("End");
