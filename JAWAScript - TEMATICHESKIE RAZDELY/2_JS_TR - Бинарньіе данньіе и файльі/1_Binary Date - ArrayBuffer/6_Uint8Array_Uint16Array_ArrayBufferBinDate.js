/* JawaScript - 6_Uint8Array_Uint16Array_ArrayBufferBinDate               Uint16Array <= Uint8Array

Для доступа к ArrayBuffer в TypedArray есть следующие свойства:

  - buffer – ссылка на объект ArrayBuffer.
  - byteLength – размер содержимого ArrayBuffer в байтах.

Таким образом, мы всегда можем перейти от одного представления к другому:
*/

'use strict';
alert("Start 6_Uint8Array_Uint16Array_ArrayBufferBinDate");


let arr8 = new Uint8Array([256, 1, 2, 3]); // создаем типизированньій массив с 1-Байтньім целочисленнім представлением без знака
alert(arr8[0]);           // 0                        (8 бит недостаточно, обрезаньі старшие разрядьі)

alert(arr8.buffer);       // [object ArrayBuffer]
alert(arr8.byteLength);   // 4                       4 х 1 Байт

// другое представление на тех же данных
let arr16 = new Uint16Array(arr8.buffer); // создаем типизированньій массив с 2-Байтньім целочисленнім представлением без знака

alert(arr16.byteLength);   // 4                       теперь 2 х 2 Байт
alert(arr16[0]);           // 256                     (16 бит достаточно)
alert(arr16[1]);           // 770
alert(arr16[2]);           // undefined
alert(arr16[3]);           // undefined

// let arr16 = new Uint16Array([256, 1, 2, 3]);

// alert(arr16.byteLength);   // 8                       теперь 4 х 2 Байт
// alert(arr16[0]);           // 256                     (16 бит достаточно)
// alert(arr16[1]);           // 1
// alert(arr16[2]);           // 2
// alert(arr16[3]);           // 3

alert("End");