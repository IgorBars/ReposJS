/* JawaScript - Рекурсия и стек | Зв'язаний список 

(Напишите функцию printList(list), которая выводит элементы списка по одному.)
(Сделайте два варианта решения: используя цикл (и через рекурсию).)

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
*/
'use strict';

alert("Start HW_printListCircleRevers_FUNCAdvRec");

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

function printListCircleRevers(li) {

    let arr = [];

    while (li) {

      arr.unshift(li);

      li = li.next;
    };

    for(let el of arr) alert( el.value );
}

printListCircleRevers(list);   // 


alert("End");
