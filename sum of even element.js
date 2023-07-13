

// Find sum of all even element inside the array 

function even_sum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
            sum = sum + arr[i]
        }
    }
    console.log(sum)
}
even_sum([1,2,3,4,5,6])