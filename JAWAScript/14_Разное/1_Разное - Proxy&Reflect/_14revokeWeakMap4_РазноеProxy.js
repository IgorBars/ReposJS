/* JawaScript - Proxy_Разное
Отключаемый (revocable) прокси – это прокси,
 который может быть отключён вызовом специальной функции revoke().
*/
'use strict';

alert("Start _14revokeWeakMap4_РазноеProxy");

let revokes = new WeakMap();


let DataBase = {
    data: "Важньіе данньіе",
}
let DataBase2 = {
    data: "Важньіе данньіе 2",
}

alert("Данньіе исходного об'ьекта:  " + DataBase.data);

let {proxy, revoke} = Proxy.revocable(DataBase, {});
// с єтих пор обращаемся только к проксированному об'ьекту !!!
alert("Данньіе проксированного об'ьекта:  " + proxy.data);  // Важньіе данньіе

revokes.set(proxy, revoke);

// ....

revoke = revokes.get(proxy);

revoke();

try {
    alert("Данньіе проксированного об'ьекта после отключения:  " + proxy.data);
      // Cannot perform 'get' on a proxy that has been revoked
} catch(error) {
    alert(error.message);
}





alert("End");

