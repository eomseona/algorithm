function solution(nums) {
    let answer = 0;
    let sum = 0;
    function isPrime(num){
        for(let i=2; i<num; i++){
            if(num%i === 0) return false
        } return true;
    }
    
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(nums[i]!==nums[j] && nums[j]!==nums[k] && nums[i]!==nums[k]){
                    sum = nums[i] + nums[j] + nums[k];
                    if(isPrime(sum)){
                        answer += 1;
                    }
                }
            }
        }
    }
    

    return answer;
}