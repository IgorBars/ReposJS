/* JawaScript - _method_reduce_ArrayDate*/
'use strict';

alert("Start _method_reduce_ArrayDate");

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((mult, current) => mult + current, 0);
alert(result); // 15

let result = arr.reduce((mult, current) => mult * current, 1);
alert(result); // 120

alert("End");
