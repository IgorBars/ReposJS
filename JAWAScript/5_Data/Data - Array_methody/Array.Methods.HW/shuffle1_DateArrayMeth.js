/* JawaScript - shuffle1_DateArrayMeth
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
*/
'use strict';

alert("Start shuffle1_DateArrayMeth");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i включительно (для i=1 Math.floor(0...2) => (0...1))
      alert(i); alert(j);
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [0, 1];
shuffle(arr); alert(arr);



alert("End");
