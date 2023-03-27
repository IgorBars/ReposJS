/* JawaScript - funct_Exersise_DiffPromise*/

// однострочный комментарий

'use strict';



function showPrimes(n)
{
    let counterPrime = 1;
    let counterCircle;
    for(let i=2; i <= n; i++)
    {
        counterCircle = i;
        if(!isPrimes(i)) continue; 
        alert(`${counterPrime}-е простое число: ${i}`);
        counterPrime++
    }
    alert(`Цикл окончен на i=${counterCircle}`);
}

function isPrimes(i)
{
    for(let k=2; k <= i; k++)
    {
        if(i % k != 0 || i == k) return true;
        else return false;
    }
}

showPrimes(prompt("Введите предельное число диапазона", 10));