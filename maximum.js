

// Find the maximum element in the given array 

// 1. By using two pointer method

function max(a){
    let max = 0
  for(let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){
          if(a[i] < a[j]){
           max = a[j];
          a[j] = a[i]
          a[i] = max
          }
      }
  }
  return max
}
let ans = max([4,5,53,64,10])
console.log(ans)

// 2. By using normal method 

function max(a){
    let max = -Infinity
  for(let i=0;i<a.length;i++){
      if(a[i] > max){
          max = a[i]
      }
  }
  return max
}
let ans1 = max([4,5,53,64,10])
console.log(ans1)


///  reverse array till k and then so on

let nums = [1,2,3,4,5,6,7]
let h = 0
let r = nums.length -1
let l = 0
let b = 0
let k = 4
while(l <= k){
    h =nums[l]
    nums[l] = nums[k]
    nums[k] = h
    l++
    k--
 }
while(r > k){
    b =nums[r]
    nums[r] = nums[k+1]
    nums[k+1] = b
    r--
    k++
}
console.log(nums)