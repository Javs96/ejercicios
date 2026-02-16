function pares(arr) {
  const out = [];
  for (const n of arr) if (n % 2 === 0) out.push(n);
  return out;
}

window.run = function () {
  console.log(pares([1, 2, 3, 4, 5, 6])); 
  console.log(pares([])); 
};
