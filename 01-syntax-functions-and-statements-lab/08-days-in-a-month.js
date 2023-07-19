function daysInAMonth(month, year) {
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}