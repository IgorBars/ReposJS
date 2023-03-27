/* JawaScript - funct_Exersise_2_Promise*/

// однострочный комментарий

'use strict';



function showPrimes(n)
{
    let counterPrime = 1;
    let counterCircle;
    nextPrime: for(let i=2; i <= n; i++)
    {
        counterCircle = i;
        for(let k=2; k < i; k++)
        {
            //alert(` i=${i} k=${k}`);
            if(i % k == 0) continue nextPrime;
        }
        alert(`${counterPrime}-е простое число: ${i}`);
        counterPrime++
    }
    alert(`Цикл окончен на i=${counterCircle}`);
}

showPrimes(prompt("Введите предельное число диапазона", 10));