function password(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "")
    .replaceAll("a", "4")
    .replaceAll("e", "3")
    .replaceAll("i", "1")
    .replaceAll("o", "0");
}

window.run = function () {
  console.log(password("hola"));
  console.log(password("esta es una prueba"));
  console.log(password("")); 
};
