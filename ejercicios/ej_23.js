function duplicar(arr) {
  const out = [];
  for (const n of arr) out.push(n * 2);
  return out;
}

window.run = function () {
  console.log(duplicar([1, 2, 3]));
  console.log(duplicar([])); 
};
