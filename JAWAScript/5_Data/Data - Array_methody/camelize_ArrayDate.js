/* JawaScript - Преобразовать строки вида «my-short-string» 
в «myShortString» */
'use strict';

alert("Start camelize_ArrayDate");


function camelize(str) {
    let cutStr = str.split("");
    alert(`массив cutStr: ${cutStr}`);
    alert(`длина массива cutStr: ${cutStr.length}`);
    let k = 100;
    for (let i = 0; i < cutStr.length; i++) {
    
       if (cutStr[i] == "-") k = i;
       
        else if (i == k + 1) cutStr[i] = cutStr[i].toUpperCase();
    }
    alert(`массив cutStrUpper() : ${cutStr}`);
    let concCutStrUpper = cutStr.join("");
    alert(`строка concCutStrUpper : ${concCutStrUpper}`);
    let cutConcCutStrUpper = concCutStrUpper.split("-");
    alert(`массив cutConcCutStrUpper : ${cutConcCutStrUpper}`);
    let joinCutConcCutStrUpper = cutConcCutStrUpper.join("");
    alert(`строка joincutconcstr : ${joinCutConcCutStrUpper}`);
    return joinCutConcCutStrUpper;
}

alert(`Result: ${camelize("background-color")}`);   //  backgroundColor
alert(`Result: ${camelize("list-style-image")}`);   //  listStyleImage
alert(`Result: ${camelize("-webkit-transition")}`); //  

alert("End");
