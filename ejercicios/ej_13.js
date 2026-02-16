function removerCeros(arr) {
  const out = [];
  for (const n of arr) if (n !== 0) out.push(n);
  return out;
}

window.run = function () {
  console.log(removerCeros([0, 1, 0, 2, 0, 3])); 
  console.log(removerCeros([9, 3, 6, 4])); 
  console.log(removerCeros([0, 0, 0])); 
};
