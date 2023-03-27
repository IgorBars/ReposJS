/* JawaScript - copySorted_ArrayDate*/
'use strict';

alert("Start copySorted_ArrayDate");

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(`arr sorted: ${sorted}`); // CSS, HTML, JavaScript
alert(`arr: ${arr}`); // HTML, JavaScript, CSS


alert("End");
