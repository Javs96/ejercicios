function distancia(a, b) {
  const len = Math.max(a.length, b.length);
  let diff = 0;

  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff;
}

window.run = function () {
  console.log(distancia("hola", "hola")); 
  console.log(distancia("sol", "tol")); 
  console.log(distancia("carro", "correr")); 
};
