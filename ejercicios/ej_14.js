function sumarArreglo(arr, posInicial, posFinal) {
  let suma = 0;
  for (let i = posInicial; i <= posFinal; i++) suma += arr[i];
  return suma;
}

window.run = function () {
  console.log(sumarArreglo([1, 2, 3], 1, 2)); 
  console.log(sumarArreglo([1,2,3,4,5,6,7,8,9,10], 3, 6)); 
  console.log(sumarArreglo([7, 8, 9], 0, 0)); 
};
