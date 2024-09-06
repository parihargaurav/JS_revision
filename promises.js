// promises  use to handle async operations in js

const cart = ["shoes", "pants", "kurta"];

createOrder(car, function (orderId){
    proceedToPayment(orderId);
});

/*Here’s what’s happening:

    cart is an array representing items in a shopping cart.
    createOrder(cart, callback) is a function (presumably asynchronous) that takes the cart items and a callback function as arguments.
    Once the order is created, the function createOrder invokes the callback with the orderId.
    Inside the callback, the proceedToPayment(orderId) function is called with the generated orderId to proceed with payment processing.

This approach uses callbacks to handle the asynchronous nature of the createOrder function. */

const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});

/*Here’s what’s happening in the Promise-based approach:

    createOrder(cart) returns a Promise. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
    promise.then(...) is used to define what should happen after the asynchronous operation is successful. The then() method is called when the Promise is resolved (i.e., when the order is created).
    Inside the then() method, the orderId is passed to proceedToPayment(orderId), similar to the callback approach. */


    // fetch() - function given by browser to make api calls

    // 3 stages of promises-\
    // 1. pending, fulfilled,  rejected
    // promises is an object.