/* JawaScript - Преобразовать строки вида «my-short-string» в «myShortString» Преобразовать 
строки вида «my-short-string» в «myShortString» */
'use strict';

alert("Start camelize_best_ArrayDate");

function camelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }



//alert(`Result: ${camelize("background-color")}`);   //  backgroundColor
//alert(`Result: ${camelize("list-style-image")}`);   //  listStyleImage
alert(`Result: ${camelize("-webkit-transition")}`); //  

alert("End");
