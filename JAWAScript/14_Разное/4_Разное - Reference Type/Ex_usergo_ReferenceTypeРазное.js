/* JawaScript - Ex_usergo_ReferenceTypeРазное

*/
'use strict';

alert("Start Ex_usergo_ReferenceTypeРазное");

let user = {
    name: "John",
    go: function() { alert(this.name) }
};

// user.go();    // John

(user.go)();  // John


/*
круглые скобки вокруг (user.go) ничего не значат. Обычно они определяют последовательность операций (оператор группировки), 
но здесь вызов метода через точку . срабатывает первым в любом случае, поэтому группировка ни на что не влияет.
*/




alert("End");

