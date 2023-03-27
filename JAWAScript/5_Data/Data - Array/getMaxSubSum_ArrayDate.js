/* JawaScript - Во входном рендомном массиве найти непр подмассив 
с максимальной суммой элементов*/
'use strict';

alert("Start getMaxSubSum_ArrayDate");

function getMaxSubSum(arr) {
    let sum =  0;
    let sumMax = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > 0) { sum += arr[i];

            if(sum > sumMax) sumMax = sum;
            continue;

        }   else if(sum + arr[i] > 0) {
            
                sum += arr[i]; 
                continue;
            }
            sum = 0;
    }
    alert(sumMax);
    return sumMax;
}
    
getMaxSubSum([-1, 2, 3, -9]); //= 5
getMaxSubSum([2, -1, 2, 3, -9]); //= 6
getMaxSubSum([-1, 2, 3, -9, 11]); //= 11
getMaxSubSum([-2, -1, 1, 2]); //= 3
getMaxSubSum([100, -9, 2, -3, 5]); //= 100
getMaxSubSum([1, 2, 3]); //= 6 (берём все)



alert("End");
