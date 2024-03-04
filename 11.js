// IMPORTANT QUESTION.

const gaurav = {
    name: "Gaurav Parihar",
    sayName: function(){
        console.log(this.name);
    },
};
const newFun = gaurav.sayName.bind(gaurav); // here bind means it holds the value and after 3 sec it will run the function and gets the desired output
setTimeout(newFun, 3*1000); // output after 3 sec we got - Gaurav Parihar.
// or we can run it as maing closure function.
setTimeout(() => gaurav.sayName(), 3 * 1000);
//  output : Gaurav Parihar