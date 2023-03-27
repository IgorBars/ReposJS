function count(num1, num2, mark) {

    let result;

    switch (mark) {
       case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break; 

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;
    }

    return result;
}

alert( count(3, 2, "+") );

alert( count(3, 2, "-") );

alert( count(3, 2, "*") );

alert( count(3, 2, "/") );