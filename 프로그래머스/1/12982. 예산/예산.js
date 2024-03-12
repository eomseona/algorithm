function solution(d, budget) {
    var total = 0;
    var answer = 0;
    
    d.sort((a,b)=>a-b).forEach(price => {
        if(total + price <= budget)
        {
            total += price;
            answer++;
        }
    })
    
    return answer;
}