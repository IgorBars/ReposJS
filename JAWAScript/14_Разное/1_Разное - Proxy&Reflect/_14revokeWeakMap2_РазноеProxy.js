/* JawaScript - Proxy_Разное
Отключаемый (revocable) прокси – это прокси,
 который может быть отключён вызовом специальной функции revoke().
*/
'use strict';

alert("Start _14revokeWeakMap2_РазноеProxy");

let revokes = new WeakMap();

let database = {
    data: "Важные данные"
};
alert(database.data); // Важные данные

// proxy, revoke - неизменньіе ключевьіе слова !!!
let {proxy, revoke} = Proxy.revocable(database, {});

revokes.set(proxy, revoke);

alert(proxy.data); // Важные данные (обращаемся к проксированому об'ьекту)

revoke = revokes.get(proxy);

revoke();

try {
    alert(proxy.data); // Cannot perform 'get' on a proxy that has been revoked
} catch(er) {
    alert(er.message);
}



alert("End");

