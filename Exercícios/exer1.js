//Troca valor de variáveis. Crie duas variáveis, uma com o valor ‘vermelho’ e outra com o valor ‘rosa’,
//faça a primeira variável receber o valor da segunda e vice-versa, ao final mostre no console o valor das duas variáveis.

let v1 = 'vermelho'
let v2 = 'rosa' 
let aux= "" 


console.log("Antes da troca")
console.log(v1)
console.log(v2)


aux = v1
v1 = v2
v2 = aux

console.log("Depiois da troca da troca")

console.log(v1)
console.log(v2)