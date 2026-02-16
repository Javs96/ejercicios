function contarRango(inicio, fin) {
  let count = 0;
  for (let i = inicio + 1; i < fin; i++) count++;
  return count;
}

window.run = function () {
  console.log(contarRango(1, 9)); 
  console.log(contarRango(1332, 8743)); 
  console.log(contarRango(5, 6)); 
};
