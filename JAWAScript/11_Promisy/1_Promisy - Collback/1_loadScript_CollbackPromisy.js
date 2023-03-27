/* JawaScript - 1_loadScript_CollbackPromisy    - асинхронное программирование
Функция loadScript загружает на страницу новый скрипт. Когда в тело документа добавится конструкция <script src="…">, 
браузер загрузит скрипт и выполнит его.
*/
'use strict';

alert("Start 1_loadScript_CollbackPromisy");
// loadScript загружает скрипт с интернета. 

function loadScript(src) {
    let script = document.createElement('script');  // создаем тег <script>
    script.src = src;                             // добавляем в его св-во ссьілку src (из параметров ф-и loadScript)
    document.head.append(script);                 // добавляем тег <script> в тег <head>
}

//Проверим загрузкой JS-файла ИЗ ПАПКИ НА КОМПЕ:

// loadScript('JAWAScript/5_Data/Date - Date&Time/_Time_DateDateTime.js'); //- относительная ссьілка не работает
loadScript('E:/JAWASCRIPT/JS - Visual Studio/JAWAScript/5_Data/Date - Date&Time/_Time_DateDateTime.js');
// потому что по прямой ссьілке удалось подтянуть скрипт в реальном времени


// Но если мы просто вызовем эту функцию для загрузки из сети, у нас ничего не выйдет:
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');

// у браузера не было времени загрузить скрипт. Сейчас функция loadScript никак не позволяет отследить момент загрузки.
// Скрипт загружается, а потом выполняется. И нам нужно точно знать, когда это произойдёт, 
//чтобы использовать функции и переменные из этого скрипта.

alert("End");

