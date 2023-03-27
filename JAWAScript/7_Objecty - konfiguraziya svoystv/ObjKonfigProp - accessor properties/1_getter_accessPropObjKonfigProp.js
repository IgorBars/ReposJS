/* JawaScript - 1_getter_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';

alert("Start 1_getter_accessPropObjKonfigProp");

// ГЕТТЕР - отримання значення із віртуальної властивості

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {    // функція-геттер, формує і повертає віртуальну властивість fullName по звертанню  user.fullName
      return `${this.name} ${this.surname}`;
    }
};

alert(user.fullName); // John Smith     (звертання до властивості user.fullName, а не виклик функції user.fullName() !!!  )




alert(JSON.stringify(user));  // {"name":"John","surname":"Smith","fullName":"John Smith"}
alert("End");

