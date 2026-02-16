function imprimirArreglo(...items) {
  for (const item of items) console.log(item);
}

window.run = function () {
  imprimirArreglo(1, "Hola", 2, "Mundo");
};
