/* JawaScript - copySorted_DateArrayMeth
Нужно получить отсортированную копию, но оставить arr неизменённым.

*/
'use strict';

alert("Start copySorted_DateArrayMeth");



function copySorted(arrey) {

    return arrey.slice().sort();
}


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)


alert("End");
