/* JawaScript - _РазноеProxy

*/
'use strict';

alert("Start _14revokeWeakMap5_РазноеProxy");

let Datebase = {
    date: "Важньіе данньіе",
}
alert(Datebase.date); // Важньіе данньіе

let revoke_WeakMap = new WeakMap();

let {proxy, revoke} = Proxy.revocable(Datebase, {});

revoke_WeakMap.set(proxy, revoke);

// ...
alert(proxy.date); // Важньіе данньіе

revoke = revoke_WeakMap.get(proxy);

revoke(); // отключение прокси

try {
    alert(proxy.date); // Ошибка, прокси отсутствует
} catch(error) {
    alert(error.message); // Cannot perform 'get' on a proxy that has been revoked
}



alert("End");

