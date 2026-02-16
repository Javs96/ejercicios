function numeroDeAes(str) {
  let c = 0;
  for (const ch of str) if (ch === "a") c++;
  return c;
}

window.run = function () {
  console.log(numeroDeAes("abracadabra")); 
  console.log(numeroDeAes("etinol")); 
  console.log(numeroDeAes("")); 
};
