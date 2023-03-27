/* JawaScript - возвращает массив, содержащий только уникальные элементы */
'use strict';

alert("Start unique_2021_ArrayDate");


function unique(arr) {
    let uniarr = [];
    for(let el of arr) {
        if( !uniarr.includes(el) ) uniarr.push(el);
    }
    return uniarr;
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
alert(`Result:  ${unique(strings)}`); // кришна, харе, :-O

alert("End");
