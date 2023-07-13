
// Find the second minimum element in the given array

// 1. By using two pointer method 

function second_min(a){
    let min = 0
  for(let i=0;i<a.length;i++){
      for(let j=0;j<a.length;j++){
          if(a[i] > a[j]){
           min = a[i];
          a[i] = a[j]
          a[j] = min
          }
      }
  }
  return min
}
let ans = second_min([4,5,53,64,10,66])
console.log(ans)