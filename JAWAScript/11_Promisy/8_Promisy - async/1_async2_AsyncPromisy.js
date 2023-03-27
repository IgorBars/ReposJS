/* JawaScript - 1_async2_AsyncPromisy
Ключевое слово async ставится перед функцией.   (ПРЕВРАЩАЕТ ФУНКЦИЮ В такую, которая возвращает ПРОМИС)
*/
'use strict';
alert("Start 1_async2_AsyncPromisy");


async function f() {

    await setTimeout(() => alert("готово!"), 1000); // установка вьіполнения инстр setTimeout в 1-ю очередь микрозадач
}                                                   // установка вьіполнения инстр await во 2-ю очередь микрозадач

f();



alert("End");

