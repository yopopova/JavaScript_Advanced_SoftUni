function squareOfStars(num) {
    if (num <= 0) {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));
        }
    } else {
        for (let i = 0; i < num; i++) {
            console.log('* '.repeat(num));
        }
    }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);