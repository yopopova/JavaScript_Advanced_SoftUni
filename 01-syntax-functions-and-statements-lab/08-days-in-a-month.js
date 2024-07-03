function daysInAMonth(month, year) {
    let days = new Date(year, month, 0).getDate();
    // Day 0 is the last day in the previous month
    // .getDate() returns the day of the month
    console.log(days);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);