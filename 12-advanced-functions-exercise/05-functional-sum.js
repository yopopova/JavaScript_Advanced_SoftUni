function add(num) { // The task is an example of 'curring' but with recursion. Recursion is basically a 'high-order' function.
    let sum = 0; // We make a variable that will hold the amount.

    function inner(num2) {
        sum += num2
        return inner; // This is an inner recursion that calculates the parameters being sniffed.
    }

    inner.toString = () => { // With '.toString' all 1 we attach an additional method to the function, as we attach to classes, for example.
        return sum; // A function that returns the sum itself.
    }

    return inner(num); // Naraya returns the function itself as a parameter to main, passing it the first parameter to start from.
}

console.log(add(1).toString()); // If we don't add '.toString()' here, it will give us the following result in the console: 'ƒ 1'.
console.log(add(1)(6)(-3).toString());