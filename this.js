// // // functions are first class objects
// // // this keyword

// // // the 'this' keyword refers to the object that is currently executing or calling the function.

// implicit binding
// let user = {
//   name: "Gaurav",
//   age: 23,
//   childObj: {
//     newName: "Roadside romeo",
//     getDetails() {
//       console.log(this.newName, "and", this.name); //Roadside romeo and undefined
//     }, // as this is pointing to current context as to move to not point to main value.
//   },
// };

//  user.childObj.getDetails()

// let user = {
//     name: "Gaurav",
//     age:222,
//     getDetails(){
//         const nestedArrow = () => console.log(this.name); //Gaurav// parent to point kar raha hai this is bar.
//         nestedArrow();
//     },
// };

// user.getDetails();

// // Q1 output question.

// const user = {
//     firstName: "Gaurav",
//     getName(){
//         const firstName = "Gaurav 4";
//         return this.firstName;
//     },
// };
// console.log(user.getName()); // Gaurav

// imp q
// const user = {
//   name: "Gaurav",
//   greet() {
//     return `Hello, ${this.name}!`; // local variable.
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}!`; // arrow points to global this keyword
//   },
// };

// console.log(user.greet());
// // Hello, Gaurav!
// console.log(user.farewell());
// // Goodbye, undefined!

// object binding in js  2 types 1. implicit and explicit
// . implicit binding is invoked by applying or invoked with .(dot) notation.
// explicit  binding -  call bind and apply


/*the function is called indirectly through some other object, where the function is a property. 
The this keyword inside the function refers to the object from which the function is called. */


// Output of q;

var length = 4

function callback(){
    console.log(this.length);
}

const object = {
    length: 5, 
    method(){
        console.log(arguments);
        arguments[0]();
    },
};
object.method(callback, 2, 3);// 3 // [Arguments] { '0': [Function: callback], '1': 2, '2': 3 }  