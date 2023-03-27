/* JawaScript - Замыкания. 
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера.
 */
'use strict';


alert("Start makeArmy1_FUNCAdv");
function makeArmy() {
    let shooters = [];
    
    // let i = 0; // переменная объявлена вне блока создания функций
    for (let i = 0; i < 10; i++) { // переменная объявлена ВНУТРИ блока создания функций
        let shooter = function () { alert( i ); };
        shooters.push(shooter);   
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


alert("End");
