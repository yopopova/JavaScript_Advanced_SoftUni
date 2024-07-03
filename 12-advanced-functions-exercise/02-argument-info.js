function argumentInfo() {
    // ^ If we want to not use the 'arguments' KD and return it to an array, via 'Array.from(arguments)',
    // ^ we can simply use the '...args' rest operator above the function parentheses.
    let data = {};

    // Through 'arguments' we get the arguments to the function, even though we didn't pass them above() on the name as usual.
    // Then we make them into an array with 'Array.from()' which we can loop through.
    Array.from(arguments).forEach((line) => {
        // 'line' is each element of the array.
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if (!data[type]) {
            data[type] = 0;
            // Here we create each 1 type as a key and set it to an initial value of 0.
        }

        data[type]++;
        // ^ Here we already increment the value of each type by 1.
    });

    // 'Object.keys(data)' returns the keys of the object, so in 'sort' we write 'data[b] - data[a]'.
    // to avoid writing 'data[b] - data[a]', we can directly get the values ​​with 'Object.values(data)'.
    let keys = Object.keys(data)
        .sort((a, b) => data[b] - data[a]) // If we put {} here a.k.a scope, we must return the result with 'return'.
        .forEach((key) => console.log(`${key} = ${data[key]}`)); // Can also be 'for-in'.
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
// argumentInfo({ name: 'bob' }, 3.333, 9.999);