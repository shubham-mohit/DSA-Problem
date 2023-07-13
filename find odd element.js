

// Find the number of Odd element inside the array 

function count_odd(arr){
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 1){
            count ++
        }
    }
    console.log(count)
}
count_odd([1,2,3,49,7,6])