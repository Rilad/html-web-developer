/*Teste 1 - Visita a feira (a função gets é implementada internamente para auxiliar a entrada dos dados.)
let line = prompt().split(" "); 
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
*/

/*Teste 2 -  Multiplicação simples
let valor1 = parseInt(prompt());
let valor2 = parseInt(prompt());
let total = valor1*valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);
*/

/*Teste 3 - Folha de Pagamento (The toFixed() method formats a number using fixed-point notation.)*/
let valor1 = parseInt(prompt());
let valor2 = parseInt(prompt());
let valor3 = parseFloat(prompt());
let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);
