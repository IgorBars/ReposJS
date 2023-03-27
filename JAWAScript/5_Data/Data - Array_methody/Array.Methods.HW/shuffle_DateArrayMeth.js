/* JawaScript - shuffle_DateArrayMeth
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
*/
'use strict';

alert("Start shuffle_DateArrayMeth");

function shuffle(arr){

    for (let i = arr.length - 1; i > 0; i--) {

        let ind = Math.floor( (i + 1) * Math.random() );    // случайный индекс от 0 до i включительно (для i=1 Math.floor(0...2) => (0...1))   
        // alert(ind);
        let prim = arr[i];

        arr[i] = arr[ind];

        arr[ind] = prim;
    }
};

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, 2];
shuffle(arr); alert(arr);


alert("End");
