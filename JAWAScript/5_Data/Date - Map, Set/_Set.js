/* JawaScript - Set -массив уникальных значений, так называемое «множество» 
Объект Set – это особый вид коллекции: «множество» значений (без ключей), где 
каждое значение может появляться только один раз.
*/
'use strict';

alert("Start _Set");

let fruits = new Set (["Orang", "Appl", "Grape", "Appl"]);

for(let value of fruits) alert("for_of fruits: " + value);  //Orang   Appl    Grape

fruits.forEach(value => {
    alert("fruits.forEach: " + value);                       //Orang   Appl    Grape
});


let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

let users = new Set ();
users.add(john);
users.add(pete);
users.add(mary);
users.add(john);

for(let value of users.values()) alert("for_of users.values(): " + value.name);    //John     Pete    Mary

users.forEach(value => {
    alert("users.forEach: " + value.name);                                          //John     Pete    Mary
});

alert("End"); 
