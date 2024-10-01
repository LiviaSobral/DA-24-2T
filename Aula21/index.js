/*let matriz=[
    [2,4,6],
    [8,10,12],
    [14,16,18]
]

console.log(matriz[2][1])
//vai imprimir 16 pois é o numero localizado na linha 2 e coluna 1*/

/*let matriz = [
    [5,10,15],
    [20,25,30],
    [35,40,45]
]

let soma = 0
for(let i = 0;i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        soma +=matriz[i][j]
    }
}

console.log(soma)
//o numero que sera imprimido é 225 isso ocorre pois ele soma cada numero da matriz e guarda na variavel soma*/

/*mapa=[
    [1,1,1,1,1],
    [1,2,0,0,1],
    [1,0,2,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
]
frase = ""
for(i=0;i< mapa.length;i++){
    for(j=0;j<mapa[i].length;j++){
        frase+= mapa[i][j]
        if(j===4){
            frase+="                                                  "
        }
    }
}
console.log(frase)*/

/*let pontos =[
    [2,5,3,6],
    [1,7,9,3],
    [6,2,7,3]
]
let total1=0
let total2=0
let total3=0


for(i=0;i<pontos.length;i++){
    for(j=0;j<pontos[i].length;j++){
        if(i===0){
            total1 +=pontos[i][j]
        }
        else if(i===1){
            total2+=pontos[i][j]
        }
        else if(i===2){
            total3+=pontos[i][j]
        }
    }
}

console.log("Jogador 1 fez:",total1,"Pontos")
console.log("Jogador 2 fez:",total2,"Pontos")
console.log("Jogador 3 fez:",total3,"Pontos")*/

/*function criaMatriz(){
    return matriz = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]
}
console.log(criaMatriz())
function inverteMatriz(matriz){
    return matriz=[
        [matriz[0][3],matriz[0][2],matriz[0][1],matriz[0][0]],
        [matriz[1][3],matriz[1][2],matriz[1][1],matriz[1][0]],
        [matriz[2][3],matriz[2][2],matriz[2][1],matriz[2][0]],
        [matriz[3][3],matriz[3][2],matriz[3][1],matriz[3][0]], //reverse() reverte automaticamente as linhas de um array
    ]
}
console.log(inverteMatriz(criaMatriz()))*/

//desafio jurassic park

