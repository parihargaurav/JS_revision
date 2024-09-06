//  async functions always returns a promise
async function getData() {
  return "Gaurav";
}
const dataPromise = getData();
console.log(dataPromise); // Promise { 'Gaurav' }

dataPromise.then((res) => console.log(res)); // Gaurav
// async and await are used to handle promises.

 // await keyword is used inside async function .