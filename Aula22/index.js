/*let numeros = [1,2,3,4,5]
let soma = 0//Erro: não inicializou a variavel soma

for(let i =0;i<numeros.length;i++){
    soma+=numeros[i]
}
console.log(soma)*/

/*function fatorial(n){
    let resultado = 1
    for(let i=n;i>0;i--){
        resultado*=i
    }
    return resultado
}

console.log(fatorial(5))


//iteração  ||   i   ||  resultado
//1         ||   5   ||     5
//2         ||   4   ||     20
//3         ||   3   ||     60  
//4         ||   2   ||     120  
//5         ||   1   ||     120  

*/

/*let numeros = [1,2,3,4,5]
let soma = 0

for(let i =0;i<numeros.length;i++){
    console.log("i:",i,"numeros[i]:",numeros[i],"Soma antes:",soma)
    soma+= numeros[i]
    console.log("Soma depois",soma)
}
console.log("Resultado Final:",soma)*/

/*let numeros = [1,2,3,4,5]
let somapares = 0

for(let i =0;i<numeros.length;i++){
    console.log("I:",i,"Numeros[i]:",numeros[i])
    if(numeros[i]%2 === 0){
        somapares += numeros[i]
        console.log("Somapares:",somapares)
    }
}

console.log(somapares)*/

function jogoPontuacao(jogadas){
    let pontuacao = 0
    for(let i = 0;i<=jogadas.length;i++){
        console.log("O i é:",i)
        console.log("A pontuação é:",pontuacao)
        if(jogadas[i]==="ganhou"){
            console.log("Ganhou")
            pontuacao +=3
        }else if(jogadas[i]==="empatou"){
            console.log("empatou")
            pontuacao +=1
        }else if(jogadas[i]==="perdeu"){
            console.log("perdeu")
            pontuacao-=1
        }
    }


    return pontuacao
}

let resultadoFinal = jogoPontuacao(["ganhou","empatou","perdeu","ganhou"])
console.log("Pontuação final:",resultadoFinal)






