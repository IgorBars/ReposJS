/* JawaScript - Ex_dictionary_MethProtoPrototype

*/
'use strict';
alert("Start Ex_dictionary_MethProtoPrototype");


let dictionary = Object.create(null, {

    "toString": {
        writable: true,
        enumerable: false,
        configurable: true
    }
});

dictionary.toString = function() {

    return Object.keys(this).join(", ");
};

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

alert(dictionary); // "apple,__proto__"




alert("End");

