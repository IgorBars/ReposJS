/* JawaScript - 8_METHODS_TypedArray_ArrayBufferBinDate               Методы TypedArray

Типизированные массивы TypedArray, за некоторыми заметными исключениями, имеют те же методы, что и массивы Array.

Мы можем обходить их, вызывать map, slice, find, reduce и т.д.
НО отсутствуют методьі вьірезания/добавления данньіх:
  - Нет метода splice – мы не можем удалять значения, потому что типизированные массивы – это всего лишь представления данных из буфера, 
    а буфер – это непрерывная область памяти фиксированной длины. Мы можем только записать 0 вместо значения.
  - Нет метода concat.

Зато есть два дополнительных метода:
  - arr.set(fromArr, [offset]) добавить "concat" (копирует) ВСЕ элементы из fromArr в arr, начиная с позиции offset (0 по умолчанию).
  - arr.subarray([begin, end]) создаёт новое представление того же типа для данных, начиная с позиции begin до end (не включая). 
    Это похоже на метод slice (который также поддерживается), но при этом ничего не копируется – просто создаётся новое 
    представление, чтобы совершать какие-то операции над указанными данными. 
    Изменения в содержимом созданного подмассива повлияют на исходный массив и наоборот 
*/

'use strict';
alert("Start 8_METHODS_TypedArray_ArrayBufferBinDate");

let arr8 = new Uint8Array([256, 1, 2, 3]);            // типизированньій 8-битовьій бинарньій массив
alert(arr8[0]);           // 0                        (8 бит недостаточно, обрезаньі старшие разрядьі)
arr8[0] = 255;

let arr16 = new Uint16Array(10);           // типизированньій 16-битовьій бинарньій массив длиной 2 х 5 = 10 Байт
arr16.set(arr8, 1);                        // concat (ПРИСОЕДИНЕНИЕ к существующему) массива arr8, начиная со своей 1-й поз
alert(arr16[0]);          // 0
alert(arr16[1]);          // 255            1-я поз
alert(arr16[2]);          // 1
alert(arr16[3]);          // 2
alert(arr16[4]);          // 3

let arr16Sub = arr16.subarray(0, 3);      // КОПИРУЕМ ЧАСТЬ МАССИВА в том же представлении "Uint16Array" с 0-й по 2-ю поз
alert(arr16Sub[0]);           // 0
alert(arr16Sub[1]);           // 255
alert(arr16Sub[2]);           // 1
alert(arr16Sub[3]);           // undefined
alert(arr16Sub[4]);           // undefined

alert("End");