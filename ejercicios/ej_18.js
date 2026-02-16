function max(arr) {
  if (arr.length === 0) return undefined;
  let m = arr[0];
  for (const n of arr) if (n > m) m = n;
  return m;
}

window.run = function () {
  console.log(max([3, 9, 6])); 
  console.log(max([67, 35, 54, 26])); 
  console.log(max([5, 9, 2, 4, 5, 7])); 
};
