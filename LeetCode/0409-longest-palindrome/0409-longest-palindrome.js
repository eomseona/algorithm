/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charFrequency = {};
    let oddFrequencyCount = 0;
    for (let char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
        if (charFrequency[char] % 2 === 1)
            oddFrequencyCount++;
        else
            oddFrequencyCount--;
    }
    if (oddFrequencyCount > 1)
        return s.length - oddFrequencyCount + 1;
    return s.length; 
};