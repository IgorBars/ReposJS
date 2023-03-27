/* JawaScript - NFE. 

 */
'use strict';

alert("Start Counter_NFEFUNCAdv");

function makeCounter() {

    function counter() {   
        return counter.count++;
    }
    counter.count = 0;
    
    counter.set = function (num){
        counter.count = num;
    };

    counter.decrease = function (){
        counter.count--;
    };
    
    return counter;
}

let counter = makeCounter();


  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  counter.decrease(); // уменьшить значение счётчика на 1
  alert( counter() ); // 9 (вместо 10)

  
alert("End");