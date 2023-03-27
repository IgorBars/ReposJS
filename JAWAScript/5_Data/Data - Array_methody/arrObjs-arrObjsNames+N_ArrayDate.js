/* JawaScript - arrObjs-arrObjsNames+N_ArrayDate*/
'use strict';

alert("Start arrObjs-arrObjsNames+N_ArrayDate");


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];
alert( users ); 
/*let usersMapped = users.map(user => ({
    fullName:`${user.name} ${user.surname}`, 
    id: user.id
}));*/
//
let usersMapped = users.map(user => ({
    fullName: user.name + " " + user.surname,
    id: user.id
  }));
alert( usersMapped ); 
//
// let usersMapped = users.map(function(item) {
    
//   return {fullName: item.name + " " + item.surname,
//           id: item.id}
// }    
// );


/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин


alert("End");
