

// Find the minimum in the given array

// 1. By using two pointer method
function min(a){
    let min = 0
  for(let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){
          if(a[i] > a[j]){
           min = a[j];
          a[j] = a[i]
          a[i] = min
          }
      }
  }
  return min
}
let ans = min([4,5,53,64,10])
console.log(ans)

// 2. By using normal method
function min(a){
    let min = Infinity
  for(let i=0;i<a.length;i++){
      if(a[i] < min){
          min = a[i]
      }
  }
  return min
}
let ans1 = min([4,5,53,64,10])
console.log(ans1)