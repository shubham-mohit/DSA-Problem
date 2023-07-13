
// Find average of an given array 

function average(arr){
    let sum = 0;
    let average = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
        average = sum/arr.length
    }
    console.log(average)
}
average([12,3,44,53,21])