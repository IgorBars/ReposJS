/* JawaScript - Рекурсия и стек | Зв'язаний список */
'use strict';

alert("Start _ConnectedList_FUNCAdvRec");


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

let list2 = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };



alert("End");