let ilha = [
    [1,0,0,0,1,1,1,1,1,1],
    [1,0,0,0,0,2,2,1,0,1],
    [0,0,2,2,0,0,2,0,0,1],
    [0,0,1,4,0,2,0,2,0,1],
    [0,1,1,0,2,2,0,1,0,1],
    [0,0,0,0,3,0,1,0,0,1],
    [1,0,0,2,2,2,2,0,0,1],
    [1,0,2,2,2,0,0,0,0,1],
    [1,0,0,2,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
]
pos ={}
function menu(){
    //mostrar mapa e dar opções de movimento
    //chamar as outras funções
    frase = `    `+ilha[0][0]+" "+ilha[0][1]+" "+ilha[0][2]+" "+ilha[0][3]+" "+ilha[0][4]+" "+ilha[0][5]+" "+ilha[0][6]+" "+ilha[0][7]+" "+ilha[0][8]+" "+ilha[0][9]+`
    `+ilha[1][0]+" "+ilha[1][1]+" "+ilha[1][2]+" "+ilha[1][3]+" "+ilha[1][4]+" "+ilha[1][5]+" "+ilha[1][6]+" "+ilha[1][7]+" "+ilha[1][8]+" "+ilha[1][9]+`
    `+ilha[2][0]+" "+ilha[2][1]+" "+ilha[2][2]+" "+ilha[2][3]+" "+ilha[2][4]+" "+ilha[2][5]+" "+ilha[2][6]+" "+ilha[2][7]+" "+ilha[2][8]+" "+ilha[2][9]+`
    `+ilha[3][0]+" "+ilha[3][1]+" "+ilha[3][2]+" "+ilha[3][3]+" "+ilha[3][4]+" "+ilha[3][5]+" "+ilha[3][6]+" "+ilha[3][7]+" "+ilha[3][8]+" "+ilha[3][9]+`
    `+ilha[4][0]+" "+ilha[4][1]+" "+ilha[4][2]+" "+ilha[4][3]+" "+ilha[4][4]+" "+ilha[4][5]+" "+ilha[4][6]+" "+ilha[4][7]+" "+ilha[4][8]+" "+ilha[4][9]+`
    `+ilha[5][0]+" "+ilha[5][1]+" "+ilha[5][2]+" "+ilha[5][3]+" "+ilha[5][4]+" "+ilha[5][5]+" "+ilha[5][6]+" "+ilha[5][7]+" "+ilha[5][8]+" "+ilha[5][9]+`
    `+ilha[6][0]+" "+ilha[6][1]+" "+ilha[6][2]+" "+ilha[6][3]+" "+ilha[6][4]+" "+ilha[6][5]+" "+ilha[6][6]+" "+ilha[6][7]+" "+ilha[6][8]+" "+ilha[6][9]+`
    `+ilha[7][0]+" "+ilha[7][1]+" "+ilha[7][2]+" "+ilha[7][3]+" "+ilha[7][4]+" "+ilha[7][5]+" "+ilha[7][6]+" "+ilha[7][7]+" "+ilha[7][8]+" "+ilha[7][9]+`
    `+ilha[8][0]+" "+ilha[8][1]+" "+ilha[8][2]+" "+ilha[8][3]+" "+ilha[8][4]+" "+ilha[8][5]+" "+ilha[8][6]+" "+ilha[8][7]+" "+ilha[8][8]+" "+ilha[8][9]+`
    `+ilha[9][0]+" "+ilha[9][1]+" "+ilha[9][2]+" "+ilha[9][3]+" "+ilha[9][4]+" "+ilha[9][5]+" "+ilha[9][6]+" "+ilha[9][7]+" "+ilha[9][8]+" "+ilha[9][9]
    alert(frase)
    let resp = Number(prompt("Qual direção você quer ir? (1) cima (2)Baixo (3)esquerda (4) Direita"))
    if(resp===1){
        moverCima()
    }else if(resp ===2){
        moverBaixo()
    }else if(resp ===3){
        moverEsquerda()
    }else{
        moverDireita()
    }
}
function detectaDinossauro(){
    //retorna as posições dos dinossauros no mapa
    let d1 ={}
    let d2 ={}
    for(i=0;i<ilha.length;i++){
        for(j=0;j<ilha[i].length;j++){
            if(ilha[i][j]===3){
                d1 ={tipo:"Carnivoro",posi:i,posj:j}
            }
            if(ilha[i][j]===4){
                d2 ={tipo:"Herbivoro",posi:i,posj:j}
            }
        }
    }
    pos = {tipo:"Carnivoro",posi:d1.posi,posj:d1.posj,tipo2:"Herbivoro",posi2:d2.posi,posj2:d2.posj}
}

function moverCima(){
    //mover dinossauros para cima -1,0
    //detectar o local atual dos dinossauros?
    //detectar se o dinossauro carnivoro e herbivoro se encontraram e manter so o carnivoro
    //colocar grama por onde passar
    //herbivoros comer floresta e carnivoros n
    //tem que checar o bloco que vai mover e verificar se não esta localizado em numero acima de 10 ou for o numero 1

    detectaDinossauro()
    //ilha[pos.posi][pos.posj]//carnivoro
    //ilha[pos.posi2][pos.posj2]//herbivoro

    if(ilha[pos.posi-1][pos.posj] !== 1){
        if(pos.posi-1 > 0){  
                ilha[pos.posi-1][pos.posj] = 3
                ilha[pos.posi][pos.posj] = 0
            
        }
    }
    if(ilha[pos.posi2-1][pos.posj2] !== 1){
        if(pos.posi2-1 > 0){
            ilha[pos.posi2-1][pos.posj2] = 4
            ilha[pos.posi2][pos.posj2] = 0
        }
    }
menu()
}
function moverBaixo(){
    //mover dinossauros para baixo 1,0
    //tem que checar o bloco que vai mover e verificar se não esta localizado em numero acima de 10 ou for o numero 1
    detectaDinossauro()
    if(ilha[pos.posi+1][pos.posj] !== 1){
        if(pos.posi+1 <= 10){
                ilha[pos.posi+1][pos.posj] = 3
                ilha[pos.posi][pos.posj] = 0
        }
    }
    if(ilha[pos.posi2+1][pos.posj2] !== 1){
        if(pos.posi2+1 <= 10){
            ilha[pos.posi2+1][pos.posj2] = 4
            ilha[pos.posi2][pos.posj2] = 0
        }
    }
menu()
}
function moverEsquerda(){
    //mover dinossauros para esquerda 0,-1
    //tem que checar o bloco que vai mover e verificar se não esta localizado em numero acima de 10 ou for o numero 1
    detectaDinossauro()
    if(ilha[pos.posi][pos.posj-1] !== 1){
        if(pos.posj-1 >= 0){
                ilha[pos.posi][pos.posj-1] = 3
                ilha[pos.posi][pos.posj] = 0
        }
    }
    if(ilha[pos.posi2][pos.posj2-1] !== 1){
        if(pos.posj2-1 >= 0){
            ilha[pos.posi2][pos.posj2-1] = 4
            ilha[pos.posi2][pos.posj2] = 0
        }
    }
    menu()
}
function moverDireita(){
    //mover dinossauros para direita 0,1
    //tem que checar o bloco que vai mover e verificar se não esta localizado em numero acima de 10 ou for o numero 1
    detectaDinossauro()
    if(ilha[pos.posi][pos.posj+1] !== 1){
        if(pos.posj+1 <= 10){
                ilha[pos.posi][pos.posj+1] = 3
                ilha[pos.posi][pos.posj] = 0
        }
    }
    if(ilha[pos.posi2][pos.posj2+1] !== 1){
        if(pos.posj2+1 <= 10){
            ilha[pos.posi2][pos.posj2+1] = 4
            ilha[pos.posi2][pos.posj2] = 0
        }
    }
    menu()
}
menu()

