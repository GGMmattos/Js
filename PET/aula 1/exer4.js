//Declarando as variáveis a, b, c e delta, faça a fórmula de bhaskara, dando como resultado os valores de x1 = -b + √delta / (2 * a)
//e 
//x2 = -b - √delta / (2 * a);
//Entrada: a = 1, b = 2, c = -24. Saída: x1 = 4, x2 = -6.
//Entrada: a = -1, b = -4, c = 5. Saída: x1 = -5, x2 = 1.

const a = -1
const b = -4
const c = 5

delta = Math.pow(b,2) - 4 * a * c

const x1 = (-b + Math.sqrt(delta))/(2*a)

const x2 = (-b - Math.sqrt(delta))/(2*a)

console.log(x1)

console.log(x2)