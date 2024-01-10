function hasTargetSum(array, target) {
  // Write your algorithm here

  // create a new set where the numbers iterated through will be kept tracked of
  const seenNumbers = new Set();

  // iterate through the the array that contains the numbers 
  for(let num of array){
    if(seenNumbers.has(target-num)){
      return true;
    }
    // Otherwise, add the current number to the set
   seenNumbers.add(num);
  }

   // No pair found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1.Create an empty set that will keep track of the numbers in the array
  2.Iterate through the array looking for a pair that when added will make the target number
  3.Subtract num from the target and the answer gotten to be searched for in the new set.
  4.If the num is found return true else return false
*/

/*
  Add written explanation of your solution here
  The function first creates a new set where it will keep track of the numbers that have been iterated through
  It will then iterate through the array subtarcting each number from the target.
  The difference between the num and the target will be looked for in the new set.
  If found in the new set return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
