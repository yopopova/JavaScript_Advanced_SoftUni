function colorize() {
    // Solution 1

    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    // ^ Thus we take all rows from the table that are even. With 'td' we take the contents of each line.
    // ^ This collection is 'NodeList'.

    // rowElements.forEach((x) => {
    //     x.style.backgroundColor = 'teal';
    // });
    // ^ Here we need to loop through 'rowElements' to change the background color of the elements because it is of type object.


    // Solution 2

    let rowElements = document.getElementsByTagName('tr');
    // ^ This returns 'HTML Collection'.
    let rows = Array.from(rowElements); // We turn it into an array.

    rows.forEach((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}