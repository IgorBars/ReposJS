function f () {

    if(true) {

        // for (let index = 0; index < 3; index++) {
        for (var index = 0; index < 3; index++) {
            
            alert( index );
        }
    }
    
    if (true) {

        alert( "if " + index );
    }

    alert("fun " + index );
    
}

f();

alert( "out " + index ); // локальна змінна var НЕ може стати локальню!

