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

    return result.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    });
}