// what is call
// var obj = {name: "Gaurav"};
// function sayHello(){

//     return "Hello " + this.name; // here this will point to window object
// }
// console.log(sayHello.call(obj)); // Hello Gaurav

// With the call() method, we can write a method that can be used on different objects.

/*The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array. */

// what is apply

// var obj = { name: "Gaurav" };
// function sayHello(age, profession) {
//   return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// console.log(sayHello.apply(obj, [ 24, "Engineer"])); // Hello Gaurav is 24 and is an Engineer



// what is bind

/*With the bind() method, an object can borrow a method from another object. */


//  var obj = { name: "Gaurav" };
// function sayHello(age, profession) {
//   return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(24, "Engineer")); // Hello Gaurav is 24 and is an Engineer



