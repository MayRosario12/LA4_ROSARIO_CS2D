LA4
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const customerQueue = new Queue();
customerQueue.enqueue("Elaine");
customerQueue.enqueue("Althea");
customerQueue.enqueue("Angelo");
customerQueue.enqueue("Lito");
customerQueue.enqueue("Engelbert");

function serveCustomer() {
  let customerNumber = prompt("Enter the number of the customer to be served:");
  if (customerNumber > customerQueue.items.length || customerNumber <= 0) {
    alert("Invalid customer number. Please enter a valid number.");
    return;
  }
  let servedCustomer = customerQueue.dequeue();
  alert(Serving customer ${servedCustomer} (Number ${customerNumber}).);
  console.log(Updated Queue: ${customerQueue.printQueue()});
}

// Start the service process
alert("Welcome to the Customer Service Queue!");
while (!customerQueue.isEmpty()) {
  serveCustomer();
}
alert("All customers have been served!");