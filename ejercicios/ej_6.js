function fizzBuzz(n) {
  const m3 = n % 3 === 0;
  const m5 = n % 5 === 0;
  if (m3 && m5) return "fizzbuzz";
  if (m3) return "fizz";
  if (m5) return "buzz";
  return n;
}

window.run = function () {
  console.log(fizzBuzz(6));
  console.log(fizzBuzz(20));
  console.log(fizzBuzz(30));
  console.log(fizzBuzz(8)); 
};
