//Função do algoritmo: CAlcular a média aritmética
//Autor: Áldri

programa
{
	
	funcao inicio()
	{
		//Declara as variáveis
		real nota1, nota2, nota3, nota4, media
		cadeia aluno // cadeia=string
		//Lê os valores das variáveis
		escreva("Digite o nome do aluno: ")
		leia(aluno)
		escreva("A primeira nota: ")
		leia(nota1)
		escreva("A segunda nota: ")
		leia(nota2)
		escreva("A terceira nota: ")
		leia(nota3)
		escreva("A quarta nota: ")
		leia(nota4)
		//Calcula a média
		media = (nota1+nota2+nota3+nota4)/4
		escreva("O aluno " + aluno + " teve média de " + media + ".")
		//Verifica se a média é maior ou igual a 7
		se(media>=7){
			escreva("\n" + "Parabéns!!Você foi aprovado.")
		}
		//Caso a média seja menor que 7
		senao{
			escreva("\n" + "Infelizmente você foi reprovado.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 197; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */