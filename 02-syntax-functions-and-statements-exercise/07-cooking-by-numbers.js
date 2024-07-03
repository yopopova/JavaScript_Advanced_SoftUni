function cookingByNumbers(num, p1, p2, p3, p4, p5) {
    let inputAsNumber = Number(num);
    let arrOfCommands = [p1, p2, p3, p4, p5];
    let arrOfCommandsL = arrOfCommands.length;

    let chop = function () {
        return inputAsNumber / 2;
    };

    let dice = function () {
        return Math.sqrt(inputAsNumber);
    };

    let spice = function () {
        return inputAsNumber + 1;
    };

    let bake = function () {
        return inputAsNumber * 3;
    };

    let fillet = function () {
        return inputAsNumber -= inputAsNumber * 0.2;
        // return inputAsNumber * 0.8;
    };

    for (let i = 0; i < arrOfCommandsL; i++) {
        let currentCommand = arrOfCommands[i];

        switch (currentCommand) {
            case 'chop':
                inputAsNumber = chop(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'dice':
                inputAsNumber = dice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'spice':
                inputAsNumber = spice(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'bake':
                inputAsNumber = bake(inputAsNumber);
                console.log(inputAsNumber);
                break;
            case 'fillet':
                inputAsNumber = fillet(inputAsNumber);
                console.log(inputAsNumber);
                break;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');