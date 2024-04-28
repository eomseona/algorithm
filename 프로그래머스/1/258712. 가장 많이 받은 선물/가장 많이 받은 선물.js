function solution(friends, gifts) {
    const len = friends.length;
    let nameMap = new Map();
    let giftsArr = new Array(len).fill(0).map(()=>new Array(len).fill(0));
    // 총 선물지수
    let totalGifts = new Array(len).fill(0);
    let nextGet = new Array(len).fill(0);
    
    friends.forEach((name, idx)=>{
        nameMap.set(name, idx);
    })
    
    gifts.forEach((v)=>{
        const [giver, receiver] = v.split(" ");
        giftsArr[nameMap.get(giver)][nameMap.get(receiver)]++;
    })
    
    for(let i=0; i<len; i++){
        totalGifts[i] = giftsArr[i].reduce((acc,cur)=>acc+=cur,0);
        for(let j=0; j<len; j++){
            totalGifts[i] -= giftsArr[j][i];
        }
    }
    
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(i===j) continue;
            if(giftsArr[i][j] > giftsArr[j][i]) nextGet[i]++;
            if(giftsArr[i][j] < giftsArr[j][i]) nextGet[j]++;
            if(giftsArr[i][j] === giftsArr[j][i]){
                if(totalGifts[i]>totalGifts[j]) nextGet[i]++;
                if(totalGifts[i]<totalGifts[j]) nextGet[j]++;
            }
        }
    }
    
    let answer = Math.max(...nextGet);
    
    return answer;
}