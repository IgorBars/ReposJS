/* JawaScript - _GeneratorGnrtr
export, import  работают потому, что в index.html єтот скрипт подключен как модуль
*/
'use strict';

import { user } from "./user.js";       // {именной} импорт

alert(import.meta.url);                 // http://127.0.0.1:5500/JAWAScript/13_Modul/Modul%20-%20Vvedenie/hello_user_John/hello.js

alert(`Hello, ${user}`);                //  Hello, John

document.body.innerHTML = `Hello, ${user}`; // Hello, John      (на html-странице)


