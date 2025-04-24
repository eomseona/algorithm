/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     const ransomCount = new Map();
    for (let char of ransomNote) {
        ransomCount.set(char, (ransomCount.get(char) || 0) + 1);
    }

    for (let char of magazine) {
        if (ransomCount.has(char)) {
            ransomCount.set(char, ransomCount.get(char) - 1);
            if (ransomCount.get(char) === 0) ransomCount.delete(char);
        }
    }

    return ransomCount.size === 0;   
};