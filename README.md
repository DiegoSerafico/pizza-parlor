# _Pizza Parlor_

#### _Takes your pizza order and gives the price_

#### By _**Diego Serafico**_

**https://diegoserafico.github.io/pizza-parlor/**

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _JavaScript_

## Description

_In this page you enter the size of pizza and the toppings you want and get a prize for the pizza_

## Setup/Installation Requirements

* _Clone this repository_
* _Navigate to the top level of the directory_
* _Open index.html_

## Known Bugs

* _Styling not finished_
* _Can't order more than one pizza_
* _No delivery option yet_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Diego Serafico

## Contact Information

_Diego Serafico **dseraficohernandez@gmail.com**_

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