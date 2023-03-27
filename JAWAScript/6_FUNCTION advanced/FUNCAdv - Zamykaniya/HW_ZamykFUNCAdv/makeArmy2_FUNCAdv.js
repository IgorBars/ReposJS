/* JawaScript - Замыкания. 
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера.
 */
'use strict';


alert("Start makeArmy2_FUNCAdv");

  
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let k = i;
        let shooter = function() { // функция shooter
            alert( k ); // должна выводить порядковый номер
        };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
alert("End");
