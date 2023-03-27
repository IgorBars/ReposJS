/* JawaScript - 6_Blob_ArrayBuffer_BlobBinaryDate               Из Blob в ArrayBuffer

Конструктор Blob позволяет создать Blob-объект практически из чего угодно, включая BufferSource.

Но если нам нужна производительная низкоуровневая обработка, мы можем использовать ArrayBuffer из FileReader:
*/

'use strict';
alert("Start 6_Blob_ArrayBuffer_BlobBinaryDate");


// получаем arrayBuffer из Blob

let fileReader = new FileReader();

fileReader.readAsArrayBuffer(blob);

fileReader.onload = function(event) {
  let arrayBuffer = fileReader.result;
};


alert("End");

/*

*/