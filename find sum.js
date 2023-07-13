
// Find the sum of an array element.

// 1. By using normal method 

function sumArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
sumArray([1,2,3,4,5])


// 2. By using reduced method 

const arr = [10,320,43,49]
const arraySum = arr.reduce((acc,curr)=>{return acc+curr})
console.log(arraySum)