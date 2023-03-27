/* JawaScript -     HW_toJSON_parse_JSONDate   JSON   

Преобразуйте объект в JSON, а затем обратно в обычный объект
*/
'use strict';

alert("Start HW_toJSON_parse_JSONDate");

let user = {
    name: "Василий Иванович",
    age: 35
};

let JSONuser = JSON.stringify(user);
alert(JSONuser);

let Parseuser = JSON.parse(JSONuser);
alert(Parseuser);
alert(Parseuser.name);

alert("End");
