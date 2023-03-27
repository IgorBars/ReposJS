/* JawaScript - из строки $234 выделить число */
'use strict';

alert("Start Ex_extractCurrencyValue_String_Data");

function extractCurrencyValue(str) {

    return str.slice(1,) + "$";
}

alert( extractCurrencyValue('$120'));



alert("End");
