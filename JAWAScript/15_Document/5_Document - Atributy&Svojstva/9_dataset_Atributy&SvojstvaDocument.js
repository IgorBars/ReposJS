/* JawaScript - 9_dataset_Atributy&SvojstvaDocument     -пользовательские атрибутьі для разрабов

Все атрибуты, начинающиеся с префикса «data-», зарезервированы для использования программистами. 
    Они доступны в свойстве dataset.

Например, если у elem есть атрибут "data-about", то обратиться к нему можно как elem.dataset.about.
*/

'use strict';
alert("Start 9_dataset_Atributy&SvojstvaDocument");

//<body data-about="Elephants">
//  <script src="9_dataset_Atributy&SvojstvaDocument.js"></script>
//</body>

alert(document.body.dataset.about); // Elephants




alert("End");