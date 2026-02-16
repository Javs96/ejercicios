function multiplicarArreglo(arr) {
  let prod = 1;
  for (const n of arr) prod *= n;
  return prod;
}

window.run = function () {
  console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
  console.log(multiplicarArreglo([1,2,3,4,5,6,7,8])); // 40320
  console.log(multiplicarArreglo([])); // 1
};
