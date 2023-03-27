/* JawaScript - 3_URL_a_BlobBinaryDate               URL

Для ссьілки на Blob (и просмотра содержимого Blob как файла) можно создать URL для <a>, <img> или других тегов, 
и из них открьівать Blob как файл.
(Если мьі имеем Blob-содержимое и хотим его загрузить/показать, создаем для Blob временную URL и открьіваем Blob как файл)

Пример. 
При клике на ссылку мы загружаем на свой PC динамически генерируемый Blob с "hello world"-содержимым как файл:

<!-- download атрибут указывает браузеру делать загрузку вместо навигации -->
<a download="hello.txt" href='#' id="link">Загрузить</a>
*/

'use strict';
alert("Start 3_URL_a_BlobBinaryDate");

let link = document.getElementById("link");

let text = new Uint8Array([72, 101, 108, 108, 111]);      // "hello" - в бинарном представлении

let blobPre = new Blob([text, "Hello, \n world!"], {type: 'text/plain'});

let blob = blobPre.slice(1, -3, {type: 'text/plain'});

link.href = URL.createObjectURL(blob);  // URL.createObjectURL берёт Blob и создаёт уникальный URL для него в формате blob


alert("End");

/*
elloHello, 
 wor
*/