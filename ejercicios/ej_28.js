function palabrasANumeros(arr) {
  const map = {
    cero: 0, uno: 1, dos: 2, tres: 3, cuatro: 4,
    cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9
  };

  const out = [];
  for (const w of arr) {
    const key = String(w).toLowerCase();
    out.push(Object.prototype.hasOwnProperty.call(map, key) ? map[key] : -1);
  }
  return out;
}

window.run = function () {
  console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]));
  console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"]));
};
