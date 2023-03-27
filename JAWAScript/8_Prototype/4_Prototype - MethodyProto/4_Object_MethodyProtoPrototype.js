/* JawaScript - 4_Object_MethodyProtoPrototype

*/
'use strict';
alert("Start 4_Object_MethodyProtoPrototype");


let descrObject = Object.getOwnPropertyDescriptors(Object);

alert(JSON.stringify(descrObject,  null, 4));


let descrObjectProto = Object.getOwnPropertyDescriptors(Object.prototype);

alert(JSON.stringify(descrObjectProto,  null, 4));



alert("End");

