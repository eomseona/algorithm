function solution(id_list, report, k) {
  let len = id_list.length;
  let reportMap = new Map();
  let indexMap = new Map();
  let mailArr = new Array(len).fill(0);

  id_list.forEach((name, i) => {
    reportMap.set(name, new Set()); // {muzi:{}, frodo:{}, apeach:{}, neo:{}}
    indexMap.set(name, i); // {muzi:0, frodo:1, apeach:2, neo:3}
  });

  report.forEach((c) => {
    const [reporter, object] = c.split(" ");
    let dataSet = reportMap.get(object);
    dataSet.add(reporter);
    reportMap.set(object, dataSet);
  });

  reportMap.forEach((data) => {
    if (data.size >= k) {
      data.forEach((v) => {
        let idx = indexMap.get(v);
        mailArr[idx]++;
      });
    }
  });

  return mailArr;
}