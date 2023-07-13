

// Find the number of Even element inside the array 

function count_even(arr){
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            count ++
        }
    }
    console.log(count)
}
count_even([1,2,3,49,7,6])