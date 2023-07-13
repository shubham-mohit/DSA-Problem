



// Find sum of all odd element inside the array 

function odd_sum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 1){
            sum = sum + arr[i]
        }
    }
    console.log(sum)
}
odd_sum([1,2,3,4,5,6])