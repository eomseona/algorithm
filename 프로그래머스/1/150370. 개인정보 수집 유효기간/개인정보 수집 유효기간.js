function solution(today, terms, privacies) {
  let [year, month, date] = today.split(".").map(Number);
  nowdates = year * 12 * 28 + month * 28 + date;
  let termsObj = new Map();
  let expiredList = new Array();

  terms.forEach((t) => {
    const [type, long] = t.split(" ");
    termsObj.set(type, Number(long));
  });

  privacies.forEach((p, idx) => {
    const [date, type] = p.split(" ");
    const [y, m, d] = date.split(".").map(Number);
    const term = termsObj.get(type);
    const endDates = y * 12 * 28 + m * 28 + d + term * 28;
    console.log(nowdates, endDates);
    if (nowdates >= endDates) expiredList.push(idx + 1);
  });
  return expiredList;
}