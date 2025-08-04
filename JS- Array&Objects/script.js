
// 🧪 Array-Based Practical Questions


// 1. Reverse an array Write a function to reverse the array [1, 2, 3, 4, 5] ✅ Expected Output: [5, 4, 3, 2, 1]

// function ReverseArray(arr){
//     return arr.reverse();
// }
// const arr=[1,2,3,4,5];
// const Result=ReverseArray(arr);
// console.log(Result);


// 2. Remove duplicates from an array Input: [1, 2, 2, 3, 4, 4, 5] ✅ Expected Output: [1, 2, 3, 4, 5]

// const arr=[1,2,2,3,4,4,5];

// const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(uniqueArray);



// 3. Find the sum of all numbers in an array Input: [10, 20, 30, 40] ✅ Expected Output: 100

// const arr=[10,20,30,40];

// const result=arr.reduce((acc,value)=>acc+value,0);
// console.log(result);



// 4. Find the maximum and minimum number in an array Input: [8, 3, 12, 5, 1] ✅ Expected Output: Max: 12, Min: 1

// const input=[8,3,12,5,1];

// const Max=Math.max(...input);
// const Min=Math.min(...input);
// console.log(`Maximum:${Max}`);
// console.log(`Minimum: ${Min}`);



// 5. Convert an array of strings to uppercase Input: ["react", "node", "angular"] ✅ Expected Output: ["REACT", "NODE", "ANGULAR"]


// const Input= ["react", "node", "angular"];

// const New= Input.map((value)=> value.toUpperCase());

// console.log(New);






// 🔑 Object-Based Practical Questions



// 6. Count properties in an object Input:

// const user = { name: "John", age: 25, gender: "male" };
// ✅ Expected Output: 3


//  const user = { name: "John", age: 25, gender: "male" };

//  const properties=Object.keys(user).length;

//  console.log(`Total properties: ${properties}`);




// 7. Convert an object to an array of key-value pairs Input:

// const person = { name: "Alice", age: 30 };
// ✅ Expected Output:

// [["name", "Alice"], ["age", 30]]


// const person = { name: "Alice", age: 30 };

// const newPerson=Object.entries(person);
// console.log(newPerson);



// 8. Merge two objects Input:

// const a = { x: 1, y: 2 };
// const b = { y: 3, z: 4 };
// ✅ Expected Output: { x: 1, y: 3, z: 4 }


// const a = { x: 1, y: 2 };
// const b = { y: 3, z: 4 };

// const merged={...a,...b};

// console.log(merged);


// 10. Convert an array of objects to a single object using a key Input:

// const arr = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" }
// ];
// ✅ Expected Output:

// {
//   1: { id: 1, name: "John" },
//   2: { id: 2, name: "Jane" }
// }

const arr= [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];
const newArr=Object.keys(arr);

console.log(arr);