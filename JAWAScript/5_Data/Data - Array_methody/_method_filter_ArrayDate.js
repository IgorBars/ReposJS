/* JawaScript - _method_filter_ArrayDate*/
'use strict';

alert("Start _method_filter_ArrayDate");

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // найти пользователей, для которых army.canJoin возвращает true
  
  //Тут мы используем метод объекта army как фильтр, и thisArg (army) передаёт ему контекст:

  let soldiers = users.filter(army.canJoin, army);
  //let soldiers = uusers.filter(user => army.canJoin(user));

  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23


alert("End");
