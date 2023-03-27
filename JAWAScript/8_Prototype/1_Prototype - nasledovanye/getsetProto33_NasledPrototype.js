/* JawaScript - getsetProto33_NasledPrototype 
- Прототипы и наследование

Прототип используется только для чтения свойств. 
(но гетсеттер явл исключением и (будучи заимствованньім из прототипа) записьівает свойства, но в МЕСТО ИЗНАЧАЛЬНОГО ВЬІЗОВА)
*/
'use strict';
alert("Start getsetProto33_NasledPrototype");

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
    name: "Alex",
    __proto__: user,
    isAdmin: true
};

let chef = {
    __proto__: admin,
    isChef: true
};

  
alert(admin.fullName); // Alex Smith    (Alex знайшов у себе в admin, Smith знайшов у прототипному ланцюжку в user)
alert(chef.fullName); // Alex Smith  (Alex знайшов у прототипному ланцюжку в admin, Smith знайшов у прототипному ланцюжку в user)
  
  // записуємо! => в об'єкт перед крапкою => в admin, во вновь создаваемьіе незримьіе свойства  admin.name та admin.surname
admin.fullName = "Alice Cooper";
//(знайшов у себе в admin властивість name і поміняв      Alex => Alice)
//(не знайшов у себе в admin властивість surname і добавив собі в admin віртуальну властивість surname = Cooper)
alert(admin.name);                // Alice  
alert(admin.surname);             // Cooper 

alert(chef.fullName); // Alice Cooper  (Alice знайшов у прототипному ланцюжку в admin,
                                    // віртуальну властивість surname = Cooper знайшов у прототипному ланцюжку в admin)

chef.fullName = "Yuriy Borysovych";
alert(chef.name);                // Yuriy
alert(chef.surname);             // Borysovych

alert(user.name);                // John  (в user)
alert(user.surname);             // Smith (в user)


// читає властивість - свою, а якщо нема, шукає властивість поступово вище і вище по ланцюжку наслідування
// записує у властивість - у свою, а якщо нема, створює у себе віртуальну


/*То есть, для об'ьекта в прототипной цепочке:
- при чтении свойства JS читает свойство у себя, а если его нет - ищет, постепенно поднимаясь все вьіше по цепочке прототипов;
- при записи свойства JS записьівает свойство у себя, даже если его нет (создает виртуальное - его не видно в тексте кода);
- при чтении свойства, когда JS ищет по цепочке прототипов, он остановится и прочитает єто виртуальное свойство.
*/

alert("End");

