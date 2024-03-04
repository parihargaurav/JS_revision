const obj = Object.create ({
    height: 30,
});
//  here the object will store value in prototype where the value will not be deleted

console.log(obj.height); // output: 30

delete obj.height; // will not delete the value as it is in portotype

console.log(obj.height);// output: 30