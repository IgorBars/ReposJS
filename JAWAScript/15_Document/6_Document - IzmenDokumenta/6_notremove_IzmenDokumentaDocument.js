/* JawaScript - 6_notremove_IzmenDokumentaDocument         

Если нам нужно переместить элемент в другое место – нет необходимости удалять его со старого.

Все методы вставки автоматически удаляют узлы со старых мест.
*/

'use strict';
alert("Start 6_notremove_IzmenDokumentaDocument");


let first = document.getElementById('first');
let second = document.getElementById('second');

// нет необходимости вызывать метод remove
second.after(first); // берёт #second и после него вставляет #first


alert("End");