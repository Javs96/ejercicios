function numeroDeCaracteres(str, caracter) {
  let c = 0;
  for (const ch of str) if (ch === caracter) c++;
  return c;
}

window.run = function () {
  console.log(numeroDeCaracteres("Hola Mundo", "o")); 
  console.log(numeroDeCaracteres("MMMMM", "m")); 
  console.log(numeroDeCaracteres("eeee", "e")); 
};
