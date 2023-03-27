/* JawaScript - Map, Set*/
'use strict';

alert("Start unique_Map_Set");

function unique(arr) {

    return Array.from(new Set(arr));

    // let SortSet = new Set();
    // let SortArr = new Array();

    // for(let char of arr) {

    //     SortSet.add(char);
    // }

    // for(let char of SortSet) {
    //     SortArr.push(char);
    // }

    // return SortArr;
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

let SortSet = new Set(values);
let SortArr = Array.from(SortSet);//Array.from(obj[, mapFn, thisArg]) создаёт настоящий Array из итерируемого объекта или псевдомассива

alert(SortArr);
  
//alert( unique(values) ); // Hare,Krishna,:-O

let str = `𝒳😂`;// итерируемый объект, псевдомассив
let chars1 = str.split("");// .split() не работает с псевдомассивом
for(let char of chars1) alert("for_of str.split(): " + char);

//for_of работает с итерируемым объектом
for(let char of str) alert("for_of str: " + char);

// разбивает строку на массив её элементов
let chars = Array.from(str); 
//Array.from() превращает итерируемые объекты и псевдомассивы в массивы

alert("Array.from(str) chars[1]: " + chars[0]); // 𝒳
alert("Array.from(str) chars[2]: " + chars[1]); // 😂
alert("Array.from(str) chars.length: " + chars.length); // 2

alert("End");
