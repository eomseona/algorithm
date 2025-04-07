/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        if (s.length !== t.length) {
        return false;
    }

    const sCount = {};
    const tCount = {};

    for (let i = 0; i < s.length; i++) {
        sCount[s[i]] = 1 + (sCount[s[i]] || 0);
        tCount[t[i]] = 1 + (tCount[t[i]] || 0);
    }

    const sortedSCount = Object.entries(sCount).sort();
    const sortedTCount = Object.entries(tCount).sort();

    return JSON.stringify(sortedSCount) === JSON.stringify(sortedTCount);
};