/*let matriz = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz[0][1])
console.log(matriz[1][0])
console.log(matriz[1][2])*/

/*let matriz = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

let matriz1=[]

matriz1[0]=[1,2,3]
matriz1[1]=[4,5,6]
matriz1[2]=[7,8,9]

console.log(matriz[0][2])
console.log(matriz[2][1])
console.log(matriz[1][1])
console.log(matriz[1][0])*/

/*let jogoDaVelha =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
jogoDaVelha[1][2]= 1
console.log(jogoDaVelha[0])
console.log(jogoDaVelha[1])
console.log(jogoDaVelha[2])


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0;i<matriz.length;i++){
    for(let j = 0;j<matriz.length;j++){

        console.log(matriz[i][j])
    }
}
soma = 0
for(let i=0;i<matriz.length;i++){
    for(let j = 0;j<matriz.length;j++){
        soma +=matriz[i][j]
    }
}

console.log(soma)

for(let i=0;i<matriz.length;i++){
    for(let j = 0;j<matriz.length;j++){
        matriz[i][j]*=2
        console.log(matriz[i][j])
    }
}*/

/*let matriz =[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
    let soma = 0
for(let i=0;i<matriz.length;i++){
    for(j=0;j<matriz.length;j++){
        soma += matriz[i][j]
    }
}
console.log(soma)*/
let tentativa = 0
let batalha = []
let quantidadeNavios =0
batalha[0]=[0,0,0,0,0,0,0,0,0,0]
batalha[1]=[0,0,0,0,0,0,0,0,0,0]
batalha[2]=[0,0,0,0,0,0,0,0,0,0]
batalha[3]=[0,0,0,0,0,0,0,0,0,0]
batalha[4]=[0,0,0,0,0,0,0,0,0,0]
batalha[5]=[0,0,0,0,0,0,0,0,0,0]
batalha[6]=[0,0,0,0,0,0,0,0,0,0]
batalha[7]=[0,0,0,0,0,0,0,0,0,0]
batalha[8]=[0,0,0,0,0,0,0,0,0,0]
batalha[9]=[0,0,0,0,0,0,0,0,0,0]
batalha[10]=[0,0,0,0,0,0,0,0,0,0]

function colocaNavio(batalhaNaval) {
    batalha[3][0]=1
    batalha[4][0]=1
    batalha[5][0]=1
    batalha[0][7]=1
    batalha[0][8]=1
    batalha[0][9]=1
    batalha[8][5]=1
    batalha[8][6]=1
    batalha[4][2]=1
    batalha[9][6]=1
    batalha[9][7]=1
}

function mapa(){
    frase = ""
    for(i=0;i<batalha.length;i++){
        for(j=0;j<batalha[i].length;j++){
            if(j === 0){
                frase += "|"
            }
            frase+= batalha[i][j]+" "

        }
    }
    alert(frase)
    selecao()
}

function selecao(){
    quantidadeNavios = 0
    for(i=0;i<batalha.length;i++){
        for(j=0;j<batalha[i].length;j++){
            if(batalha[i][j]===1){
                quantidadeNavios +=1
            }
        }
    }
    if(tentativa<17||quantidadeNavios===0){
        frase = "Total de navios restantes: "+quantidadeNavios
        alert(frase)
        escolha= Number(prompt("para atacar(1) e para ver o mapa(2)"))
    if(escolha===1){
        linha = Number(prompt("sabendo que há 10 linhas escolha uma(0 a 9)"))
        coluna =Number(prompt("sabendo que há 10 colunas escolha uma(0 a 9)"))
        atacar(linha,coluna)
    }else{
        mapa()
    }
    }else if(quantidadeNavios === 0){
        alert("Todos os navios foram destruidos")
    }else{
        alert("Tentativas acabaram")
    }
}

function atacar(linha,coluna){
    if(batalha[linha][coluna]===1){
        batalha[linha][coluna]=3
        tentativa ++
        alert("Você atingiu um navio")
    }else if(batalha[linha][coluna]===3){
        alert("Você ja havia atacado esse local antes")
        tentativa++
    }else{
        batalha[linha][coluna]=3
        tentativa++
        alert("So tinha agua")
    }
    selecao()
}
colocaNavio()
selecao()



