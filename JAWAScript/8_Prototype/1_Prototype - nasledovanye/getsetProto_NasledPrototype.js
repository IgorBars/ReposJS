/* JawaScript - getsetProto_NasledPrototype 
- Прототипы и наследование

Прототип используется только для чтения свойств.
(но гетсеттер явл исключением и (будучи заимствованньім из прототипа) записьівает свойства, но в МЕСТО ИЗНАЧАЛЬНОГО ВЬІЗОВА)
*/
'use strict';
alert("Start getsetProto_NasledPrototype");

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
};
  
let admin = {
    __proto__: user,
    isAdmin: true
};
  
alert(admin.fullName);            // John Smith (читаем)
  
  // записуємо! => в об'єкт перед крапкою => в admin, во вновь создаваемьіе незримьіе свойства  admin.name та admin.surname
admin.fullName = "Alice Cooper";
alert(admin.name);                // Alice  (в admin - до них можна звернутися, але їх не можна побачити у коді об'єкта :()
alert(admin.surname);             // Cooper (в admin)

alert(user.name);                // John  (в user)
alert(user.surname);             // Smith (в user)

alert("End");

