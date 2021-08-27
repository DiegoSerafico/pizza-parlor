const availableToppings = {pepperoni: 1.0, sausage: 1.0, bacon: 1.0, pineapple: 0.5, extra_cheese: 2.0, jalapenos: 0.75, salami: 1.0, olives: 0.5, parmesan: 0.5};

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

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input[name='pizzaSize']:checked").val();
    let toppingsSelected = []
    $("input[name='topping']:checked").each(function() {
      toppingsSelected.push($(this).val());
    });
    let newPizza = new Pizza(pizzaSize, toppingsSelected)
    ;
    $("#size").text(pizzaSize);
    $("#toppings").text(toppingsSelected.join(" "));
    $("#cost").text(newPizza.calculateCost());
  });
});