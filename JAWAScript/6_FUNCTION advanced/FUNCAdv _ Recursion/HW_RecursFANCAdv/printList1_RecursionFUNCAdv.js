/* JawaScript - Напишите функцию printList(list), 
которая выводит элементы списка по одному, с использованием цикла и через рекурсию.
 */
'use strict';

alert("Start printList1_RecursionFUNCAdv");

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: {
              value: 6,
              next: null
            }
          }
        }
      }
    }
  };

// function printList(obj) {
//     while(obj) {                 // пока obj != null
//         alert (obj.value);
//         obj = obj.next;
//     }
// }
// printList(list);

function printListR(obj) {
    alert (obj.value);
    if (obj.next) printListR(obj.next);
    return;
}
printListR(list);



alert("End");
