programa
{
	
	funcao inicio()
	{
		inteiro tabuada,contador,limite,resultado // Declara as variáveis
		//Atribui valores as variáveis
		contador=0
		escreva("Qual é a tabuada desejada? ")
		leia(tabuada)
		escreva("Qual é o limite da tabuada? ")
		leia(limite)
		faca{
			resultado=tabuada*contador //Calcula o valor da multiplicação de 9
			escreva(tabuada+"x"+contador+"="+resultado+"\n")
			contador++ //Incrementa mais 1 ao valor da variável contador
		}enquanto(contador<=limite) //Os comandos serão executados até o valor de contador for menor ou igual a limite
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 250; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */