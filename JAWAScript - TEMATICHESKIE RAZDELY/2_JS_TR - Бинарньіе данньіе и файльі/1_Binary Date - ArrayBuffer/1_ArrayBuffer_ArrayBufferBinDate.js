/* JawaScript - 1_ArrayBuffer_ArrayBufferBinDate               ArrayBuffer

Базовый объект для работы с бинарными данными имеет тип ArrayBuffer и представляет собой 
ссылку на непрерывную область памяти фиксированной длины.
*/

'use strict';
alert("Start 1_ArrayBuffer_ArrayBufferBinDate");


let buffer = new ArrayBuffer(16); // создаётся буфер длиной 16 байт (16 x 8 бит)
alert(buffer.byteLength);         // 16     (байтовая длина буферной области памяти) - фиксирована    [байтовьій размер]




alert("End");

// Для доступа к отдельным байтам нужен вспомогательный объект-представление, buffer[index] не сработает.