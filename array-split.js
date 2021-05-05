const nums = [1, 2, 3, 4, 5, 9, 7, 8];
const part = nums.slice(2, 6); 
console.log(part);
console.log(nums);



const num = [1, 2, 3, 4, 5, 9, 7, 8];
const removed = num.splice(2, 5, 11); 
console.log(removed);
console.log(num);


const together = num.join(',');
console.log(together);



// splice 2 hoilo index num mane koto index theke suru hbe seta
// 5 hoilo deletecount mane koyta delete hbe
// r 11 hoilo oi delete hoya jaygay notun sonkkha inject kora

// slice holo vanga , r splice holo kata/kete neya.