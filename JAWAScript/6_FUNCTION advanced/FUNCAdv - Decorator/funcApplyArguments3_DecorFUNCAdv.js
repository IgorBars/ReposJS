/* JawaScript - funcApplyArguments3_DecorFUNCAdv.    Передача контекста с пом. func.apply(context, arguments);

            arguments - ЗАСТАРІЛЕ використання прихованих аргументів (ПСЕВДОМАСИВ)!!!
 */
'use strict';

alert("Start funcApplyArguments3_DecorFUNCAdv");


let john = { 
    name: "John", 
    age: 30,
    say: function(phrase1, phrase2) {
        alert(phrase1 + ', ' + this.name + "! " + phrase2 + this.age);
    }
};

function hash (args) {
    return args[0] + "," + args[1]; // розраховуєм на 2 аргументи
}


function Decorator(func, hashfunc) {
    return function wrapper() {
        
        let key = hashfunc(arguments);  alert("key: " + key);    // Hello, Tи виглядаєш на 

        return func.apply(this, arguments);
    }
}

john.say = Decorator(john.say, hash);

john.say("Hello", "Tи виглядаєш на ");                     // Hello, John! Tи виглядаєш на 30




alert("End");