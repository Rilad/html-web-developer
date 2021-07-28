/* 1 - Quantidade de números positivos 
let total = 0;

let i = 0;

let valor;

while (i < 6)

{

 valor = parseFloat(prompt());

 if (valor > 0)

 {

   total = total + 1;

 }

 i = i + 1;

}

console.log(total + " valores positivos");
*/

/* 2 - Exibindo números pares (zero é um número par)
N = prompt();
for (let num = 2; num <= N; num+= 1) {
    if(num%2 == 0) console.log(num);
  }
*/

/* 3 - Análise de números
function isEven(vetor) {
    return vetor % 2 == 0;
}

function isOdd(vetor) {
    return vetor % 2 != 0;
}

function isPositive(vetor) {
    return vetor > 0;
}

function isNegative(vetor) {
    return vetor < 0;
}

numero = Array(5);

numero[0] = prompt();
numero[1] = prompt();
numero[2] = prompt();
numero[3] = prompt();
numero[4] = prompt();

pares = numero.filter(isEven);
impares = numero.filter(isOdd);

positivos = numero.filter(isPositive);
negativos = numero.filter(isNegative);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
*/

/* 4 - Contagem de cédulas
let valor = parseInt(prompt());
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;
let restante;

nota100 = Math.floor(valor/100);
restante = valor%100;
nota50 = Math.floor(restante/50);
restante = restante%50;
nota20 = Math.floor(restante/20);
restante = restante%20;
nota10 = Math.floor(restante/10);
restante = restante%10;
nota5 = Math.floor(restante/5);
restante = restante%5;
nota2 = Math.floor(restante/2);
restante = restante%2;
nota1 = restante;

console.log(valor);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");
*/

/* 5 - Consumo médio do automóvel*/
let X = prompt();
let Y = prompt();
consumo = X/Y;
console.log(consumo.toFixed(3) + " km/l");
