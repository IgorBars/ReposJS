/* JawaScript - 2_getset_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';

alert("Start 2_getset_accessPropObjKonfigProp");

// ГЕТТЕР і СЕТТЕР  =  АКСЕССОР доступу до віртуальної властивості

let user = {

    get name() {            //  getter аксессора name
      return this._name;
    },

    // set name(value) {        //  setter аксессора name
    //     this._name = value;
    // }
    set name(value) {
      if (typeof(value) == "string") {
          this._name = value; 
          return;
      }
      alert("Невірний ввід");
    }
};

user.name = 123;        // Невірний ввід
user.name = "John";

alert(user.name);       // John 
alert(user._name);      // John (такий доступ не рекомендовано)

user._name = "Ann";     // спрацює, бо сеттер демонстраційний
alert(user.name);       // Ann 

alert("End");

