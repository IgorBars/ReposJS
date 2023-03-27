/* JawaScript - 6_split_defineProperty_accessPropObjKonfigProp 
- get-теры и  set-теры
*/
'use strict';
alert("Start 6_split_defineProperty_accessPropObjKonfigProp");


let user = {
    name: "John",
    surname: "Smith"
};

   // добавимо аксессор fullName через Object.defineProperty
Object.defineProperty(user, 'fullName', {
    get() {         // аксессор fullName має два флаги-атрибути: enumerable: false, configurable: false
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {    // через Object.defineProperty флаги-атрибути аксессора fullName: enumerable: false, configurable: false
      [this.name, this.surname] = value.split(" ");
    }
});
  
alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname



let descriptor = Object.getOwnPropertyDescriptors(user);

alert(JSON.stringify(descriptor, null, 2));
/* дескриптор свойств:
{
    "name":{
        "value": "John",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "surname":{
        "value": "Smith",
        "writable": true,
        "enumerable": true,
        "configurable": true
    },
    "fullName":{
        "enumerable": false,
        "configurable": false
    }
}
*/

// У властивості-аксессора існують тільки два дескриптори (флаги)(атрибути):   enumerable  і  configurable     !!!
alert("End");

