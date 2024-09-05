/*for(i = 1; i !== 11;i++){
    console.log("numero",i)
}*/
/*for(i = 1; i !== 21;i++){

    if(i%2 === 0){
        console.log("numero",i)
    }
}*/
/*const numeroTabuada = Number(prompt("Digite um numero para saber a tabuada"))

for (i=1;i!== 11;i++){
    const resultado = i * numeroTabuada
    console.log("O numero ",numeroTabuada," X ",i," é igual a: ",resultado)
}*/
/*let soma = 0
for(i = 0; i!==5;i++){
    numero  = Number(prompt("Escreva um numero"))
    soma += numero
}
console.log("A soma dos numeros é ",soma)*/
/*let soma = 0
for(i = 0; i!==5;i++){
    numero  = Number(prompt("Escreva uma das nota"))
    soma += numero
}
console.log("A media das notas é ",soma/5)*/
const palavras = ["genesect","dinossauro","pao","metagross","frango","heracross","golisopod","computador","cachorro","pastel","trilobita","dragao","inconstitucionalissimamente"]
const escolhaComputador = Math.floor(Math.random()*palavras.length);
let palavra = []
let letras = []
let letraspalavra = [...palavras[escolhaComputador]]
for(i = 0; i !== palavras[escolhaComputador].length;i++){
    palavra.push("-") 
}
for(t = 0;t!==13 && palavra.includes("-") !== false;t++){
    console.log(palavra)
    letras.push(prompt("Digite uma letra"))
    if(letraspalavra.includes(letras[t])){
        console.log("A letra", letras[t]," tem na palavra")
        for(let cont = 0;cont !== letraspalavra.length;cont++){
            
            if(letraspalavra[cont] === letras[t]){
                palavra[cont]= letraspalavra[cont]
            
            }

        

        }
    }else{
        console.log("não tem a letra ",letras[t])
    }
    

    }
    console.log(palavra)
    console.log(palavras[escolhaComputador])
