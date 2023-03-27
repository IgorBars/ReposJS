/* JawaScript - 4_SymbolIterator_GeneratorGnrtr
(реализация итератора: метод Symbol.iterator)
*/
'use strict';

alert("Start 4_SymbolIterator_GeneratorGnrtr");


let range = {
    from: 1,
    to: 5,
  
    // for..of range вызывает этот метод один раз в самом начале
    [Symbol.iterator]() {                                                               // метод-ітератор (функція-ітератор)
      // ...он возвращает перебираемый объект:
      // далее for..of работает только с этим объектом, запрашивая следующие значения
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается при каждой итерации цикла for..of
        next() {
          // нужно вернуть значение как объект {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
};

// при переборе объекта range будут выведены числа от range.from до range.to
alert([...range]); // 1,2,3,4,5



alert("End");

