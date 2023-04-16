///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 
    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE
const summedPrice = cart.reduce((acc, sum) => acc + sum.price, 0);
console.log(summedPrice);
//////////////////PROBLEM 2////////////////////
/*  
  Write a function called `calcFinalPrice` that
  can take in `cartTotal`,`couponValue`,
  and `tax` arguments. 
  Inside the function, calculate the tax 
  on the cartTotal and add it in. Subtract
  the value of the coupon. Return the final
  number. 
  Note: the numbers passed in for `tax` will be
  decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = function (cartTotal, couponValue, tax) {
  let afterTax = cartTotal + cartTotal * tax;
  return afterTax - couponValue;
};
console.log(calcFinalPrice(20, 2, 0.6));

//////////////////PROBLEM 3////////////////////
/*  
  In this problem, you'll create a model for 
  a customer object as well as an example
  object. 
  Plan out a customer object for the cart page.
  Think about the information that a 
  restaurant would need about its customers.
  In the TEXT ANSWER area below, describe the
  properties that your customer object will have
  and why you chose those properties.
  Explain what data types each property should be
  and why you chose those data types. 
  Your object should have at least 4 properties. 
*/

/*
I chose to have a customers name, email, phone, and zip code, these are common things a restrauant  would ask because incase you want to place a reservation or book a seat.

for name, email, and phone number I will be using a string for those because those are things that don't need to be an integer, but a zip code is something that would be an example of an integer because it isn't part of a way to contact the customer.
*/

/*
  Now, create a customer object following your own
  guidelines.
*/

//CODE HERE
const customer = {
  name: "Julius Rock",
  email: "juliusrocker112@gmail.com",
  phone: "651-778-2232",
  zipCode: 55406,
};
