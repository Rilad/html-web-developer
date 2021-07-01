programa
{
	
	funcao inicio()
	{
		inteiro contador=0
		cadeia frutas[4] //Declara um vetor de 4 posições
		// Declara uma matriz. Ao deixar em branco entre os colchetes o programa identifica automaticamente o número de linhas e colunas, mas pode identificar manualmente
		cadeia cesta[][] = {{"Pera","100"},{"Jaca","200"},{"Maçã","900"},{"Uva","89"}} // Precisa colocar os números entre aspas também porque o tipo de variável é cadeia

		//Atribui os valores para o vetor
		frutas[0]="Maçã"
		frutas[1]="Pera"
		frutas[2]="Uva"
		frutas[3]="Jaca"

		//Escreve os valores do vetor
		faca{
			escreva(frutas[contador]+"\n")
			contador++
		}enquanto(contador<=3)

		//Escreve os valores da matriz
		contador=0
		faca{
			escreva("Produto: "+cesta[contador][0]+" Quantidade: "+cesta[contador][1]+"\n")
			contador++
		}enquanto(contador<=3)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 802; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */