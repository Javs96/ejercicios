function bmi(peso, altura) {
  const v = peso / (altura ** 2);
  if (v < 18.5) return "Bajo de peso";
  if (v <= 24.9) return "Normal";
  if (v <= 29.9) return "Sobrepeso";
  return "Obeso";
}

window.run = function () {
  console.log(bmi(65, 1.8));
  console.log(bmi(72, 1.6)); 
  console.log(bmi(52, 1.75));
  console.log(bmi(135, 1.7)); 
};
