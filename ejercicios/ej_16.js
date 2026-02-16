function capitalizar(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

window.run = function () {
  console.log(capitalizar("pedro")); 
  console.log(capitalizar("hola mundo")); 
  console.log(capitalizar("")); 
};
