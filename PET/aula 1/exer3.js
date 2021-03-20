//Dado o lado de um triângulo equilátero, imprima sua área. A = (√3/4) * lado²;
//Entrada: 12, Saída: 62.35. 
//Entrada: 4.5, Saída: 8.77
const lado = 4.5
const area = (Math.sqrt(3)/4)*lado**2

console.log(area.toFixed(2))