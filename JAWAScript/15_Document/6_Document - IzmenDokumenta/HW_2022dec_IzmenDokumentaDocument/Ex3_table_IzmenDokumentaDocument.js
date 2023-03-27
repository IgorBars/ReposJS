/* JawaScript - Ex3_table_IzmenDokumentaDocument         

В примере ниже вызов table.remove() удаляет таблицу из документа.

Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
*/

'use strict';
alert("Start Ex3_table_IzmenDokumentaDocument");


let table = document.getElementById('table');

alert(table); // таблица, как и должно быть

table.remove();
// почему в документе остался текст "ааа"?

// См  без инструкции table.remove(); вкладку Elements в єлементах разработчика (F12)


// Браузер исправил ошибку автоматически.
// Внутри <table> не может быть текста: 
// в соответствии со спецификацией допускаются только табличные теги. 

// Поэтому браузер исправляет ошибку и располагает "aaa" до <table>.
  





alert("End");