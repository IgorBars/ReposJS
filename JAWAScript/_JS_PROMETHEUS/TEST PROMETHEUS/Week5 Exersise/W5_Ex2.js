let senseOfLife = 42;

function showVariable (otherSenseOfLife) {
    
    if(otherSenseOfLife) return otherSenseOfLife;

    return senseOfLife;
}

alert(showVariable(4));

alert(showVariable());
