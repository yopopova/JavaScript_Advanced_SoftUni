class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            // ^ We check if the 'condition' value is there as a property above in the 'priceForTheCamp' object.
            // ^ If there is no such value as property, it will return 'undefined' and enter the check to throw an error.

            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.priceForTheCamp[condition] > money) {
            // ^ Here via 'this.priceForTheCamp[condition]' we get the value of the key, NOT the key itself, but its value!!!
            // We check that the money of the particular student/pupil is not less than the required amount for the camp.
            return 'The money is not enough to pay the stay at the camp.';
        }

        if (this.listOfParticipants.some(x => x.name === name)) {
            // ^ This is how we check if a participant name is already contained in any of the objects in the array.
            // ^ If it returns 'true', then there is already such a participant in the array and we should return the corresponding message.
            return `The ${name} is already registered at the camp.`;
        }

        // We make 1 object that will serve as a template and in which we will fill in the participant's 'name' and 'condition'.
        // If the given participant is not in 'listOfParticipants', we add it by populating the template object with its data.
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {

        // Variant with mutating method:
        let indexOfParticipant = this.listOfParticipants.findIndex(x => x.name === name);
        // ^ We find the index of the object that contains the name of the participant we are looking for.

        if (indexOfParticipant === -1) {
            // If it returns -1, it finds no such participant.
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(indexOfParticipant, 1);
        // ^ This is how we remove the participant from the array.

        return `The ${name} removed successfully.`;


        // Variant with non-mutating method:
        // if (!this.listOfParticipants.some(x => x.name === name)) {
        // In this case 'x' plays the role of every 1 element from the array 'listOfParticipants' a.k.a represents each 1 object.
        // throw new Error(`The ${name} is not registered in the camp.`);
        // }

        // this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);
        // We have !== because the array should contain all names that are different ie. we only remove what is there.
        // return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1);
        // Here by 'find' we find the object that contains the player's name and take the whole object in the variable 'player1';

        if (!player1) {
            throw new Error('Invalid entered name/s.');
        }

        if (typeOfGame === 'Battleship') {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {
            let nameOfWinner = '';
            let player2 = this.listOfParticipants.find(x => x.name === participant2);

            if (!player2) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition !== player2.condition) { // By condition, the players must have 1 and the same 'condition'.
                throw new Error('Choose players with equal condition.');
            }

            if (player1.power > player2.power) {
                player1.wins++;
                nameOfWinner = player1.name;
                // return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins++;
                nameOfWinner = player2.name;
                // return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }

            return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins) // Sort in descending order
            .forEach(x => {
                result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`); // We print each one
            });

            return result.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());