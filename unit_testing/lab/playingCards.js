function cardFactory(face, suit){
    validFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    validSuits={'S':'\u2660', 'H':'\u2665', 'D':'\u2666', 'C':'\u2663'};

    if(validFaces.indexOf(face)==-1){
        throw new Error("Invalid face: "+face);
    }

    return {
        face,
        suit: validSuits[suit],
        toString(){
            return this.face+this.suit;
        }
    }
}

console.log(cardFactory(1, 'C').toString());