const solution = (s) => {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length ? 0 : 1;
};
