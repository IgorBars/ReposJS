/* JawaScript - Напишите функцию printList(list), 
которая выводит элементы списка по одному, с использованием цикла и через рекурсию.
 */
'use strict';

alert("Start printList_RecursionFUNCAdv");

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

// function printList(list) {

//     let temp = list;
//     while (temp) { 
//         alert(temp.value);
//         temp = temp.next;
//     }  
// }
// printList(list);

function printListR(list) {

    alert(list.value)

    if (list.next) printListR(list.next);
}
printListR(list);

alert("End");
