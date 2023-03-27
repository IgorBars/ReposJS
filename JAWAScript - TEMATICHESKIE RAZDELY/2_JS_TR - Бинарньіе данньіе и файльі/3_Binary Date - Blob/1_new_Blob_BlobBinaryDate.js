/* JawaScript - 1_new_Blob_BlobBinaryDate               new_Blob

Blob - высокоуровневый объект, описанный в File API, использует ArrayBuffer и бинарные массивы.

Объект Blob состоит из необязательной строки type (обычно MIME-тип) и blobParts – последовательности других объектов Blob, 
строк и BufferSource.

Благодаря type мы можем загружать и скачивать Blob-объекты, где type естественно становится Content-Type в сетевых запросах.
Конструктор имеет следующий синтаксис:

    new Blob(blobParts, options);

    - blobParts – массив значений Blob/BufferSource/String.
    - options – необязательный объект с дополнительными настройками:
        -type – тип объекта, обычно MIME-тип, например. image/png,
        -endings – если указан, то окончания строк создаваемого Blob будут изменены в соответствии с текущей операционной 
          системой (\r\n или \n). По умолчанию "transparent" (ничего не делать), но также может быть "native" (изменять).
*/

'use strict';
alert("Start 1_new_Blob_BlobBinaryDate");


// создадим Blob из строки
let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
// обратите внимание: первый аргумент должен быть массивом [...]

let Uint8Arr = new Uint8Array([72, 101, 108, 108, 111]); // "hello" в бинарной форме

// создадим Blob из типизированного массива и строк
let blobConc = new Blob([Uint8Arr, ' ', 'world'], {type: 'text/plain'});
                      /* данньіе */              /* type */



alert("End");