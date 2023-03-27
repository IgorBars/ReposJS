/* JawaScript - вернуть массив, состоящий только 
из двух первых пользователей */
'use strict';

alert("Start find_ArrayDate");

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из пользователей id < 3
let someUsers = users.filter(item => item.id < 3);

let user = someUsers.find(item => item.id == 1); 
//let user = {id: 1, name: "Вася"}; 
alert(someUsers.length); // 2
alert("user.name " +  user.name); //  Вася

alert("End");
