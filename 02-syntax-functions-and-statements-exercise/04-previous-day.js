function previousDay(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1); // Subtract the day here, because further down in the code it will not work.

    // date.getFullYear() - takes the year, recognizing leap years as well
    // date.getMonth() - gets the month, as months in JS count from 0
    // date.getDate() - gets the day of the month

    // date.getDay() - gets the day of the week, as days of the week in JS count from 0!!!

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);