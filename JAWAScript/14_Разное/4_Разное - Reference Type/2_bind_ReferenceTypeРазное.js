/* JawaScript - 2_bind_ReferenceTypeРазное
                                            func.bind(user)
*/
'use strict';

alert("Start 2_bind_ReferenceTypeРазное");


let user = {
    name: "Джон",
    hi() { alert(this.name); },
    bye() { alert("Пока"); }
};

user.hi();

// (user.name == "Джон" ? user.hi : user.bye)();            // Ошибка
(user.name == "Джон" ? user.hi.bind(user) : user.bye)();    //  Джон




// let hi = user.hi;
// hi(); // Ошибка, потому что значением this является undefined

let hi = user.hi;
hi.bind(user);
hi(); // Джон

/*
Щоб не згубити контекст використовуєм костиль func.bind(user)
*/




alert("End");

