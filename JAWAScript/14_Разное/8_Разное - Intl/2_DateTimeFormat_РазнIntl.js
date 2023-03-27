/* JawaScript - 2_DateTimeFormat_РазнIntl        Intl.DateTimeFormat - форматтер датьі-времени
  - об'ьект форматирует дату и время в соотв с нужным языком                          

  создание
let formatter = new Intl.DateTimeFormat([locales, [options]])

  форматирование
let dateString = formatter.format(date);  
*/
'use strict';

alert("Start 2_DateTimeFormat_РазнIntl");


let date = new Date(2014, 11, 31, 12, 30, 0);         // сначала берем об'ьект требуемой датьі

// Об'ект форматтера датьі      Intl.DateTimeFormat

// Длинная дата: 
let formatter = new Intl.DateTimeFormat("ru", {       // задаем в констр Intl.DateTimeFormat требуемьіе св-ва [options]
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// используем метод "форматтера"  .format
alert( formatter.format(date) );                      // среда, 31 декабря 2014 г.

let formatterRu = new Intl.DateTimeFormat("ru");
alert( formatterRu.format(date) ); // 31.12.2014

let formatterUS = new Intl.DateTimeFormat("en-US");
alert( formatterUS.format(date) );                    // 12/31/2014

// Только время:
let formatterT = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

alert( formatterT.format(date) );                     // 12:30:00



//СОКРАЩЕННІЙ ВЬІЗОВ
// метод прототипа Date  .toLocaleString
let date2 = new Date(2014, 11, 31, 12, 00);

alert( date2.toLocaleString("ru", { year: 'numeric', month: 'long' }) ); // Декабрь 2014



alert("End");

