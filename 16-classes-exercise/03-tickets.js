function ticketSorter(tickets, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    tickets.map((el) => {
        let [destination, price, status] = el.split('|');
        console.log(destination);
        price = Number(price);

        let currTicket = new Ticket(destination, price, status);
        result.push(currTicket);
    });

    // result.forEach((el) => console.log(el));

    return result.sort((a, b) => {
        if (typeof a[sorting] === 'number') { // 'a[sorting]' - the word that comes as a parameter from the 'sorting' variable is an object key, so we write it in [].
            return a[sorting] - b[sorting]; // If our criteria is 'price', we sort by numbers in ascending order.
        } else {
            return a[sorting].localeCompare(b[sorting]); // If our criteria is 'destination' or 'status', we sort alphabetically.
        }
    });
}

ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');