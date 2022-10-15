function tickets(data, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination=destination;
            this.price=Number(price);
            this.status=status;
        }

        toString(){
            return `Ticket { destination: '${this.destination}', price: ${this.price}, status: '${this.status}' }`;
        }
    }

    let tickets=[];

    for(let t of data){
        let [dest, pr, st]=t.split('|');
        tickets.push(new Ticket(dest, pr, st));
    }

    tickets.sort((a, b) => {
        if ( a[criteria]< b[criteria]) {
            return -1;
        }
        if (a[criteria] > b[criteria]) {
            return 1;
        }
        return 0;
    });

    return tickets;
}

console.log(tickets(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'))