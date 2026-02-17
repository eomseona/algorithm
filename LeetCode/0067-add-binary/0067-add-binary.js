/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("");
    b = b.split("");
    const result = [];
    let carry = 0;

    while(a.length || b.length || carry){
        const numA = a.length ? Number(a.pop()) : 0;
        const numB = b.length ? Number(b.pop()) : 0;

        const sum = numA + numB + carry;

        result.unshift(sum % 2);
        carry = Math.floor(sum / 2);
    }
    
    return result.join("");
};