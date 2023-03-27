/* JawaScript - funct__pow*/

// однострочный комментарий

'use strict';

alert("Start funct__pow");

function pow(x, n) {
    let res = 1;
    for(let i = 1; i <= n; i++){

        res *= x;
    }
    return res;
}

while(1){
    let a = prompt("Вв основу (число)");
    if(a == null) break;                        //выход при Отмена/Esc
    let b = prompt("Вв степень (число) (>= 0)");
    if(b == null) break;

    if( +a && +b ) {           // +(string) => NaN; boolean(NaN) => false
        alert( pow(a, b)); 
    }   else {alert("Ошибка ввода");}
   
}



alert("End");