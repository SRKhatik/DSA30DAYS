function isPalindrome(s, i, j) {
    if (i === j) {
        return true;
    }
    if (i + 1 === j) {
        return s[i] === s[j];
    }
    if (s[i] !== s[j]) {
        return false;
    }
    return isPalindrome(s, i + 1, j - 1);
}

function checkPalindrome(s) {
    return isPalindrome(s, 0, s.length - 1);
}

console.log(checkPalindrome("abcba")); // Output: true
console.log(checkPalindrome("hello")); // Output: false
