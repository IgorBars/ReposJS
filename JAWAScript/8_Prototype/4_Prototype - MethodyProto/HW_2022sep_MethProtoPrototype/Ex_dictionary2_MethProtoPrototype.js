/* JawaScript - Ex_dictionary2_MethProtoPrototype

*/
'use strict';
alert("Start Ex_dictionary2_MethProtoPrototype");


let dictionary = Object.create(null);

dictionary.toString = function() {
    return Object.keys(this).join(", ");
};

Object.defineProperty(dictionary, "toString", {
    enumerable: false
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

alert(dictionary); // "apple,__proto__"




alert("End");
