/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start camelize_ArrayMethodsHomework");


function camelize(str) {

    let arr_strsplit = str.split("-");

    let arr_strslice = [];
    
    for (let i = 0; i < arr_strsplit.length; i++) {
        
        arr_strslice[i] = arr_strsplit[i].slice(0, 1).toUpperCase() + arr_strsplit[i].slice(1,);
        //alert(arr_sstrlice[i]);
    }
    return arr_strslice.join("");
}

alert(camelize("-webkit-transition"));
alert(camelize("list-style-image"));


alert("End");
