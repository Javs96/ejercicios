function imprimirMatriz(matriz) {
  for (const fila of matriz) {
    for (const item of fila) console.log(item);
  }
}

window.run = function () {
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
};
