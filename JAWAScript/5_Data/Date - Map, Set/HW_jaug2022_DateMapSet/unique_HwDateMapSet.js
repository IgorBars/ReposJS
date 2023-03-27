/* JawaScript - unique_HwDateMapSet 
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/
'use strict';

alert("Start unique_HwDateMapSet");

function unique(arr) {
    
    // return Array.from(new Set(arr).values());
    return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) ); // Hare,Krishna,:-O


alert("End"); 
