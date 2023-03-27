/* JawaScript - Во входном рендомном массиве найти непр подмассив 
с максимальной суммой элементов */
'use strict';

alert("Start getMaxSubSum1_ArrayDate");

function getMaxSubSum(arr) {

    let maxSum = 0;

    for (let i = 0; i < arr.length ; i++) {

        let sumFixedStart = 0;

        for (let j = i; j < arr.length ; j++) {
            sumFixedStart  += arr [j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
} 

alert("maxSum  " + getMaxSubSum([10, -9, 3, -2, 20]) ); //  22
alert("maxSum  " + getMaxSubSum([-1, 2, 3, -9]) );      //  5
alert("maxSum  " + getMaxSubSum([-1, 2, 3, -9, 11]) );  //  11
alert("maxSum  " + getMaxSubSum([-2, -1, 1, 2]) );      //  3

alert("End");
