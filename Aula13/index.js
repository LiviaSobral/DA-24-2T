/*let valor = 0
//cria a variavel valor e adiciona 0 a ela
for(let i =0;i<5;i++){//um for que cria variavel i = 0 so termina quanto i for menor que 5 e adiciona 1 a i
    valor += i//valor é igual a valor + i
}
console.log(valor)//imprime o valor
//vai ser impresso o numero 0 pois o i não entra no for por ja ser menor que 5
//apos rodar o codigo eu observei o resultado 10, o i foi pro for e rodou ate ser 4 e então saiu do for resultando no numero 10 no valor*/
/*const lista = [10,11,12,15,18,19,21,23,25,27,30]
for (let numero of lista){
    if(numero>18){
        console.log(numero)
    }
}//no console vai ser impresso os numeros 19 21 23 25 27 e 30
//acho q sim mas teria que fazer um outro contador separado pra contar des do 0 pra ter o indice*/

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteristicos; asteristicos<quantidadeAtual+1; asteristicos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}//o resultado seriam 4 quebras de linha*/

/*quantidadeBichos = Number(prompt("Quantos bichos de estimação voce tem?"))
nomes = []
if(quantidadeBichos === 0){
    console.log("Que pena você deveria adotar um")
}else{
    for(let quant = 0;quant != quantidadeBichos; quant++ ){
        nomes.push(prompt("Digite o nome do bichinho"))
    }
}
console.log(nomes)*/

/*let arrayOriginal = [10,20,30,44,23,1445,77,48,90,387,94,673,83,82,37,716398]
let arrayPar = []
let arrayIndexElementos = []
let arrayMaior = [arrayOriginal[8]]
let arrayMenor = [arrayOriginal[3]]
for(numero of arrayOriginal){
    console.log(numero)
}
console.log("------------------------------------------")
for(numero of arrayOriginal){
    console.log(numero/10)
}
console.log("------------------------------------------")
for(numero of arrayOriginal){
    if(numero%2 === 0){
        arrayPar.push(numero)
    }
}
console.log("Array par: ",arrayPar)
console.log("------------------------------------------")
for(i=0;i!=arrayOriginal.length;i++){
    frase = "O elemento do índex "+ i +" é: "+arrayOriginal[i]
    arrayIndexElementos.push(frase)
}
console.log(arrayIndexElementos)
console.log("------------------------------------------")
for(numero of arrayOriginal){
    if(arrayMaior[0]<numero){
        arrayMaior.push(numero)
    }else if(arrayMenor[0] >numero){
        arrayMenor.push(numero)
    }
}
console.log(arrayMaior)
console.log(arrayMenor)*/
//------------------------------------------------------desafios--------------------------------------------------------------------

/*const numeroInicial = Number(prompt("Escreva um numero"))
let numeroTentativa = 0
let numerojogador = 0
do{let diferenca
    numeroTentativa ++
    numerojogador = Number(prompt("Digite o numero que você acha"))
    if(numeroInicial < numerojogador){
        diferenca = "menor"
    }else{
        diferenca = "maior"
    }
    if(numerojogador === numeroInicial){
        console.log("Parabens você acertou!!! foram ",numeroTentativa," tentativas ate achar o numero ",numeroInicial)
    }else{
        console.log("O Numero chutado foi: ",numerojogador," e esta errado, é ",diferenca)
    }
}while(numerojogador !== numeroInicial)*/

/*const numeroInicial = Math.floor(Math.random()*50);
let numeroTentativa = 0
let numerojogador = 0
do{let diferenca
    numeroTentativa ++
    numerojogador = Number(prompt("Digite o numero que você acha"))
    if(numeroInicial < numerojogador){
        diferenca = "menor"
    }else{
        diferenca = "maior"
    }
    if(numerojogador === numeroInicial){
        console.log("Parabens você acertou!!! foram ",numeroTentativa," tentativas ate achar o numero ",numeroInicial)
    }else{
        console.log("O Numero chutado foi: ",numerojogador," e esta errado, é ",diferenca)
    }
}while(numerojogador !== numeroInicial)
//foi facil fazer a alteração pois eu so precisei mudar a variavel inicial e todo o resto do codigo pode ser re utilizado*/

console.log("pão")
//por algum motivo sempre que eu abro o live server os consoles.logs não funcionam então se for testar o codigo
//de control x em todo o codigo(inclusive as variaveis) e abra o live server veja se o console.log de pão apareceu e então cole todo o codigo
let hp = 10
let recursos = 0
const nome = prompt("Qual seu nome?")

while(recursos < 10 && hp > 0){
    let chanceRecurso = Math.random()
    console.log("Voce tem hp: ",hp," e tem recursos: ",recursos)
    let escolha = Number(prompt("Você deseja descansar(2) ou explorar(1)"))
    if(escolha === 1){
        if (chanceRecurso >= 0.5){
            console.log("O Jogador",nome," acha um recurso")
            recursos++
        }else if (chanceRecurso <= 0.3){
            console.log("O jogador ",nome," Cai em uma armadinha e é atacado por outros sobreviventes, perdendo 3 pontos de vida")
            hp -= 3} else if(chanceRecurso <= 0.2){
            console.log("O jogador ",nome," encontra um game maker e morre instantaneamente")
            hp = 0
        }else{
            console.log("nada foi achado")
        }
    }else{
        console.log("O Jogador ",nome," descança e regenera sua vida para o total")
        hp = 10
    }
}
if (hp > 0 && recursos === 10){
    console.log("Parabens você ",nome," conseguiu sobreviver")
}else{
    console.log("Você perdeu")
}


