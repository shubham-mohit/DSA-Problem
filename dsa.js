// var heightChecker = function(h) {
//     let ans = 0;
//     let countArr = Array(101).fill(0);
    
    
//     for(let i=0;i< h.length;i++)
//     {
//     countArr[h[i]]++;
//     }
//     let index =1; // index of countArr
//     for(let i=0;i< h.length;i++){
//     while(countArr[index]== 0){
//     index++;
//     }
//     if(index != h[i])
//     ans++;
//     countArr[index]--;
//     }
//     return ans;
//     }
//     heightChecker([1,1,4,2,1,3])
    

// let arr = [1,2,3,4,10,89]

// let left = 0
// let right = left+1
// let n = arr.length-1
// let max = -Infinity
// let sum = 0
// while(left < n){
//     let sum = arr[left]+ arr[right]
//     if(sum > max)
//     max = sum
//     left++
//     right++
//onsole.log(max)
//     }
// console.log(max)


// let arr = [10,-10]

let arr = [1,2,3,4,10,89]
let left = 0
let n = arr.length-1
let sum1 = 0,lval = -Infinity,rval = -Infinity
while(left < arr.length){
    if(lval < arr[left] && arr[left]!= rval) lval = arr[left]
    if(rval < arr[n] && arr[n]!= lval) rval =arr[n]
    let sum = rval+lval
    if(sum1 < sum){
        sum1 = sum
    }
    
    

    left++
    n--
    console.log(sum1)
}
// console.log(sum1)
   
//    console.log(sum1)