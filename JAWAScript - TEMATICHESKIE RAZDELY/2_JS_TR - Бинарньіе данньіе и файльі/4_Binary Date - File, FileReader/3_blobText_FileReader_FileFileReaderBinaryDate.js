/* JawaScript - 3_blobText_FileReader_FileFileReaderBinaryDate               FileReader

FileReader объект, цель которого читать данные из Blob (и, следовательно, из File тоже).
Данные передаются при помощи событий, так как чтение с диска может занять время.
Конструктор:

let reader = new FileReader();                // без аргументов

Основные методы:
  -  readAsArrayBuffer(blob) – считать данные как ArrayBuffer
  -  readAsText(blob, [encoding]) – считать данные как строку (кодировка по умолчанию: utf-8)
  -  readAsDataURL(blob) – считать данные как base64-кодированный URL.
  -  abort() – отменить операцию.

В процессе чтения происходят следующие события:
  -  loadstart – чтение начато.
  -  progress – срабатывает во время чтения данных.
  -  load – нет ошибок, чтение окончено.
  -  abort – вызван abort().
  -  error – произошла ошибка.
  -  loadend – чтение завершено (успешно или нет).

Когда чтение закончено, мы сможем получить доступ к его результату следующим образом:

  -  reader.result результат чтения (если оно успешно)
  -  reader.error объект ошибки (при неудаче).

Вот пример чтения файла из input:
<input type="file" onchange="readFile(this)">
*/

'use strict';
alert("Start 3_blobText_FileReader_FileFileReaderBinaryDate");


// создать текстовьій Blob и загрузить как текстовьій файл
let link = document.createElement('a');

link.download = 'hello.txt';          // не навигация, а ЗАГРУЗИТЬ файл и назвать его hello.txt

let blob = new Blob(['Hello, \n world!'], {type: 'text/plain'});

link.href = URL.createObjectURL(blob);  // сгенерировать и присвоить временную URL на blob

link.click();                           // эмулировать клик на a (хранится в переменной link)

URL.revokeObjectURL(link.href);     // после загрузки удалить временную ссьілку (уборщик мусора освободит область памяти от blob)


// вьібрать вручную сохраненньій файл hello.txt и прочитать его с пом FileReader в console (fn + f12)
function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
}


alert("End");

/*

*/