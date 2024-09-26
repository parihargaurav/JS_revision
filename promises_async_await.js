// javascript runs synchronous code first then asynchronous code second
// async code

/*console.log("start");
setTimeout(() => {
    console.log("I will get a job");
    }, 0);

    console.log('give');
start
give
I will get a job*/

// A Callback is a function  passed as an argument to another function.
//This technique allows a function to call another function.

// console.log("ok");
// function importantAction(username){
//     setTimeout(()=> {
//         return `${username}`;
//     }, 100);
// }
// const message = importantAction("GP");
// console.log(message);// as the async function is called at , so at this moment value is undefined.

// console.log("GddddddddP")
/*ok
undefined
GddddddddP */

// To solve this we use callbacks

// console.log("Done");
// function importantAction(username, cb){
//     setTimeout(()=> {
//         cb( `${username}`);
//     }, 100);
// }
// const message = importantAction("GP", function (message){   //here message  function passed to  important Action function.
//     console.log(message);
// });

// console.log("Gaurav")
/*Done
Gaurav
GP */

// Callback Hell, also known as "Pyramid of Doom", refers to a situation where multiple nested callbacks make the code more difficult to read and understand.

// to solve this we use Promises.

/* A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
A JavaScript Promise object can be in one of three states: pending , resolved , or rejected .*/

// console.log("1");

// // promises
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) {
//       resolve("done");
//     } else {
//       reject(new Error("error"));
//     }
//   }, 2000);
// });
// //to run a promise
// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("2");
/*1
2
done */


/*Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. */

/* Promise Combinators - 1. Promise.all()- all should be in resolve to run.
  2. Promise.race()- if any one which is faster either resolve or reject will execute first  
  3. Promise.allSettled()- like promise.all it will return all including the promises that are failed 
   4.Promise.any()- return the first fulfills condition that only return that'it

//-----------------------------------------------------------------------------------------------------------------*/


// Q1
// console.log("start");//synchronous operation
// const promise1 = new Promise((resolve, reject)=> {
//     console.log(1);//synchronous operation
//     console.log("Gaurav")//synchronous operation
//     resolve(2);
// });
// promise1.then((res) =>{
//     console.log(res); // asynchronous operation
// });
// console.log("end");//synchronous operation
// // in js synchronous operation will execute first then asynchronous operation.


// Q2 promise chaining
// function job(){
//     return new Promise(function (resolve, reject){
//         reject();
//         resolve();
//     });
// }

// let promise = job();
// promise
//     .then(function (){
//         console.log("success 1");
//     })
//     .then(function (){
//     console.log("success 2");
//     })
//     .then (function(){
//         console.log("Success 3")
//     })
//     .catch(function(){
//         console.log("error 1")
//     })
//     .then(function(){
//         console.log("success 4")
//     })        // here as it given it will reject the function so the catch function will call then after the rest will call
//     // error 1
//     //success 4


// // Q3 Promise Chaining
// const firstPromise = new Promise((resolve, reject)=> {
//     resolve("First");
// });
// const secondPromise = new Promise((resolve, reject)=> {
//     resolve(firstPromise);
// });

//  secondPromise
//  .then((res) => {
//     return res;
//  })
//  .then((res) => console.log(res));// First


// // Q4 rewrite the code using sync/await

// async function loadJson(url){
//     let response = await fetch(url);
//     if(response.status == 200){
//         let json = await response.json();
//         return json;
//     }
//     throw new Error(response.status);
// }
// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
// console.log(err));


