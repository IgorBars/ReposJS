/* JawaScript - Замыкания 
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
*/
'use strict';


alert("Start HW_shooters_ZamykFUNCAdv");

function makeArmy() {
    let shooters = [];
    
    // let i = 0;                   // i - локальна змінна для лексичного оточення виклику makeArmy()
    // while (i < 10) {             // тут змінна і не є локальною змінною лексичного оточення циклічної ітерації

      // об'являємо змінну (і) у блоці коду for, щоб кожне значення її ітерації відповідало ЛО кожної створюваної shooter
    for (let i = 0; i < 10; i++) {

      let shooter = function() { // місце народження функції shooter (у блоці коду for)

        alert( i );
// якщо змінна (і) об'явлена не у блоці коду - при виклику shooter її буде знайдено не у рідному ЛО із потрібним значенням,
// , а зовні - із зовсім іншим значенням, не відповідним Лексичному Оточенню визиваємої shooter

// Тобто, локальна змінна повинна належати (об'являтися) у тому самому Лексичному Оточенні, що й вкладена ф-я shooter
      };

      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10

alert("End");