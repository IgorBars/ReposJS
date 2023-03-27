/* JawaScript - arrObjs-arrObjsNames+Names_Array*/
'use strict';

alert("Start objInObj_ArrayMethodsHomework");


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

// let usersMapped = users.map(function(item) {

//     return {fullName: item.name + " " + item.surname,
//             id: item.id};
//   }    
// );

let usersMapped = users.map(item => ({
    fullName: item.name + " " + item.surname,
    id: item.id
})
);

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

// usersMapped.forEach(item => alert(item.id + " " + item.fullName));



alert("End");
