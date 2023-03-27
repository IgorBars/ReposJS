/* JawaScript - 1_switch */

// однострочный комментарий

'use strict';

alert("Start 1_switch");

while(1){

    let value = prompt("Введите число 0, 1, 2", 0);

    switch (value){
        case "0" :
        case "1" :
            alert("0 или 1");
        break;
        case "2" :
            alert("2");            
    }
    if(value == null) break;    // Выход при Отмена/Esc
}



alert("End");