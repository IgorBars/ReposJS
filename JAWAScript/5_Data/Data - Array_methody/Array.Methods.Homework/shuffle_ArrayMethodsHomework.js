/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start shuffle_ArrayMethodsHomework");


let arr = [1, 2, 3];
alert(arr);
let arr1 = [];

function shuffle(array) {
    let el = [];
    for(let i = 0; i < array.length; i++) {
        
        el[i] = Math.round((array.length + 1) * Math.random() - 0.5);

        alert(el[i])
    }
    for(let i = 0; i < array.length; i++) {
        arr1[i] = 
    }
}

shuffle(arr);
alert(arr);

alert("End");
