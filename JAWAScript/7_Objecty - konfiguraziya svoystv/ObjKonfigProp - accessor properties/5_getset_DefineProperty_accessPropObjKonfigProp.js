/* JawaScript - 5_getset_DefineProperty_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';

alert("Start 5_getset_DefineProperty_accessPropObjKonfigProp");

let user = {};

// аксессор на відміну від звичайної властивості має тільки два флаги:      enumerable, configurable
// Добавимо аксессор нової віртуальної властивості через Object.defineProperty
// - таким чином можна проконтролювати атрибути-флаги віртуальної властивості:     enumerable, configurable

Object.defineProperty( user, "name", {

    get() {
        return this._name;
    },
    set(value) {
        if (typeof(value) == "string") {
            this._name = value;
            return;
        }
        alert("Невірний ввід");
    }
});

user.name = 123;                    // Невірний ввід
user.name = "John";                 // John


alert(user.name);                   // John

user._name = "Ann";
alert("user._name: " + user._name); // Ann
// существует широко известное соглашение о том, что свойства, которые начинаются с символа "_", являются внутренними,
// и к ним не следует обращаться из-за пределов объекта.

alert("End");

