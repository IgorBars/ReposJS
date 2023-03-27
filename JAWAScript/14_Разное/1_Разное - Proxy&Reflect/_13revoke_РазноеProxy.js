/* JawaScript - Proxy_Разное                                Отключаемые прокси
Отключаемый (revocable) прокси – это прокси,
который может быть отключён вызовом специальной функции revoke().

Синтаксис:

let {proxy, revoke} = Proxy.revocable(target, handler)                   - без NEW !!!
*/
'use strict';
alert("Start _13revoke_РазноеProxy");


let object = {
    data: "Важные данные"
};

let {proxy, revoke} = Proxy.revocable(object, {});              // отключаемый прокси, без ловушек

// передаём прокси куда-нибудь вместо оригинального объекта...
alert(proxy.data); // Важные данные

// позже в коде
revoke(); // специальная функция, отключающая об'ьект proxy

// прокси больше не работает (отключён)
try {
    alert(proxy.data); // Ошибка - нет такого proxy
} catch (er) {
    alert(er.message);//Cannot perform 'get' on a proxy that has been revoked
}

//Вызов revoke() удаляет все внутренние ссылки на оригинальный объект из прокси, 
//так что между ними больше нет связи, и оригинальный объект теперь может быть очищен сборщиком мусора.



alert("End");

