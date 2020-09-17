Complete the following CodeWars on JavaScript concepts you learned in previous weeks.

# CodeWars

- [Is it even?](https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/node javascript)
- [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript)
- [Removing elements](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript)
- [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript)
- [Find the Difference in Age between Oldest and Youngest Family Members](https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript)
- [Filter out the Geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript)

//is it even

function testEven(n) {
 return n%2==0;
}

//will you make it
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft >= distanceToPump;
};

//removing elements
function removeEveryOther(arr){
  //your code here
let newArray=[];
for (var i = 0; i < arr.length; i+=2){
  newArray.push(arr[i]);
  }
return newArray;}

//

// grasshopper
var summation = function (num) {
  // Code here
  let sum=0;
  for( i=1; i<=num; i++){
    sum += i;
    }return sum
    }
//Find the Difference in Age between Oldest and Youngest Family Members



//Filter out the Geese