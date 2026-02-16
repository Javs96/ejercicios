function capitalizar(str) {
  if (str.length === 0) return "";
  return str
    .split(" ")
    .map(p => (p ? p[0].toUpperCase() + p.slice(1) : ""))
    .join(" ");
}

window.run = function () {
  console.log(capitalizar("hola mundo")); 
  console.log(capitalizar("make it real")); 
  console.log(capitalizar("")); 
};
