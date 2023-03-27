/* JawaScript - 2_FileReader_FileFileReaderBinaryDate               FileReader

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
alert("Start 2_FileReader_FileFileReaderBinaryDate");


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
FileReader для Blob
Как упоминалось в главе Blob, FileReader работает для любых объектов Blob, а не только для файлов.

Поэтому мы можем использовать его для преобразования Blob в другой формат:
  -  readAsArrayBuffer(blob) – в ArrayBuffer,
  -  readAsText(blob, [encoding]) – в строку (альтернатива TextDecoder),
  -  readAsDataURL(blob) – в формат base64-кодированного URL.
*/