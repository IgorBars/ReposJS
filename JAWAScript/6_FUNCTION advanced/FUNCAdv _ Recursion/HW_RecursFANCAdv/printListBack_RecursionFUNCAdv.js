/* JawaScript - Напишите функцию printList(list), 
которая выводит элементы списка по одному в обратном порядке,
с использованием цикла и через рекурсию.
 */
'use strict';

alert("Start printListBack_RecursionFUNCAdv");

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

// function printListAr(obj) {
//     let arr = [];
   
//     while (obj) {

//         arr.unshift(obj.value);
//         obj = obj.next;
//     }

//     for(let char of arr) alert(char);
// }
// printListAr(list);

function printListRec(obj) {

    if(obj.next) ; printListRec(obj.next);

    alert("Result: " + obj.value);
}
printListRec(list)



alert("End");
