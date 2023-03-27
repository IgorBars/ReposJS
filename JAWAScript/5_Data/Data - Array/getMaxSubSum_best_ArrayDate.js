/* JawaScript -  Во входном рендомном массиве найти непр подмассив 
с максимальной суммой элементов */
'use strict';

alert("Start getMaxSubSum_best_ArrayDate");

function getMaxSubSum(arr) {

    let maxSum = 0;
    let sumFixedLevel = 0;

    for (let i = 0; i < arr.length ; i++) {

            sumFixedLevel  += arr [i];
            maxSum = Math.max(maxSum, sumFixedLevel);
            if(sumFixedLevel < 0) sumFixedLevel = 0;    //готовим новую суммарную цепочку
    }
    return maxSum;
} 

alert("[10, -9, 3, -2, 20]  " + getMaxSubSum([10, -9, 3, -2, 20]) ); //  22
alert("[-1, 3, -2, 4]  " + getMaxSubSum([-1, 3, -2, 4]) );          //  5
alert("[-1, 2, 3, -4, 10]  " + getMaxSubSum([-1, 2, 3, -4, 10]) );  //  11
alert("[-2, 2, -1, 2] " + getMaxSubSum([-2, 2, -1, 2]) );            //  3
alert("[98, -9, 10, -3, 4] " +  getMaxSubSum([98, -9, 10, -3, 4]) ); // 100
alert("[1, 2, 3] " +  getMaxSubSum([1, 2, 3]) );                     // 6
alert("[4, -1, 2, 1, -5, 4] " +  getMaxSubSum([4, -1, 2, 1, -5, 4]) );               // 0

alert("End");
