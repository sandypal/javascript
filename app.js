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

// function sumAll(...nums){
//     return nums.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumAll(1,2,3,4,5,6,7,8));


//Array Destructuring

// const  cricketTeams = ['India', 'South Africa', 'England'];

// const [winner, loser] = cricketTeams;

// console.log(winner);
// console.log(loser);


//Object Destructuring

// const userData = {
//     name: "John Doe",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     },
//     email: "john@gmail.com",
//     phone: "123-456-7890",
//     hobbies: ["reading", "painting", "cooking"],
//     isActive: true
// }

// const { name, age, address: { street, city }, email, phone, hobbies, isActive } = userData;

// console.log(name);
// console.log(age);
// console.log(street);

// //Giving Custom name to variables
// const {name:fullName} =userData;

// Destructuring Parameters

// const movies = [
//     {
//         title: "Inception",
//         director: "Christopher Nolan",
//         year: 2010,
//         genre: "Sci-Fi",
//         score: 8.8
//     },
//     {
//         title: "The Godfather",
//         director: "Francis Ford Coppola",
//         year: 1972,
//         genre: "Crime",
//         score: 9.2
//     },
//     {
//         title: "Pulp Fiction",
//         director: "Quentin Tarantino",
//         year: 1994,
//         genre: "Crime",
//         score: 8.9
//     },
//     {
//         title: "The Shawshank Redemption",
//         director: "Frank Darabont",
//         year: 1994,
//         genre: "Drama",
//         score: 9.3
//     },
//     {
//         title: "The Dark Knight",
//         director: "Christopher Nolan",
//         year: 2008,
//         genre: "Action",
//         score: 9.0
//     }
// ];

// const hitmovies = movies.filter(({score}) => score >=9 );  
