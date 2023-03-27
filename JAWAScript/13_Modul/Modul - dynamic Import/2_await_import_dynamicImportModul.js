/* JawaScript - 2_await_import_dynamicImportModul                await import(modulePath)

Или если внутри асинхронной функции, то можно let module = await import(modulePath).
*/
'use strict';
alert("Start 2_await_import_dynamicImportModul"); 


// 📁 ... say.js                                десь на сервері експортні файли
export function hi() {
    alert(`Привет`);
}

export function bye() {
    alert(`Пока`);
}

//...
// динамический импорт внутри асинхронной функции:
async function f() {
    let {hi, bye} = await import('... ./say.js');

    hi();
    bye();
}


// файл оглядовий. Для роботи запускати (з Live Server) index.html у    📁await_import     та  📁await_import2

alert("End");

