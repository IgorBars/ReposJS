/* JawaScript - func.call_DecorFUNCAdv.     Передача контекста с пом. func.call(this, x)

func(1, 2, 3);
func.call(obj, 1, 2, 3) - при такому виклику this приймає значення:  obj (прив'язуємо контекст obj)
 */
'use strict';

alert("Start func.call_DecorFUNCAdv");

function sayHi() {
    alert(this.name);
}
  
let user = { name: "John" };
let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
sayHi.call( user ); // John
sayHi.call( admin ); // Admin





alert("End");