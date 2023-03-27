/* JawaScript - 4_get_set_split_accessPropObjKonfigProp 
- get-теры и  set-теры - дозволяють створити віртуальну властивість

*/
'use strict';

alert("Start 4_get_set_split_accessPropObjKonfigProp");

// Аксессором віртуальної властивості можна взаємодіяти з ззвичайними властивостями

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {                                // - get-тер до віртуальної властивісті fullName
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {                            // - set-тер до віртуальної властивісті fullName
      [this.name, this.surname] = value.split(" ");  // розіб'ємо value на два значення по " " і помістимо їх у масив
    }                                                // деструктивно присвоїмо змінним   name і surname
};

// set fullName запустится с данным значением, якщо звернутися як до властивості
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

alert("End");

