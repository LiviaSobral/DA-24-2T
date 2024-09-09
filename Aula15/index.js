/*function calculaArea(altura,largura){
    const area = largura *altura
    console.log(area)
}
calculaArea(2,3)
calculaArea(5,4)
calculaArea(7,3)*/

/*function imprimirOlaMundo(){
    console.log("Ola Mundo")
}
imprimirOlaMundo()
imprimirOlaMundo()*/

/*function imprimirNome(nome){
    console.log("Bem Vindo: ",nome)
}
imprimirNome("Carlos Alberto")
imprimirNome("Joshua")*/

/*function imprimirBemVindo(){
    console.log("Bem vindo turma 24-2T")
}
imprimirBemVindo()

function soma(numero,numero2){
    console.log("A soma é:",numero+numero2)
}
soma(1,1)
function dobro(numero){
    console.log("O dobro de ",numero," é ",numero*2)
}
dobro(5)*/

/*function imprimirNome(nome){
    console.log("Olá ",nome)
}
imprimirNome("thiago")
imprimirNome("Joshua")
imprimirNome("Carla")

function soma(numero,numero2){
    console.log("A soma é ",numero+numero2)
}
soma(2,6)*/
/*
function anna(){
    console.log("Bom dia anna")
}
anna()*/

/*function calcularArea(largura,altura){
    const resultadoArea = largura *altura
    return resultadoArea
}

let area = calcularArea(2,5)
console.log("A area é:",area)
console.log("A area é:",calcularArea(2,5))*/

/*function soma(numero,numero2){
    soma = numero +numero2
    return soma
}
let resultado = soma(1,4)
console.log(resultado)

array = [1,4,1,6,9,2,78,9,3,2,8,0,42,9,0,43,45,8,90,3,3,76,8,2,6]

function elementoArray(array){
let array2 = []
array2.push(array[0])
array2.push(array[array.length-1])
return array2
}
console.log(elementoArray(array))*/

/*const calculaArea = function(largura,altura){
    const soma = largura * altura
    return soma
}

const resultado = calculaArea(2,5)
console.log(resultado)*/

/*const calculaArea = (altura,largura) => {
    const area = altura *largura
    return area
}

console.log("A area é:",calculaArea(2,7))*/

/*const soma = function(numero,numero2){
    resultado = numero+numero2
    console.log("O resultado da soma é:",resultado)}
soma(3,6)
const dobro = (numero) => {
    return numero *2
}
console.log("O dobro é:",dobro(6))*/

const caracteristicas = []
caracteristicas.push(prompt("O monstro tem sede de sangue? (s ou n)"))
if(caracteristicas[0] === "s"){

}else{
    caracteristicas.push(prompt("O monstro se transforma com lua cheia? (s ou n)"))
    if(caracteristicas[1] === "s"){

    }else{
        caracteristicas.push(prompt("O monstro cospe fogo? (s ou n)"))
    }
    
    
}

function determinaMonstro(caracteristicas) {
    let string
    if(caracteristicas[0] === "s"){
        string = "vampiro"
        return string
    }else if(caracteristicas[1] === "s"){
        string = "lobsomen"
        return string
    }else if(caracteristicas[2] === "s"){
        string = "dragão"
        return string
    }else{ 
        string = "humano"
        return string
    }

}
console.log("O monstro é um: ",determinaMonstro(caracteristicas))

