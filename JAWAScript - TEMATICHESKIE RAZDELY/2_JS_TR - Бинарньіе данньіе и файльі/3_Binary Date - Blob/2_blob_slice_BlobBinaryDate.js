/* JawaScript - 2_blob_slice_BlobBinaryDate               blob.slice

Мы можем получить срез Blob, используя метод массивов slice:

blob.slice([byteStart], [byteEnd], [contentType]);

    - byteStart – стартовая позиция байта, по умолчанию 0.
    - byteEnd – последний байт, по умолчанию до конца.
    - contentType – тип type создаваемого Blob-объекта, по умолчанию такой же, как и исходный.
*/

'use strict';
alert("Start 2_blob_slice_BlobBinaryDate");


// создадим Blob из строки
let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
// обратите внимание: первый аргумент должен быть массивом [...]

// создадим Blob из типизированного массива и строк
let text = new Uint8Array([72, 101, 108, 108, 111]); // "hello" в бинарной форме

// создадим новьій Blob из имеющегося + новьіе string-данньіе
let blob1 = new Blob([blob, text, ' ', 'world'], {type: 'text/plain'}); // <html>…</html>hello world
                        /* данньіе */                   /* type */

let blobSl = blob1.slice(2, -2, {type: 'text/html'});   // tml>…</html>hello wor

alert("End");

/*
Blob не изменяем (immutable)
Мы не можем изменять данные напрямую в Blob, но мы можем делать срезы и создавать новый Blob на их основе, 
объединять несколько объектов в новый и так далее.

Это поведение аналогично JavaScript-строке: мы не можем изменить символы в строке, но мы можем создать новую исправленную строку 
на базе имеющейся.
*/