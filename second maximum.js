
// Find the second maximum element in the given array

// 1. By using two pointer method 

function second_max(a){
    let max = 0
  for(let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){
          if(a[i] < a[j]){
           max = a[i];
          a[i] = a[j]
          a[j] = max
          }
      }
  }
  return max
}
let ans = second_max([4,5,53,64,10,66])
console.log(ans)