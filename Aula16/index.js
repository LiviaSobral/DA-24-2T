/*function minhaFuncao(variavel){
    return variavel * 5
}

console.log(minhaFuncao(2))//aqui ira imprimir 10
console.log(minhaFuncao(10))// aqui ira imprimir 50
//se os console.logs fossem retirados nada apareceria*/

/*let textoDoUsuario = prompt("insira um texto")

const outraFuncao = function(texto){
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a função transforma o texto pra lower case e responde true ou false se no texto existe "cenoura"
//true
//true
//true*/

/*function minhasInformacoes(){
    console.log("Meu nome é livia, tenho 19 anos, moro em são leopoldo e não sou estudante")

}
minhasInformacoes()*/

/*function soma(numero, numero2){
    return numero+numero2
}
function multiplica(numero, numero2){
    return numero * numero2
}
function divide(numero, numero2){
    return numero/numero2
}
function subtrai(numero, numero2){
    return numero-numero2
}

const numero = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite um numero"))

console.log("A soma dos numeros é:",soma(numero,numero2))
console.log("A multiplicação dos numeros é:",multiplica(numero,numero2))
console.log("A divisão dos numeros é:",divide(numero,numero2))
console.log("A subtração dos numeros é:",subtrai(numero,numero2))*/

/*const numero = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite um numero"))

let imprimir = (resultado) => {
    console.log(resultado)
}
let calcular = (numero,numero2) =>{
    resultado = numero + numero2
    imprimir(resultado)
}
calcular(numero,numero2)*/

let inventario = ["pão"]

console.log(inventario.length)
function adicionarItem(inventario, iten) {

    if (inventario.length < 5) {
        inventario.push(iten)
    } else {
        console.log("O inventario esta cheio")
    }
}
function removerItem(inventario, iten) {

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i] === iten) {
            inventario.splice(i, 1)
        } else {
            console.log("iten", iten, " não achado")
        }

    }
}


function listaItens(inventario) {
    return inventario
}

console.log(listaItens(inventario))
adicionarItem(inventario, "queijo")
console.log(listaItens(inventario))
adicionarItem(inventario, "Faca")
console.log(listaItens(inventario))
removerItem(inventario, "pão")
removerItem(inventario, "queijo")
adicionarItem(inventario, "pão com queijo")
console.log(listaItens(inventario))
adicionarItem(inventario, "pão com queijo")
adicionarItem(inventario, "pão com queijo")
adicionarItem(inventario, "pão com queijo")
adicionarItem(inventario, "pão com queijo")
adicionarItem(inventario, "pão com queijo")
