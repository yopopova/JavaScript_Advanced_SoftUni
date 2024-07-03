function getFibonator() { // The task is an example of 'closure'.
    let [a, b] = [0, 1];
    // ^ Corresponds to 'let a = 0' and 'let b = 1'.

    return function () {
        let c = a + b;
        a = b; // We assign 'a' the value of 'b' - so the second value becomes the first.
        b = c; // Assign 'b' the value of 'c' - so the sum of 'a' and 'b' becomes the second value.
        return a;
    }
}

let fib = getFibonator(); // <-- Example of a 'function expression' - a function that sits in a variable.
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13