/* JawaScript - внешний "контролируемый" вызов метода Symbol.iterator */
'use strict';

alert("Start CollIterator_DateIterObj");


let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();  // обращаемся к свойству строки str    Symbol.iterator, и получаем об'ьект iterator

while (true) {
  let result = iterator.next(); // в отсутствии forОf вручную обращаемся к методу iterator-а
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}



alert("End");
