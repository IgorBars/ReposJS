/* JawaScript -  скопировать и сортировать  */
'use strict';

alert("Start copySorted_2021_ArrayDate");


function copySorted(arr) {

    return arr.slice().sort();
}

let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr1);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr1 ); // HTML, JavaScript, CSS (без изменений)

alert("End");
