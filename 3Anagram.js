/*You can use Math.abs() in various scenarios, such as when you want to ensure you're 
working with positive values or when you need to find the difference between two values 
without considering their signs. */

// let n = -7;
// let absoluteValue = Math.abs(n);
// console.log(absoluteValue);

/*242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false*/

//1st approach for valid anagram

// function anagram(s,t){
//     return s.split("").sort().join("") === t.split("").sort().join("")
// }
// const s ="anagram"
// const t ="nagaram"
// const ValidAnagram = anagram(s,t)
// console.log(ValidAnagram) // true but timecompxity is o(nlogn)

//2approach
var anagram = function (s, t) {
  // Check if the lengths of the two strings are not the same
  if (s.length !== t.length) return false;

  // Create a map to store character frequencies of string 's'
  const map = new Map();

  // Count the occurrences of each character in string 's'
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1); // Increment the character frequency
    } else {
      map.set(c, 1); // Initialize the character frequency
    }
  }

  // Check if the characters in string 't' can form an anagram of 's'
  for (let c of t) {
    // If the character is not in the map, it's not an anagram
    if (!map.has(c)) return false;

    map.set(c, map.get(c) - 1); // Decrement the character frequency

    // If the character frequency reaches 0, remove it from the map
    if (map.get(c) === 0) map.delete(c);
  }

  // If the map is not empty, characters are remaining, so not an anagram
  if (map.size > 0) return false;

  // If all checks pass, the strings are anagrams
  return true;
};

const s = "anagram";
const t = "nagaram";
const ValidAnagram = anagram(s, t);
console.log(ValidAnagram);//true 
