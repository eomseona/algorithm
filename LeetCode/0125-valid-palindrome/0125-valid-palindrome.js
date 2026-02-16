/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^0-9a-z]/gi,"").toLowerCase();
    if(str.length===0) return true;
    
    for(let i=0; i<str.length; i++){
        let j = str.length-1-i;
        if(i===j || i>j) return true;
        if(str[i]!==str[j]) return false; 
    }
};