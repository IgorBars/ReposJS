/* JawaScript - 5_remove_IzmenDokumentaDocument         node.remove()

Удаление узлов

*/

'use strict';
alert("Start 5_remove_IzmenDokumentaDocument");


let div = document.createElement('div');

div.className = "alert";

div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение. Сообщение будет удалено через 3с";

document.body.append(div);

setTimeout(() => div.remove(), 3000);



alert("End");