function checkPalindromeIndex(s) {
    if (!s || s.length < 2) {
      
      return -1;
    }
  
    let i = 0, j = s.length - 1;
  
    while (i < j && s[i] === s[j]) {
      i++;
      j--;
    }
  
    if (i === j) {
      
      return i;
    }
  
    if (s[i] === s[j - 1] && s[i + 1] === s[j - 2]) {

        return -1; 
    } else if (s[i] === s[j - 1]) {

      return j;
    } else if (s[i + 1] === s[j - 1]) {

      return i;
    } else {

      return -1;
    }
  }

console.log(checkPalindromeIndex("aaab")); // Output: 3
console.log(checkPalindromeIndex("acxycab")); // Output: -1