/*let condicao = true
if(condicao){
    console.log("If 1")
}
let condicao2 = false
if(condicao2){
    console.log("If 2")
}*/

/*numero1 = prompt("Digite um numero")
numero2 = prompt("Digite outro numero")

if(numero1 === numero2){
    console.log("Os numeros são iguais")
}else{
    console.log("Os numeros são diferentes")
}*/

/*const condicao = false

if(condicao){
    console.log("IF")
}else{
    console.log("Else")
}*/

/*const numero = Number(prompt("Digite um numero"))
const numero1 = Number(prompt("Digite outro numero"))

if(numero !== numero1){
    console.log("Os numeros são diferentes")
}else{
    console.log("Os numeros são iguais")
}*/

/*numero1 = prompt("digite um numero")
numero2 = prompt("digite outro numero")

if(numero1 !== numero2){
    if(numero1 < numero2){
        console.log("O primeiro numero é menor que o segundo")
    }else{
        console.log("O primeiro numero é maior que o segundo")
    }

}else{
    console.log("eles são iguais")
}*/

/*let resposta = prompt("O tipo do pokemon é forte contra planta?(s ou n)")
if(resposta === "n"){
    resposta = prompt("é forte contra fogo?")
    if(resposta === "s"){
        resposta = prompt("é fraco contra eletrico?")
        if(resposta === "s"){
            console.log("é tipo agua")
        }else{
            console.log("é tipo chão")
        }
    }else{
        resposta = prompt("é forte contra agua?")
        if(resposta === "s"){
            resposta = prompt("é fraco contra chão?")
            if(resposta === "s"){
                console.log("é tipo eletrico")
            }else{
                console.log("é tipo planta")
            }
        }else{
            resposta = prompt("é forte contra dragão?")
            if(resposta === "s"){
                resposta = prompt("é fraco contra dragão")
                if(resposta === "s"){
                    console.log("é tipo dragão")
                }else{
                    resposta = prompt("é fraco contra ferro?")
                    if(resposta === "s"){
                        console.log("é tipo gelo")
                    }else{
                        console.log("é tipo fada")
                    }
                }
            }else{
                console.log("não sei qual é o tipo")
            }

        }
    }
}else{
    resposta = prompt("é fraco contra agua?")
    if(resposta === "s"){
        console.log("é tipo fogo")
    }else{
        console.log("é tipo inseto")
    }
}*/

/*let paisDeOrigem = prompt("Digite seu pais de origem").toLowerCase()

switch(paisDeOrigem){
    case 'brasil' :
        console.log("Brasileiro")
        break
    case 'usa' :
        console.log("Norte Americano")
        break
    case "canada" :
        console.log("Canadense")
        break
    case "inglaterra" :
        console.log("Inglês")
        break
    case "turquia" :
        console.log("Turco")
        break
    default :
    console.log("Nenhuma nacionalidade encontrada")
    break
}*/

/*let pokemon = prompt("Escolha um pokemon (Genesect,Golisopod,Metagross)").toLowerCase()
switch(pokemon){
    case "genesect" :
        console.log("Genesect é tipo inseto e metal")
        break
    case "golisopod" :
        console.log("Golisopod é Tipo inseto e agua")
        break
    case "metagross" :
        console.log("Metagross é Tipo Metal e Psiquico")
        break
    default :
    console.log("Pokemon não encontrado")
    break
}*/

/*nome = prompt("nome pessoa do filme la do harry potter(hermione,ana,luna,narcisa)").toLowerCase()
switch(nome){
    case "hermione":
        console.log("Grifinória")
        break
    case "ana" :
        console.log("Lufa-lufa")
        break
    case "luna" :
        console.log("Corvinal")
    break
    case "narcisa" :
        console.log("Sonserina")
    break
    default:
        console.log("pessoa n existe")
        break
}*/

/*let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2){
    console.log("Se ambos true")
}else{
    console.log("Ambas não são true")
}

if(condicao1 || condicao2){
    console.log("Se alguma é true")
}else{
    console.log("se nenhuma é true")
}
if(!condicao1){
    console.log("condição false")
}else{
    console.log("condição true")
}*/

/*const cursando = prompt("esta cursando outra faculdade? (s ou n)")
const maiorIdade = prompt("é maior de idade? (s ou n)")
const conclusaoEnsinoMedio = prompt("concluiu o ensino medio?(s ou n)")

if(maiorIdade !== "n" && cursando === "n" && conclusaoEnsinoMedio !== "n"){
    console.log("Pode fazer faculdade")
}else{
    console.log("Não pode fazer faculdade")
}*/

let escolhaComputador = Math.floor(Math.random(1)*3);
const escolhaUsuario = Number(prompt("Escolha entre Papel(1) Pedra(2) Tesoura(3)"))

if(escolhaComputador === escolhaUsuario){
    console.log("Ambos escolheram o mesmo")
}else if(escolhaComputador === 1 && escolhaUsuario === 2){
    console.log("Computador escolheu papel, o usuario escolheu pedra e perdeu")
}else if(escolhaComputador === 1 && escolhaUsuario === 3){
    console.log("Computador escolheu papel, o usuario escolheu tesoura e ganhou")
}else if(escolhaComputador === 2 && escolhaUsuario === 1){
    console.log("Computador escolheu pedra, o usuario escolheu papel e ganhou")
}else if(escolhaComputador === 2 && escolhaUsuario === 3){
    console.log("Computador escolheu pedra, o usuario escolheu tesoura e perdeu")
}else if(escolhaComputador === 3 && escolhaUsuario === 1){
    console.log("Computador escolheu tesoura, o usuario escolheu papel e perdeu")
}else if(escolhaComputador === 3 && escolhaUsuario === 2){
    console.log("Computador escolheu tesoura, o usuario escolheu pedra e ganhou")
}


