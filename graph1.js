// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbor of graph[current]) { // for of use for iterating over values
//       stack.push(neighbor);
//     }
//   }
// };


 const breadthFirstPrint = (graph, source) => {
   const stack = [source];

   while (stack.length > 0) {
   const current = stack.pop();
   console.log(current);

    for (let neighbor of graph[current]) { // for of use for iterating over values
      stack.push(neighbor);
    }
  }
};



const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// depthFirstPrint(graph, 'a'); // abdfce.
breadthFirstPrint(graph, 'a');// acebdf