/*let array
//uma variavel é criada e nada é adicionado a ela
console.log('a. ', array)
//é feito console log de uma string a. e o array que é undefined

array = null
//variavel array = null
console.log('b. ', array)
//console log de b. e null

array = [3,4,5,6,7,8,9,10,11,12,13]
//é adicionado numeros na variavel e ela se torna array
console.log('c. ', array.length)
//console log de c. + tamanho do array: 11

let i = 0
//uma variavel i é criada e a ela é dado o numero 0
console.log('d. ',array[i])
//console log de d. + o numero na posição 0 do array ou seja: 3

array[i+1] = 19
//valor da posição numero 1 = 19 ou seja: 4 == 19
console.log('e. ',array)
//console log e. 3 19 5 6 7 8 9 10 11 12 13

const valor = array[i+6]
//variavel valor = numero na posição i+6:6 do array ou seja: 9 
console.log('f. ',valor)
//console log de f. 9*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27*/

/*const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")

console.log("O e-mail",email.trim(),"foi cadastrado com sucesso. Seja bem-vinda(o),",nome)*/

/*const minhasComidasFavoritas = ["peixe frito","peixe cozido","peixe assado","peixe de brasa","peixe a milanesa"]

console.log("essas são minhas comidas favoritas:")
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[1])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])

const comidaUsuario = prompt("Qual a sua comida favorita?")
minhasComidasFavoritas[1] = comidaUsuario
console.log(minhasComidasFavoritas)*/

/*let listaDeTarefas = []

let tarefa = prompt("Escreva uma tarefa")
listaDeTarefas[0] = tarefa
tarefa = prompt("Escreva uma tarefa")
listaDeTarefas[1] = tarefa
tarefa = prompt("Escreva uma tarefa")
listaDeTarefas[2] = tarefa
console.log(listaDeTarefas)
tarefaConcluida = prompt("Digite o numero da tarefa concluida (0/1/2)")
listaDeTarefas.splice(tarefaConcluida,1)
console.log(listaDeTarefas)*/

const frase = "frase longa"
let outraFrase = [frase.slice(0,5),frase.slice(6,11)]
console.log(outraFrase)
