/* JawaScript - Преобразуйте объект c вложенным объектом в JSON, 
а затем обратно  */
'use strict';

alert("Start HW_JsonIncludedObj1_JSON_Date");


let user = {
    name: ["Василий", "Иванович"],
    age: 35,
    room: {
        number: 24
    }
};

let userJSONArr = JSON.stringify(user, ["name", "age", "room", "number"]);
alert("userJSONArr:  " + userJSONArr);  
//{"name":["Василий","Иванович"],"age":35,"room":{"number":24}}

let userJSONFunc = JSON.stringify(user, function replacer(key, value) {
    return key = value;
});
alert("userJFunc:  " + userJSONFunc); 
//{"name":["Василий","Иванович"],"age":35,"room":{"number":24}}

let userPars = JSON.parse(userJSONArr); 
alert("userPars.room:  " + userPars.room.number); 


let users = {
    admin: {
        name: ["Василий", "Иванович"],
        date: ["2017-11-30T12:00:00.000Z"]
    }
}
let usersJ = JSON.stringify(users);
alert("usersJ:  " + usersJ); 
//{"admin":{"name":["Василий","Иванович"],"date":["2017-11-30T12:00:00.000Z"]}}

userPars =  JSON.parse(usersJ, function reviver(key, value) {
    if (key == "date")  return new Date(value);
       else return value;
});
alert("userPars(2):  " + userPars.admin.date);  //Thu Nov 30 2017 14:00:00

alert("End");
