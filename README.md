Describe calculateCost()

Test: "It will give the cost for the size of pizza"
Code: 
let myPizza = new Pizza("small", "pepperoni");
myPizza.calculateCost();
Expected Output: 9.99

Test: "It will give the cost for the pizza with toppings"
Code:
let myPizza = new Pizza("large", ["pepperoni", "sausage", "bacon", "jalapenos"]);
myPizza.calculateCost();
Expected Output: 20.74