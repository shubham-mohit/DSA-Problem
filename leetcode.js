
// // Triplate sum 

let arr1 = [0,1,2,3,5,8,13] 
let k = 17
let c =0
for(let i=0;i<arr.length;i++){
    let a = []
    c = arr[i]
    let T = k-c
    let right = arr.length-1
    let left = i+1
    while(left < right){
        if(arr[left] + arr[right] == T){
            a.push(arr[left],arr[right],c)
            left++
        }
        else if(arr[left]+ arr[right] < T){
            left++
        }
        else{
            right--
        }
        // left++
        // right--
    }
}
console.log(a)




let nums = [1,2,3,4,5,6,7]
let k1 = 3

let left = 0
let right = nums.length-1

while(left < k1){
    let c = nums[left]
    nums[left] = nums[right-k1+1]
    nums[k1] = c
    left++
    // right--
}
console.log(nums)


function solution(s,a) {
  let l = s.length, count = 0
  if(a>l) return 0
  for(let i=0; i<l; i++){
      let j=0+i, sum = 0
      
      while(j < i+a && i+a <= l){
    //   while(j < a){
          sum += s.charCodeAt(j)
          j++
      }
      if(sum>0 && sum%a==0) count++
  }
    return count
}
console.log(solution("bcgabc",3))



