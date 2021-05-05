// raw way
// const numbers = [2, 3, 4, 1, 5, 6];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);



// uses of map
// const numbers = [2, 3, 4, 1, 5, 6];

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })



// const numbers = [2, 3, 4, 1, 5, 6];

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);


// uporer functionta aro choto kore arrow function diye lekha jay
// const numbers = [2, 3, 4, 1, 5, 6];

// const result = numbers.map(x => x*x);

// console.log(result);



// filter
// const numbers = [2, 3, 4, 1, 5, 6];

// const bigger = numbers.filter(x => x > 3);

// console.log(bigger);


// find
const numbers = [2, 3, 4, 1, 5, 6];

const isThere = numbers.find(x => x >3);

console.log(isThere);
