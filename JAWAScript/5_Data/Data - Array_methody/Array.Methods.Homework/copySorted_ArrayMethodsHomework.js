/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start copySorted_ArrayMethodsHomework");


let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = (arr => arr.slice().sort());

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)




alert("End");
