variable  = 10;
(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo); 
console.log(variable);
var variable = 30;

//  here the output will be like the variable foo is not defined as because the foo variable is not declared , although it is in function but on global level it is not defined.  Hence the result will be error.