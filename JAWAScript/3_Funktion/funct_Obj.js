/* JawaScript - funct_Obj Функция создает объект*/

// однострочный комментарий

'use strict';

alert("Start funct_Obj");

//function makeuser(name, age)
//{
    //return {
        //name,
        //age
    //}
//}

function makeuser(name, age) { return { name, age }; }

let man = makeuser("Adam", 30); // Объект man

alert(man.name);
alert(man.age);

//НО НА ПРАКТИКЕ ПРИНЯТО СОЗДАВАТЬ ОБЪЕКТЫ ИЛИ ЛИТЕРАЛЬНО {...}
// ИЛИ ФУНКЦИЕЙ-КОНСТРУКТОРОМ