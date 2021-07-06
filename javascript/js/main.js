/* Introdução ao JavaScript
var nome = "Rafael Galleani";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o maior time do mundo"
//alert(nome+" tem "+idade+" anos."); //gera um popup na sua página
alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil").toLowerCase()); //toUpperCase() 


//Array e dicionário
var lista = ["maçã","pera","laranja"]; //array
//alert(lista[1]);
console.log(lista.push("uva")); //Adiciona um elemento no final da lista
console.log(lista.pop()); //Retira o último elemento da lista
console.log(lista);
console.log(lista[1]);
console.log(lista.length); //Quantidade de elementos da lista
console.log(lista.reverse()); //Inverte a ordem dos elementos da lista
console.log(lista.toString()); //Converte para string
console.log(lista.toString()[0]);
console.log(lista.join(" - ")); //Converte para string, mas muda os separadores

var fruta = {nome: "maçã", cor:"vermelha"}; //dicionário
console.log(fruta);
console.log(fruta.nome);
//alert(fruta.nome);

var frutas = [{nome: "maçã", cor:"vermelha"},{nome: "uva", cor:"roxo"}]; //lista de dicionários
console.log(frutas);
console.log(frutas[1].nome);


//Condicionais, laços de repetição e Date
//Condicional
var idade = prompt("Digite sua idade:"); //prompt exibe uma pergunta
if(idade>=18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade");
}

//Laços de repetição
var count = 0;
while(count<=5){
    console.log(count);
    count++;
}

var count;
for(count=0; count<=5; count++){
    console.log(count);
}

//Date - data
var d= new Date();
alert(d);
//alert(d.getMonth()+1); //precisa colocar +1 porque ele começa a contar do zero
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


//Desenvolva páginas web com JavaScript
function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

var validar = 0; //Variável global
function validaIdade(idade){
    var validar; // Variável local, ou seja, não irá alterar o valor global dessa variável
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
var idade = prompt("Digite sua idade:");
validaIdade(idade)
console.log(validar);
*/

//Parte 2: Manipulando elementos da página
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/"); //Abre em uma nova aba
    //window.location.href = "https://globallabs.academy/"; //Abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}