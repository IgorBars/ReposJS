/* JawaScript - метод Symbol.iterator, превращающий объекты в итерируемые */
'use strict';

alert("Start _IterationObject_DateIterObj");

let range = {
    from: 1,
    to: 5
  };
// сделаем неитерируемый объект range итерируемым с помощью Symbol.iterator


  // 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() вызывается на каждой итерации цикла for..of
      next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
          }
      }
    };
  };
  
  // теперь работает!
  for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
  }

// Array.from  МЕТОД СОЗДАНИЯ МАССИВА ИЗ ИТЕРИРУЕМОГО ОБЪЕКТА или псевдомассива

let arr = Array.from(range);

alert("arr[0]: " + arr[0]); //  1
alert("arr[1]: " + arr[1]); //  2



alert("End");
