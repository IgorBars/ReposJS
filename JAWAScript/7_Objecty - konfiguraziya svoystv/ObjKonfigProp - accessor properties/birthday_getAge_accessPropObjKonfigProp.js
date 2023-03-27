/* JawaScript - birthday_getAge_accessPropObjKonfigProp 
- get-теры и  set-теры

    Якщо у об'єкті була змінна age, а згодом вирішили замінити її на birthday (але age залишити для сумісності)
*/
'use strict';
alert("Start birthday_getAge_accessPropObjKonfigProp");


// Конструктор об'єкта
function User(name, birthday) {
//function User(name, age) {                                                // раньше бьіл старьій код с age
    
    this.name = name;

    this.birthday = birthday;
    // this.age = age;

    Object.defineProperty(this, "age", {                            // сумісність з age в новому коді через геттер

        get() { return new Date().getFullYear() - this.birthday.getFullYear(); }, 
    });

    // this.age = new Date().getFullYear() - this.birthday.getFullYear();   // сумісність age та birthday в новому коді
};
// let alex = new User("Alex", 39);                                            // если бьіл старьій код с age
let alex = new User("Alex", new Date(1967, 3, 21));

alert("alex.name: " + alex.name);
alert("alex.birthday: " + alex.birthday);
alert("alex.age: " + alex.age);

// Object.defineProperty(this, "age", {                            // краща сумісність з age

//     get() { return typeof this.birthday === "object" ?
//         new Date().getFullYear() - this.birthday.getFullYear() :
//         this.birthday;
//     }, 
// });



alert("End");

