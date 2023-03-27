/* JawaScript - из строки $234 выделить число */


'use strict';

alert("Start Ex_extractCurrencyValue1_String_Data");

function extractCurrencyValue(str) {

    let extstr = "";
    let symbstr = "";
    for (let char of str) {
        if ( char < 10 && char !== " ") {
            //if (char !== " ")  
            extstr += +char;
        }
        else {
            symbstr += char;
        }
    } 
    return extstr + " " + symbstr;  // => 120790 $ (   )%#.lkhjvbn
}
  
alert( extractCurrencyValue( prompt("Введите строку", 
"$12 0(   )%7#.l9kh0jvbn") ) );

alert("End");
