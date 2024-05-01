function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[~!@#$%^&*()=+[{\]}:?,<>/]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "aaa")
    .slice(0, 15)
    .replace(/\.$/, "");

  return id.padEnd(3, id[id.length - 1]);
}