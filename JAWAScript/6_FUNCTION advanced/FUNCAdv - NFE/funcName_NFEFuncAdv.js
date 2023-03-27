/* JawaScript - funcName_NFEFuncAdv.

 */
'use strict';


alert("Start funcName_NFEFuncAdv");


let arr = [function() {}];

alert( arr[0].name );           // ""   - ще нема імені ф-ї

arr = [function func() {}];     // присвоєння імені ф-ї відбувається у властивість .name

alert( arr[0].name );           //func  - присвоєне ім'я ф-ї

  
alert("End");