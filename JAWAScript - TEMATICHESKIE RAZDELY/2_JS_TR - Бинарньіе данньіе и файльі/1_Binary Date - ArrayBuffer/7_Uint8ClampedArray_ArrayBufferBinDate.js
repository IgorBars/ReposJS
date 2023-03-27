/* JawaScript - 7_Uint8ClampedArray_ArrayBufferBinDate               Uint8ClampedArray
Uint8ClampedArray -типизированный массив с обрезанием младших разрядов.

В него записываются значения 255 для чисел, которые больше 255, и 0 для отрицательных чисел. 
Такое поведение полезно в некоторых ситуациях, например при обработке изображений.
*/

'use strict';
alert("Start 7_Uint8ClampedArray_ArrayBufferBinDate");

let Uint8ClampedArr = new Uint8ClampedArray(16);

let num = 256;
alert(num.toString(2)); // 100000000 (в двоичном формате)

Uint8ClampedArr[0] = 254;
Uint8ClampedArr[1] = 256;
Uint8ClampedArr[2] = 257;

alert(Uint8ClampedArr[0]); // 254
alert(Uint8ClampedArr[1]); // 255
alert(Uint8ClampedArr[2]); // 255


alert("End");