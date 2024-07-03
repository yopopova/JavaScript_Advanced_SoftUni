class Hex {
    constructor(value) {
        this.value = value;
    }

    toString() { // This is where we say what number system we want it to output to us.
        return '0x' + this.value.toString(16).toUpperCase();
        // ^ The string must start with '0x', adding the value in 16-byte uppercase code.
    }

    valueOf() {
        return this.value; // We just return the value.
    }

    plus(input) {
        if (typeof input === 'object') {
            let result = this.value + input.value; // 'input' is the object that comes from outside and 'value' is the key of that object to get the value of the key.
            return new Hex(result);
        } else {
            let result = this.value + input; // Update the value with the input.
            return new Hex(result); // And we return a new class 'Hex' with 'result'.
        }
    }

    minus(input) {
        // ^ Same logic as for 'plus' but reversed.
        if (typeof input === 'object') {
            let result = this.value - input.value;
            return new Hex(result);
        } else {
            let result = this.value - input;
            return new Hex(result);
        }
    }

    parse(number) {
        return parseInt(number, 16); // 'parseInt()' can convert to different number systems.
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));