/* JawaScript - исп. в литер. нотации коротких свойств*/
'use strict';

let name = "Tom";
let age = 30;

let user =  {        // литеральная нотация через глобальные переменные
    name,            // короткое свойтво
    age
}; 
alert(user.name);
alert(user.age);

alert("name" in user);// проверка наличия ключа-имени-идентификатора
alert("blabla" in user);

