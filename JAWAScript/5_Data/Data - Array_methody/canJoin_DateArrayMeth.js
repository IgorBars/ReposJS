/* JawaScript - canJoin_DateArrayMeth*/
'use strict';

alert("Start canJoin_DateArrayMeth");

let spOperation = {
    minAge: 22,
    maxAge: 30,
    canJoin(user) {
      return user.age >= this.minAge && user.age <= this.maxAge;
    }
};

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age <= this.maxAge;
    }
};
  
let users = [
    {age: 16},
    {age: 18},
    {age: 20},
    {age: 23},
    {age: 30},
    {age: 40}
];

let spOpSoldiers = users.filter(spOperation.canJoin, spOperation);
  
alert(spOpSoldiers.length);           // 2
for(let spSold of spOpSoldiers) {
    alert(spSold.age);               // 23  30
}

console.log(spOpSoldiers.length);    // 2
for(let spSold of spOpSoldiers) {
    console.log(spSold.age);         // 23  30
}



  // найти пользователей, для которых army.canJoin возвращает true
let armySoldiers = users.filter(army.canJoin, army);

alert(armySoldiers.length);      // 3
for(let sold of armySoldiers) {
    alert(sold.age);             // 18  20  23
}

console.log(armySoldiers.length);    // 3
for(let sold of armySoldiers) {
    console.log(sold.age);         // 18  20  23
}

alert("End");
