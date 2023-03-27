/* JawaScript - func_bind_DecorFUNCAdv.
    Як зберегти  this при передачі методу об'єкту

у функций есть встроенный метод bind, который позволяет зафиксировать this.
    let boundFunc = func.bind(context);
 */
'use strict';

alert("Start func_bind_DecorFUNCAdv");


let user = {
  firstName: "Вася"
};

function func() {
  alert(this.firstName);
}

// викличемо не user.func(), а func() , попередньо прив'язавши контекст this
let funcUser = func.bind(user); // Здесь func.bind(user) – это «связанный вариант» func, с фиксированным this=user.
funcUser(); // Вася


// Тепер контекст user назавжди і незмінно прив'язаний до func у funcUser
alert("End");
