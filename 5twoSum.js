/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]*/

const twoSum = (nums, target) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i);
        ans.push(j);
      }
    }
  }
  return ans;
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target)); //[1,3] this probl solve in nested for loop TC= o(n)^2



//using map


const twoOfSum = (n,targets)=>{
const map =new Map()
for(const index in n){
const pairTarget = targets -n[index];
if(map.has(pairTarget)) return [index,map.get(pairTarget)]
map.set (nums[index],index)
}
}
let n = [2, 7, 11, 15],
  targets = 9;
console.log(twoOfSum(n, targets));