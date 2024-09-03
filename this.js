// // // functions are first class objects
// // // this keyword

// // // the 'this' keyword refers to the object that is currently executing or calling the function.

// // // let user = {
// // //   name: "Gaurav",
// // //   age: 23,
// // //   childObj: {
// // //     newName: "Roadside romeo",
// // //     getDetails() {
// // //       console.log(this.newName, "and", this.name); //Roadside romeo and undefined
// // //     }, // as this is pointing to current context as to move to not point to main value.
// // //   },
// // // };

// // // user.childObj.getDetails()

// // let user = {
// //     name: "Gaurav",
// //     age:222,
// //     getDetails(){
// //         const nestedArrow = () => console.log(this.name); // parent to point kar raha hai this is bar.
// //         nestedArrow();
// //     },
// // };

// // user.getDetails();




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
const user = {
    name : "Gaurav",
    greet(){
        return `Hello, ${this.name}!`; // local variable.

    },
    farewell: () =>{
        return `Goodbye, ${this.name}!`; // arrow points to global this keyword
    },
    
};

console.log(user.greet());
// Hello, Gaurav!
console.log(user.farewell());
// Goodbye, undefined!