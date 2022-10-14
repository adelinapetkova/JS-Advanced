function printDeckOfCards(cards) {
    let areInvalidCards=false;
    let validCards=[];
    for(let card of cards){
        let face;
        if(card.length==2){
            face=card.slice(0, 1);
        }else{
            face=card.slice(0, 2);
        }
        let suit=card.slice(-1);

        try{
            let currentCard=createCard(face, suit);
            validCards.push(currentCard.toString());
        }catch(err){
            console.log(err.message);
            areInvalidCards=true;
            break;
        }
    }

    function createCard (face, suit){
        validFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        validSuits={'S':'\u2660', 'H':'\u2665', 'D':'\u2666', 'C':'\u2663'};

        if(validFaces.indexOf(face)==-1 || validSuits[suit]==undefined){
            throw new Error("Invalid card: "+face+suit);
        }

        return {
            face,
            suit: validSuits[suit],
            toString(){
                return this.face+this.suit;
            }
        }
    }

    if(!areInvalidCards){
        console.log(validCards.join(" "));
    }
    
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);