/* JawaScript - 3_get_set_if_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';

alert("Start 3_get_set_if_accessPropObjKonfigProp");

let user = {
    get name() { 
      return this._name;  
    },

    set name(value) {
        if (value.length < 4) {        // контролюємо запис у властивість
            alert("Слишком короткое имя");
            return;
        }
        this._name = value;             // литерально созданная переменная _name имеет флаги:
    }                         // "value": "Alex", "writable": true, "enumerable": true, "configurable": true
};

user.name = "Alex";
alert("user.name: " + user.name);   // Alex

user.name = "Ann";
alert("user.name: " + user.name);   // Слишком короткое имя

alert("user._name: " + user._name);  // Alex
// существует широко известное соглашение о том, что свойства, которые начинаются с символа "_", являются внутренними,
// и к ним не следует обращаться из-за пределов объекта.


let descriptors = Object.getOwnPropertyDescriptors(user);
alert("descriptors: " + JSON.stringify(descriptors, null, 2)); 
/* дескриптор свойств:
{
    "name":{
        "enumerable": true,
        "configurable": true
    },
    "_name":{
        "value": "Alex",
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
}
*/

alert("End");

