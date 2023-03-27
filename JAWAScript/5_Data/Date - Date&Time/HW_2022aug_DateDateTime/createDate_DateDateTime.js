/* JawaScript - createDate_DateDateTime         Объект Time 
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
*/


'use strict';

alert("Start createDate_DateDateTime.now()");

let createDate = new Date("2012-02-20T03:12");

alert(createDate);

createDate = new Date(2012, 1, 20, 3, 12);

alert(createDate);

alert("End");

