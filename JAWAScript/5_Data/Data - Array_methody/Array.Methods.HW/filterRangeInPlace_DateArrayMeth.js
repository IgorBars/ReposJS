/* JawaScript - filterRangeInPlace_DateArrayMeth
Напишите функцию filterRangeInPlace(arr, a, b), принимает массив arr и удаляет из него все значения кроме тех, 
которые находятся между a и b.

*/
'use strict';

alert("Start filterRangeInPlace_DateArrayMeth");

function filterRangeInPlace(arr, a, b) {

    // for (let i = 0; i < arr.length; i++) { 

    //     if( arr[i] < a || arr[i] > b ) {
            
    //         arr.splice(i, 1);
    //         i--;
    //     }
    // }
        


    arr.forEach((item, index) => {

        if( item < a || item > b ) {

            arr.splice(index, 1);
        }
    });

}

let arr = [6, 2, 1, 5, 3, 1, 8, 1, 4, 7]; 

filterRangeInPlace(arr, 1, 4);

alert( arr ); // 2, 1, 3, 1, 1, 4


alert("End");
