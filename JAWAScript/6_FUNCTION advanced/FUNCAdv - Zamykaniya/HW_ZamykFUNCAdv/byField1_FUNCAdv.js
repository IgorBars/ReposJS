/* JawaScript - Замыкания. 
// сортировка по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// сортировка по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

Сортировать по полю (name), (age)
 */
'use strict';


alert("Start byField1_FUNCAdv");

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

// function byField(fieldName) {
//     return function (item1, item2){
//         return (item1[fieldName] > item2[fieldName]) ? 1 : -1;
//     };
// }

function byField(fieldName) {

    return (item1, item2) => (item1[fieldName] > item2[fieldName]) ? 1 : -1;

}


let usersSort = users.sort(byField("age")); 
alert(usersSort[0].name);   //Pete
alert(usersSort[1].name);   //Ann
alert(usersSort[2].name);   //John

usersSort = users.sort(byField('name'));
alert(usersSort[0].name);   //Ann
alert(usersSort[1].name);   //John
alert(usersSort[2].name);   //Pete

alert("End");
