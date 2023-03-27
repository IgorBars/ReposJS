/* JawaScript - 5_clientWidth_OffsetClientTopDocument         clientWidth   clientHeight

размер области внутри рамок элемента.

Они включают в себя ширину области содержимого вместе с внутренними отступами padding, но без прокрутки:
*/

'use strict';
alert("Start 5_clientWidth_OffsetClientTopDocument");

let example = document.getElementById('example');

alert(example.offsetParent.id); // main

/* clientWidth – ширина содержимого здесь равна не 300px, а 284px, т.к. 16px отведено для полосы прокрутки.*/
alert(example.clientWidth);      //  323 (284px + 2 * 20px)

alert(example.clientHeight);    // 240  (CSS-высота 200px + 2 * 20px)  


/*

*/
alert("End");