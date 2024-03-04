const gaurav ={
    name: "Gaurav Parihar",
    sayName: function (){
        console.log(this.name);
    },
};

const john ={
    name: "John Wick",
    sayName: function () {
        console.log(this.name);
    },
};

john.sayName.call(gaurav); // output: Gaurav Parihar
//  here call() is pointing to gaurav so that's why we had call Gaurav Parihar
john.sayName(); // output: John Wick
// here john is not calling to any hence it will call john function value means calling it's own context.


