/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start unique_ArrayMethodsHomework");


function unique(arr) {

        let sortarr = [];
        sortarr[0] = arr[0];

        newI: for (let index = 1; index < arr.length; index++) {

            for (let i = 0; i <= sortarr.length; i++) {

                if (arr[index] == sortarr[i]) continue newI;
            }
            sortarr.push(arr[index]);
        }
    return sortarr;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O

alert("End");
