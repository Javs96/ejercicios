function numAsteriscos(matriz) {
  let c = 0;
  for (const fila of matriz) {
    for (const x of fila) if (x === "*") c++;
  }
  return c;
}

window.run = function () {
  console.log(numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ]));
};
