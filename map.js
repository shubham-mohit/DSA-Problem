

let map = new Map(); // skill , freq


let n = skill.length;
let totalSum = 0;


for(let i=0;i<n;i++){
totalSum+= skill[i];
map.set(skill[i] , (map.get(skill[i]) || 0) +1);
}


let countOfGroup = n/2;
if(totalSum % countOfGroup != 0 )
return -1;
let eachGroupSum = totalSum/countOfGroup;


let sumOfGroupsProd = 0;


for(let i = 0;i<n;i++){
let complement = eachGroupSum - skill[i];


if( !map.has(complement) || map.get(complement) <=0)
return -1;
sumOfGroupsProd += complement* skill[i];


map.set(complement , map.get(complement) -1);
}


return sumOfGroupsProd/2;


