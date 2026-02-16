function contrasenaValida(str) {
  return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9";
}

window.run = function () {
  console.log(contrasenaValida("2Fj(jjbFsuj")); 
  console.log(contrasenaValida("eoZiugBf&g9")); 
  console.log(contrasenaValida("hola")); 
  console.log(contrasenaValida(""));
};
