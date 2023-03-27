/* JawaScript - 22_await_import_default_dynamicImportModul                export default function() {...}

если в say.js указан экспорт по умолчанию:
*/
'use strict';
alert("Start 22_await_import_default_dynamicImportModul"); 


// 📁 say.js
export default function() {
    alert("Module loaded (export default)!");
}

//...
//для доступа к нему нам следует взять свойство default объекта модуля:
let obj = await import('./say.js');
let say = obj.default;
// или, одной строкой: let {default: say} = await import('./say.js');

say();

// файл оглядовий. Для роботи запускати (з Live Server) index.html у    📁await_import     та  📁await_import2

alert("End");

