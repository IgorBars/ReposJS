/* JawaScript - вернуть массив уникальных, не повторяющихся значений массива */
'use strict';

alert("Start HW_unique1_MapSet_Data");

// function unique(arr) {
//     let setValues = new Set();
//     arr.map(item => setValues.add(item));
//     return Array.from(setValues);
// }

// function unique(arr) {
//     let setValues = new Set(arr);
//     return Array.from(setValues);
// }

function unique(arr) {
    return Array.from(new Set(arr));
}


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O   

alert("End"); 
