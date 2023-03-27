/* JawaScript - Преобразуйте объект в JSON, а затем обратно в обычный объект */
'use strict';

alert("Start HW_JsonObj1_JSON_Date");

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJ = JSON.stringify(user);
alert("userJ:  " + userJ);  //  {"name":"Василий Иванович","age":35}

let userP = JSON.parse(userJ);
alert("userP:  " + userP.age);  //  35

alert("End");
