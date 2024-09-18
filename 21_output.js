// 21
/*JSON.parse();
what this method will do;
A. Parses JSON to a JavaScript value.
B. Parses a JS object to JSON.
c. Parses any JS value to JSON.
D. Parses JSON to a JS object only.*/

/*The correct answer is:

A. Parses JSON to a JavaScript value.
Explanation:

The method JSON.parse() is used to parse a JSON string and convert it into a corresponding JavaScript value. This value could be:

    A JavaScript object (if the JSON string represents an object).
    A JavaScript array (if the JSON string represents an array).
    A number, string, boolean, or null (if the JSON string represents any of these primitive types). */



// 22
//  var name = 'Gaurav';
// function getName(){
//     console.log(name);
//      var name  = 'Parihar';
// }
// getName(); // undefined
// here in function it will solve local scope then global scope

// 22
// let name = 'Gaurav';
// function getName(){
//     console.log(name);
//      let name  = 'Parihar';
// }
// getName(); // Cannot access 'name' before initialization

//23
// let name = 'Gaurav';
// function getName(){
//     console.log(name);
//      //let name  = 'Parihar';
// }
// getName(); // Gaurav
// let scope is block  scope level{}.
/*Summary:

    var: Function-scoped, can be redeclared, hoisted and initialized to undefined.
    let: Block-scoped, no redeclaration, hoisted but not initialized.
    const: Block-scoped, no reassignment, must be initialized at declaration.

 */


// 24
// console.log(`${(x => x)('I love')} to program`);// I love to program


/*Explanation:

    Arrow function:
        (x => x) is an arrow function that takes one argument x and returns x. In short, it's an identity function.
        The function is immediately invoked with the argument 'I love'.

    Template literal:
        ${...} inside a template literal evaluates the expression inside it.
        (x => x)('I love') evaluates to 'I love'.

    Result:
        The full string becomes "I love to program".
        console.log() prints it.

Short explanation:

The arrow function (x => x) returns 'I love', and this value is inserted into the template literal, resulting in the output: "I love to program". */

// 25
// function should be 6
// function sumValues(x, y, z){
//     return x + y + z;
// }
// console.log(sumValues(...[1,2,3])) // 6 => this is way of doing


// 26
// const name = 'Coder gaurav';
// console.log(!typeof name === 'object') //false
// console.log(!typeof name === 'string')// false
// console.log(!typeof name === false)// true

// here js executes from let to right so the typeof name is true but the negation (!) makes it false

// 27
// const name = "Suboff";
// const age = 23;
// console.log(isNaN(name)); //true
// console.log(isNaN(age)); //false

//29
// let data = [2, 4, 5, 6, 4]
// // remove first element from array
// data.shift();
// console.log(data); 4, 5, 6,4



// 30
// let data = [2, 4, 5, 6, 4]
// // remove last element from array
// data.pop();
// console.log(data); // [ 2, 4, 5, 6 ]



// 33 
// let data = "true";
// console.log(typeof !data);// boolean
// console.log(typeof data);// string



// // 36
// let data = ["anil", "peter", "harry"];
// delete data[1];
// console.log(data); // ["anil", empty, "harry"]
// console.log(data.length) // 3


// 40
// let a =2;
// setTimeout(()=>{
//     console.log(a) // 100
// }, 0);

// a = 100;


/*Here’s what happens step by step:

1. let a = 2;`** — A variable `a` is declared and initialized to `2`.

2. setTimeout(() => { console.log(a); }, 0);`** — A `setTimeout` is scheduled with a delay of `0` milliseconds, meaning the callback function (`console.log(a)`) will be executed after the current synchronous code finishes. However, this does **not** run immediately—it is put into the event loop's task queue.

3. a = 100;`** — The value of `a` is updated to `100` before the `setTimeout` callback gets executed.

4. When the synchronous code finishes, the event loop picks up the `setTimeout` callback from the task queue, and **by this time**, the value of `a` has already been changed to `100`.

5. **Output**: `100` is logged to the console, because the `console.log(a)` inside `setTimeout` reflects the updated value of `a` at the time of execution, not the initial value.

### Key Concept:
- **Asynchronous behavior**: The `setTimeout` callback is executed after the current call stack finishes, so the value of `a` reflects its most recent change. */




// // 45
//  let a = 2;
//  let b = 2; 
//  let c = 3;
//  console.log(a === b === --c); false
/*Let's break down the expression `a === b === --c` step by step:

### Initial Values:
- `a = 2`
- `b = 2`
- `c = 3`

### Step-by-Step Evaluation:

1. **`--c`**: The `--` (decrement operator) reduces the value of `c` by 1 before it is used.
   - `--c` changes `c` from `3` to `2`.

2. **`a === b`**: 
   - Now, `a === b` is evaluated.
   - Since both `a` and `b` are `2`, this evaluates to `true`.

3. **`true === --c`**:
   - Now, you have `true === 2` (since `--c` has already decremented `c` to `2`).
   - This comparison is `false` because `true` is a boolean and `2` is a number, and they are **not strictly equal** (`===` checks both value and type).

### Final Output:
- The final result of `a === b === --c` is `false`.

### Key Point:
The comparison `a === b === --c` is evaluated **left to right**, which is why it first evaluates `a === b` and then compares the result (`true`) with the decremented `c` (`2`), resulting in `false`.

 */


// 52

// for(var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1)};
// // 3 3 3

// 55
// console.log(!"gP"); // false
// console.log(typeof("gP")); // string

// 57
// let c = {name: "Gaurav"};
// let d ;
// d = c;
// c.name ="GP";
// console.log(d.name) // GP
// // in array data is copied not moved from one place to another . instead the value change from one location will have an impact on other location.

// 60
// let a = 3;
// let b = new Number(3);
// console.log(a == b); // true
// console.log(a === b); // false

/*Here's a short explanation of the code:

### 1. **`let a = 3;`**:
   - `a` is a **primitive number** with the value `3`.

### 2. **`let b = new Number(3);`**:
   - `b` is an instance of the `Number` object, created using the `new Number()` constructor. It's an **object**, not a primitive number.

### 3. **`console.log(a == b); // true`**:
   - The `==` operator (loose equality) compares `a` and `b` by performing **type coercion**.
   - The `Number` object `b` is converted to its primitive value (`3`), so the comparison becomes `3 == 3`, which is **`true`**.

### 4. **`console.log(a === b); // false`**:
   - The `===` operator (strict equality) compares both **value and type**.
   - `a` is a primitive number (`3`), and `b` is an object (`new Number(3)`), so the types are different, and the comparison is **`false`**.

### Summary:
- **`==`** does type conversion, so it compares the values as `3 == 3` (true).
- **`===`** checks both type and value, so it compares a primitive (`3`) with an object (`new Number(3)`) and returns `false`. */
