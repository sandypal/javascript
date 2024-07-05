// Description: Create a function called createMultiplier that takes a number as an argument and returns a new function. The returned function should take another number and multiply it by the first number.
const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); // Output: 10

function createMultiplier(num){
    return function(num2){
        return num * num2;
    }
}

// const multiplyBy2 = createMultiplier(23);
// console.log(multiplyBy2(4)); // Output: 10

// let createMultiplier =  function(num){
//     return function(num2)
//     {
//         return num * num2;
//     }
// }

// let multiplyBy2 = createMultiplier(22);
// console.log(multiplyBy2(4)); // Output: 10

// let createMultiplier = (num)=>{
//     return (num2)=>{
//         return num * num2;
//     }
// }

// let multiplyBy2 = createMultiplier(20);
// console.log(multiplyBy2(4)); // Output: 10


// let createLogger = (prefix) =>{
//     return (message) =>{
//         console.log(`${prefix} ${message}`);
//     }
// }

// const infoLogger = createLogger("INFO");
// infoLogger("This is an info message.");
//  let createDiscountApplier = (discountPercent) =>{
//     return (price) => {
//         return price - (price * (discountPercent / 100));
//     }
//  }


//Spreads with array Literals

// const nums1 = [1,2,3];
// const nums2 = [4,5,6];
// const nums3 = [...nums1, ...nums2];
// console.log(nums3); // Output: [1, 2, 3, 4, 5, 6]

//Spreads with  Object literals

// const dog1 = { legs:4, family:"xyz"}
// const dog2 = { legs:4, family:"abc"}

// const dog3 = { ...dog2,"color":"Red"};
// console.log(dog3); // Output: { legs: 4, family: 'abc', color: 'Red' }

//Rest Params

function sumAll(...nums){
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1,2,3,4,5,6,7,8));
