function numerosAPalabras(arr) {
  const map = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  const out = [];
  for (const n of arr) out.push(map[n] ?? "");
  return out;
}

window.run = function () {
  console.log(numerosAPalabras([0, 1, 2, 3, 4])); 
  console.log(numerosAPalabras([5, 6, 7, 8, 9])); 
};
