function sumarArreglo(arr) {
  let suma = 0;
  for (const n of arr) suma += n;
  return suma;
}

window.run = function () {
  console.log(sumarArreglo([3, 1, 2]));
  console.log(sumarArreglo([1,2,3,4,5,6,7,8,9,10]));
  console.log(sumarArreglo([]));
};
