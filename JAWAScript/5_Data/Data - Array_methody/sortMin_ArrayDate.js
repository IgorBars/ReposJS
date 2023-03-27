/* JawaScript - сортировать по убыванию */
'use strict';

alert("Start sortMin_ArrayDate");


let arr = [5, 2, 12,  1, -10, 8];

//arr.sort().reverse();     //  arr sort: 8,5,2,12,1,-10
arr.sort(function(a, b) {
    alert( a + " <> " + b );
    return b - a;
});  //  arr sort: 12,8,5,2,1,-10

alert(`arr sort: ${arr}`);


alert("End");
