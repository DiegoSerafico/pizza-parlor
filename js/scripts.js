const availableToppings = {pepperoni: 1.0, sausage: 1.0, bacon: 1.0, pinneaple: 0.5, extra_cheese: 2.0, jalapenos: 0.75, salami: 1.0, olives: 0.5, parmesan: 0.5};

const availableSizes = {small: 9.99, medium: 12.99, large: 16.99};

function Pizza (size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function() {
  let cost = 0.0;
  cost += availableSizes[this.size];
  this.toppings.forEach(function(element) {
    cost += availableToppings[element];
  });
  return cost;
}

let myPizza = new Pizza("large", ["pepperoni", "sausage", "bacon", "jalapenos"]);

