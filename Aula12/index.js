/*fatiasPizza = 6
console.log(fatiasPizza)
while (fatiasPizza >= 1) {
    fatiasPizza -= 1
    console.log(fatiasPizza)
}
console.log("Todas as fatias foram comidas")*/

/*let i = 0
while(i<= 10){
    console.log(i)
    i++
}*/

/*let estomago = 0
while(estomago <100){
    console.log("quero comer mais coxinhas", estomago)
    estomago += 1
}*/

/*let numero
let soma = 0
while(numero !== 0){
    numero= Number(prompt("digite um numero para somar ou 0 para terminar"))
    soma += numero
}
console.log("A soma de todos os numeros é: ",soma)*/

/*let c = 1
do{
    console.log("O valor do contador é: ",c)
    c++
}while(c<=6)*/

/*const numeros = [14, 67,89,15,23]
for(let i=0;i<5;i++){
    const elemento = numeros[i]
    console.log(elemento)
}*/
/*const array = [11,15,18,14,12,13]
let numero = 0
for(let i=0;i<array.length;i++){
    if(numero < array[i]){
        numero = array[i]
     }
}
console.log("O maior numero é: ",numero)*/

/*const array = [10,13,44,22,67,89,100,20]
let soma = 0
for(let i=0;i<array.length;i++){
    let numero = array[i]
    if(numero%2 === 0){
        soma += numero
        console.log("Adicionou o numero: ",numero)
        console.log("a soma ficou ", soma)
    }
}
console.log("Soma no final fica: ",soma)*/

/*const numeros = [14,67,89,15,23]
for(let num of numeros){
    console.log("Numero do array: ",num)
}*/
/*let array =["oi","sumido","tudo","bem?","Saudades"]
let frase = ""
for(let palavra of array){
    frase += palavra + " "
} 
console.log(frase)*/

/*const array = [11,15,18,14,12,13]
let soma = 0
for(numero of array){
    if(numero%2 === 0){
        soma += numero
    }
}
console.log(soma)*/

const palavras = ["pão","genesect","pizza","umaPalavraBemLonga","Policia","Universidade","Queijo","OutraPalavraBemLonga","Palavrão"]
let palavrasLongas = [palavras[1]]

for(let palavra of palavras){
    if(palavrasLongas[0].length < palavra.length){
        palavrasLongas.push(palavra)
    }
}
console.log(palavrasLongas)