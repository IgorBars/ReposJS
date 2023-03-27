/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start uniqueBest_ArrayMethodsHomework");


function unique(arr) {

        let newarr = [];

    for (let str of arr) {
        if (!newarr.includes(str)) {
            newarr.push(str);
        }
    }
    return newarr;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O

alert("End");
