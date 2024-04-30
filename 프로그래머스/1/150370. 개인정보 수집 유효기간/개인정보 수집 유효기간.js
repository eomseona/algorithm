function solution(today, terms, privacies) {
  today = today.split(".");
  let termsObj = new Map();
  let expiredList = new Array();

  terms.forEach((t) => {
    const [type, long] = t.split(" ");
    termsObj.set(type, Number(long));
  });

  privacies.forEach((p, idx) => {
    const [date, type] = p.split(" ");
    const [startYear, startMonth, startDay] = date.split(".");
    const term = termsObj.get(type);

    let endDate = [
      Number(startYear),
      Number(startMonth) + term,
      Number(startDay),
    ];

    if (endDate[1] > 12) {
      if (endDate[1] % 12 === 0) {
        endDate[0] = endDate[0] + Math.floor(endDate[1] / 12) - 1;
        endDate[1] = 12;
      } else {
        endDate[0] = endDate[0] + Math.floor(endDate[1] / 12);
        endDate[1] = endDate[1] % 12;
      }
    }

    let expired = false;

    for (let i = 0; i < endDate.length; i++) {
      if (endDate[i] < Number(today[i])) {
        expired = true;
        break;
      }
      if (endDate[i] > Number(today[i])) break;
      if (i === endDate.length - 1 && endDate[i] === Number(today[i]))
        expired = true;
    }

    if (expired) expiredList.push(idx + 1);
  });
  return expiredList;
}