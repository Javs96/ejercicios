function terminanConS(arr) {
  const out = [];
  for (const w of arr) {
    if (typeof w === "string" && w.toLowerCase().endsWith("s")) out.push(w);
  }
  return out;
}

window.run = function () {
  console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); 
  console.log(terminanConS(["beta", "delta", "gama"])); 
  console.log(terminanConS([])); 
};
