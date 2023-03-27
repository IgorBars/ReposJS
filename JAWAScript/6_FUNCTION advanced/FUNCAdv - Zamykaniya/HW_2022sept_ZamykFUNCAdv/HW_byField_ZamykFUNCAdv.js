/* JawaScript - Замыкания 
Напишите функцию byField, которая может быть использована для сортування масиву об'єктів по їхньому полю.
*/
'use strict';


alert("Start HW_byField_ZamykFUNCAdv");

function byField(field) {

    // return function (a, b) {

    //     return (a[field] > b[field]) ? 1 : -1;
    // }
    return (a, b) => a[field] > b[field] ? 1 : -1;      // складна універсальна форма
    // return (a, b) => a[field] - b[field];            // проста форма підходить для сортування по числовому значенню
}


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// // по имени (Ann, John, Pete)
// users.sort( (a, b) => (a.name > b.name) ? 1 : -1 );
// alert(users[0].name + ", " + users[1].name + ", " + users[2].name );

// // по возрасту (Pete, Ann, John)
// users.sort( (a, b) => (a.age > b.age) ? 1 : -1 );
// alert(users[0].name + ", " + users[1].name + ", " + users[2].name );

// по имени (Ann, John, Pete)
users.sort(byField('name'));
alert(users[0].name + ", " + users[1].name + ", " + users[2].name );

// по возрасту (Pete, Ann, John)
users.sort(byField('age'));
alert(users[0].name + ", " + users[1].name + ", " + users[2].name );

alert("End");
