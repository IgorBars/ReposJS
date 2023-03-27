/* JawaScript - func.call2_DecorFUNCAdv.    Передача контекста с пом. func.call(this, x)

func(1, 2, 3);
func.call(obj, 1, 2, 3) - при такому виклику this функції func приймає значення  obj
 */
'use strict';

alert("Start func.call2_DecorFUNCAdv");


function say(phrase) {
    alert(this.name + ': ' + phrase);
}

let user = { name: "John" };

// 'user' становится 'this', и "Hello" становится первым аргументом
say.call( user, "Hello" ); // John: Hello




alert("End");