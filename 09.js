var fullname = "Gaurav Parihar";

var obj = {
    fullname : "Hacked Full Name",

    props: {
        fullname: "Inside Prop",
        getFullname: function () {
            return this.fullname;
        },
    },
    
    getFullname: function () {
        return this.fullname;
    },
    
    getFullnameV2: () => this.fullname,
    
    getFullnameV3: (function (){
        return this.fullname;
    })(),             // this is a iffe function
};

console.log(obj.props.getFullname());
console.log(obj.getFullname());
console.log(obj.props.getFullnameV2); // has a property of strings.
console.log(obj.props.getFullnameV3);  // has a property of strings.

// utility of this function is important