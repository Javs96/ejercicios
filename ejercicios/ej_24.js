function empiezanConA(arr) {
  const out = [];
  for (const w of arr) {
    if (typeof w === "string" && w.length > 0 && w[0].toLowerCase() === "a") out.push(w);
  }
  return out;
}

window.run = function () {
  console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
  console.log(empiezanConA(["beta", "delta", "gama"]));
  console.log(empiezanConA([]));
};
