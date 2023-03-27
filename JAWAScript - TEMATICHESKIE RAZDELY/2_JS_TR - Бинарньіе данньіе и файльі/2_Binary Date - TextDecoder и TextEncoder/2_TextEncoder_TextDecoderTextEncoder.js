/* JawaScript - 2_TextEncoder_TextDecoderTextEncoder               TextEncoder

TextEncoder поступает наоборот – кодирует строку в бинарный массив.
Имеет следующий синтаксис:

let encoder = new TextEncoder();

Поддерживается только кодировка «utf-8».
Кодировщик имеет следующие два метода:

    - encode(str) – возвращает бинарный массив Uint8Array, содержащий закодированную строку.

    - encodeInto(str, destination) – кодирует строку (str) и помещает её в destination, который должен быть экземпляром Uint8Array.
*/

'use strict';
alert("Start 2_TextEncoder_TextDecoderTextEncoder");


let encoder = new TextEncoder();

let utf8Code = encoder.encode("Hello");
alert(utf8Code);                        // 72,101,108,108,111

utf8Code = encoder.encode("если я не ошибаюсь,"); // Поддерживается только кодировка «utf-8».
alert(utf8Code); 
// 208,149,209,129,208,187,208,184,32,209,143,32,208,189,208,181,32,208,190,209,136,208,184,208,177,208,176,209,142,209,129,209,140,44

alert("End");