/* JawaScript - shuffleCount_DateArrayMeth
Тасование Фишера — Йетса. Суть алгоритма заключается в том, чтобы проходить по массиву в обратном порядке и 
менять местами каждый элемент со случайным элементом, который находится перед ним.
*/
'use strict';

alert("Start shuffleCount_DateArrayMeth");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
  
  // подсчёт вероятности для всех возможных вариантов
let count = {     //об'єкт з властивостями типу String (зпочаткові начення властивостей присвоюємо 0)
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 100000; i++) {
    let array = [1, 2, 3];      // для чистоти працюємо з сталим порядком елементів (на кожній ітерації - той самий масив)
    shuffle(array);
    count[array.join('')]++;    // збільшуємо значення відповідної властивості об'єкту count (отримавши її ім'я array.join(''))
}
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }


alert("End");
