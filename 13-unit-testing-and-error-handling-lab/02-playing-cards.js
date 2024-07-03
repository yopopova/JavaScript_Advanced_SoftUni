function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Faces

    const suits = { // Suits
        S: '\u2660', // ♠
        H: '\u2665', // ♥
        D: '\u2666', // ♦
        C: '\u2663' // ♣
    };

    // let a = faces.includes(face);
    // let b = suits.hasOwnProperty(suit);
    // console.log(a);
    // console.log(b);

    if (!faces.includes(face) || !suits.hasOwnProperty(suit)) { // && !suits[suit]
        // throw new Error('Invalid face or suit');
        throw new Error('Error');
    }

    let card = {
        face,
        suit,
        toString() {
            console.log(this.face + suits[this.suit]);
        }
    };

    return card;
}

// let card = playingCards('A', 'S');
// card.toString();

// let card = playingCards('10', 'H');
// card.toString();

let card = playingCards('1', 'C');
card.toString();

// let card = playingCards('1', 'Y');
// card.toString();