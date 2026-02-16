function numAsteriscos(arr) {
  let c = 0;
  for (const x of arr) if (x === "*") c++;
  return c;
}

window.run = function () {
  console.log(numAsteriscos(["", "*", "", "*"]));
  console.log(numAsteriscos(["*", "*", "*"]));
  console.log(numAsteriscos([]));
};
