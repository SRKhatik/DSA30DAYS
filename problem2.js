/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true*/

// const containsDuplicate = function (nums) {
//     // Create an empty Map to store elements as keys and their presence as values
//     const map = new Map();
//     for (const n of nums) {
//       if (map.has(n)) {
//         return true;
//       }  
//       map.set(n, true);
//     }
//     return false;
//   };
//   let nums = [7, 5, 8, 6, 3, 7];
//   const result = containsDuplicate(nums);
//   console.log(result);

//time complexity O(n)

   // Iterate through each element 'n' in the 'nums' array
  // Check if the current element 'n' already exists in the map
   // If it exists, there's a duplicate, so return true
  // If the element 'n' doesn't exist in the map, add it with value 'true'
  // If no duplicates were found, return false
// Define an array of numbers
// Call the 'containsDuplicate' function with the 'nums' array
// Print the result to the console

//2nd approch 
const containsDuplicate =()=>{
nums.sort((a,b)=> a-b)
for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        return true;
    }

}
return false;
}
const nums = [7,8,2,45,6,89,41,7,8];
const result = containsDuplicate(nums)
console.log(result)
//time complexity o(nlogn)