/* JawaScript - 1_switch_var */

// однострочный комментарий

'use strict';

alert("Start 1_switch");

while(1){

    let value = prompt("Введите число 1 - 5", 0);

    switch (+value){
        case 1  :
            alert("0 или 1");
        break;
        case 2 :
            alert("2");
            break;
        default:   
        break;
    }
    if(value === null) break;    // Выход при Отмена/Esc
}



alert("End");