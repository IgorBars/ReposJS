/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start filterRangeInPlace_ArrayMethodsHomework");


function filterRangeInPlace(arr, a, b) {
    
    arr.map((item, index) => {

        if(item < a || item > b) arr.splice(index,1);
        } 
    )
};

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);


alert( arr ); //    3, 1



alert("End");
