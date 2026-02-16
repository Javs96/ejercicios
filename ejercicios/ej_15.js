function transcribir(adn) {
  const map = { G: "C", C: "G", T: "A", A: "U" };
  let out = "";
  for (const ch of adn) out += map[ch] ?? "";
  return out;
}

window.run = function () {
  console.log(transcribir("ACGT")); 
  console.log(transcribir("ACGTGGTCTTAA")); 
};
