/* JawaScript - ArrayFrom_IterObj_DateIterObj

Array.from(obj[, mapFn, thisArg])
*/
'use strict';

alert("Start ArrayFrom_IterObj_DateIterObj");

let range = {
    from: 1,
    to: 5
};     // <= итерируемьій об'ект благодаря свойству Symbol.iterator

range[Symbol.iterator] = function() {

    return {
      current: this.from,
      last: this.to,

      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }; // объект
        } else {
          return { done: true };                        // объект
        }
      }
    };
};

// Array.from(obj[, mapFn, thisArg]) -- МЕТОД СОЗДАНИЯ МАССИВА ИЗ ИТЕРИРУЕМОГО ОБЪЕКТА или псевдомассива
let arr = Array.from(range, num => num * num);

alert(arr);               // 1,4,9,16,25

alert( arr.pop() );       // 25                 РАБОТАЕТ метод массивов на массиве arr, созданном из итерируемого об'екта range

alert("End");
