/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let startIdx = 0;
    let endIdx = 1;
    
    while(endIdx < prices.length){
        if(prices[startIdx]<prices[endIdx]){
            let profit = prices[endIdx]-prices[startIdx]
            maxProfit = Math.max(maxProfit, profit);
        }
        else{
            startIdx = endIdx;
        }
        endIdx++;
    }
    
    return maxProfit
};