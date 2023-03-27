/* JawaScript - 1_File_FileFileReaderBinaryDate               File

Объект File наследуется от объекта Blob и обладает возможностями по взаимодействию с файловой системой.
Есть два способа его получить.
Во-первых, есть конструктор, похожий на Blob:

new File(fileParts, fileName, [options])

  -  fileParts – массив значений Blob/BufferSource/строки.
  -  fileName – имя файла, строка.
  -  options – необязательный объект со свойством:
        -lastModified – дата последнего изменения в формате таймстамп (целое число).

Во-вторых, чаще всего мы получаем файл из <input type="file"> или через перетаскивание с помощью мыши, 
или из других интерфейсов браузера. В этом случае файл получает эту информацию из ОС.

Так как File наследует от Blob, у объектов File есть те же свойства плюс:
  -  name – имя файла,
  -  lastModified – таймстамп для даты последнего изменения.

В этом примере мы получаем объект File из <input type="file">:
<input type="file" onchange="showFile(this)">
*/

'use strict';
alert("Start 1_File_FileFileReaderBinaryDate");

let input = document.getElementById("input");

function showFile(input) {
  let file = input.files[0];

  alert(`File name: ${file.name}`); // например, my.png
  alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
}


alert("End");

/*

*/