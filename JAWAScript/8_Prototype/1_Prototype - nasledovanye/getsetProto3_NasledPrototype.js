/* JawaScript - getsetProto3_NasledPrototype 
- Прототипы и наследование

Прототип используется только для чтения свойств. 
(но гетсеттер явл исключением и (будучи заимствованньім из прототипа) записьівает свойства, но в МЕСТО ИЗНАЧАЛЬНОГО ВЬІЗОВА)
*/
'use strict';
alert("Start getsetProto3_NasledPrototype");

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

let chef = {
    __proto__: admin,
    isChef: true
};

  
alert(admin.fullName);            // John Smith (читаем)
alert(chef.fullName);            // John Smith (читаем)
  
  // записуємо! => в об'єкт перед крапкою => в admin, во вновь создаваемьіе незримьіе свойства  admin.name та admin.surname
admin.fullName = "Alice Cooper";
alert(admin.name);                // Alice  (в admin - до них можна звернутися, але їх не можна побачити у коді об'єкта :()
alert(admin.surname);             // Cooper (в admin)

chef.fullName = "Yuriy Borysovych";
alert(chef.name);                // Yuriy
alert(chef.surname);             // Borysovych

alert(user.name);                // John  (в user)
alert(user.surname);             // Smith (в user)


/*То есть:
- JS читает свойство у себя, а если его нет - ищет, постепенно поднимаясь все вьіше по цепочке прототипов;
- JS записьівает свойство у себя, даже если его нет (создает виртуальное - его не видно в тексте кода);
- когда JS ищет по цепочке прототипов, он остановится и прочитает єто виртуальное свойство.
*/
alert("End");

