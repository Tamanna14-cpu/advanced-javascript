// break
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < nums.length; i++) {
   if(nums[i] > 3){
       break;
   }
    
   console.log(nums[i]);
}



// continue
const num = [1, -2, 3, -4, 5, -6, -7, 8];
for (let i = 0; i < num.length; i++) {
   if(num[i] > 3){
       continue;
   }
    
   console.log(num[i]);
}



// continue mane hoilo skip kore jawa. akoi kaj while looper jonno o kora jay