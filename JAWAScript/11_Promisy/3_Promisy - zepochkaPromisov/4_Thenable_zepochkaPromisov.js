/* JawaScript - 4_Thenable_zepochkaPromisov
Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод .then, 
такие объекты называют «thenable», и этот объект будет обработан как промис.

*/
'use strict';

alert("Start 4_Thenable_zepochkaPromisov");

//Какой-то класс, совместимый с методом .then
class Thenable {     
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {   // !!! специально прописан метод .then
    // alert(resolve); // function() { native code }
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}


new Promise(resolve => resolve(1))  // допустим, результат ф-и в промисе =1

  .then(result => {             
    return new Thenable(result);    // обработчиком .then возвращаем совместимый then-класс (Thenable)
  })

  .then(result => {     
    alert(result);                  // показывает 2 через 1000мс
    return new Thenable(result);
  })

  // .then(result => {     
  //   alert(result);
  // })
  .then(alert);                     // показывает 4 через 1000мс



alert("End");

