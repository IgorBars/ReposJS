/* JawaScript - 3_NumberFormat_РазнIntl        Intl.NumberFormat - форматтер чисел

- об'ьект форматирует не только числа, но и валюту, а также проценты.

  создание
let formatter = new Intl.NumberFormat([locales[, options]]);      параметрьі конструктора – локаль и опции.

  форматирование
formatter.format(number);
*/
'use strict';
alert("Start 3_NumberFormat_РазнIntl");


//Пример без опций:
// Об'ект Intl.NumberFormat (форматтер числа)
let formatter = new Intl.NumberFormat("ru");

// метод форматтера числа .format
alert( formatter.format(1234567890.123) ); // 1 234 567 890,123


// С опциями для валюты:
formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "GBP"
});
  
alert( formatter.format(1234.5) ); // 1 234,5 £


//С двумя цифрами после запятой:
formatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2
});

alert( formatter.format(1234.5) ); // 1 234,50 £

//СОКРАЩЕННІЙ ВЬІЗОВ
// метод прототипа Number  .toLocaleString([locales [, options]])



alert("End");

