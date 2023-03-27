/* JawaScript - arr3_Array*/
'use strict';

alert("Start arr3_Array");

let styles = ["Jaz", "Blues"];
styles.push("Rock-n-Roll");
styles[ Math.floor((styles.length - 1) / 2) ] = "Classic";//Math.floor округление
alert( styles.shift() );
styles.unshift("Rep", "Reggey");
alert(styles);

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();   //      a,b,function() {
            //              alert( this );
            //          }
alert("End");
