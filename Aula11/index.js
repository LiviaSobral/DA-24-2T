/*const respostaDoUsuario = prompt("Digite o numero que você quer testar")
//guarda uma varivel da resposta do usuario
const numero = Number(respostaDoUsuario)
//guarda o resultado anterior em outra variavel tipo number
if(numero %2 === 0){
    //se o numero tiver restante 0 ele vai execultar o codigo
    console.log("passou no teste")
    //codigo para digitar na tela passou no teste
}else{
    //se o numero não tiver restante 0 ele executa esse codigo
    console.log("não passou no teste")
    //codigo para digitar na tela não passou no teste
} //o if so passa se o numero for par e se for impar vai pro else*/

/*let fruta = prompt("escolha uma fruta")
let preco
switch(fruta){
    case "laranja":
        preco = 3.5
        break
    case "maçã":
        preco = 2.25
        break
    case "uva":
        preco = 0.30
        break
    case "pêra":
        preco = 5.5
        break
    default:
        preco = 5
        break
}
console.log("O preço da fruta ", fruta," é "," R$ ", preco)
//o codigo server para falar o preço da fruta selecionada pelo usuario
//se a fruta for maça o console emprimira "O preço da fruta maça é R$ 2.25"
//se o break for retirado do case "pera" então o preço da pera sera exibido como 5 e não 5.5*/

/*const numero = Number(prompt("Digite o primeiro numero"))
//a primeira linha cria uma variavel que aceita um numero enviado pelo usuario
if(numero > 0){
    console.log("esse numero passou no teste")
    let mensagem = "essa mensagem é secreta!!!"
}

console.log(mensagem)
//se for digitado 10 vai entrar no if e dar console.log no "esse numero passou no teste" se for digitado -10 vai dar erro
//sim o erro ocorre pois a variavel mensagem é criada dentro do if então se o if não for ativado ela não é criada então o console.log fora do if não tem uma 
//variavel pra imprimir e isso da erro*/

/*idade = Number(prompt("Qual sua idade"))
if(idade >= 18){
    console.log("pode dirigir")
}else{
    console.log("não pode dirigir")
}*/

/*turno = prompt("digite o turno que você estuda (M=Manhã,T=tarde,N=noite)").toLowerCase()
if(turno === "m"){
    console.log("Bom dia")
}else if(turno === "t"){
    console.log("boa tarde")
}else{
    console.log("boa noite")
}*/

/*turno = prompt("digite o turno que você estuda (M=Manhã,T=tarde,N=noite)").toLowerCase()
switch(turno){
    case "m":
        console.log("Bom dia")
        break
    case "t":
        console.log("Boa tarde")
        break
    default:
        console.log("boa noite")
}*/


/*genero = prompt("Qual o genero do filme").toLowerCase()
preço = Number(prompt("Qual o preço do ingresso"))

if(genero === "fantasia" && preço < 15){
    console.log("bom filme")
}else{
    console.log("escolha outro filme :(")
}*/

// desafios ---------------------------------------------------------------------------------------------------

/*genero = prompt("Qual o genero do filme").toLowerCase()
preço = Number(prompt("Qual o preço do ingresso"))

if(genero === "fantasia" && preço < 15){
    lanchinho = prompt("Qual lanche vai comprar?")
    console.log("bom filme aproveite o seu ", lanchinho)
}else{
    console.log("escolha outro filme :(")
}*/
const nome = prompt("qual seu nome?")
const tipoDeJogo = prompt("Qual tipo de jogo? (In/Do)").toUpperCase()
const etapaDoJogo = prompt("Qual etapa do jogo?(SF/DT/FI)").toLowerCase()
const categoria = Number(prompt("Qual é a categoria (1/2/3/4)"))
const numero = Number(prompt("Quantos ingressos você deseja?"))

if(tipoDeJogo === "DO"){
//domestico
    if(etapaDoJogo === "sf"){
//semifinais
        if(categoria === 1){
            //categoria 1
            console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
            console.log("o preço de cada é R$",1320)
            console.log("o preço total fica R$",1320*numero)
        }else if(categoria === 2){
            //categoria 2
            console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
            console.log("o preço de cada é R$",880)
            console.log("o preço total fica R$",880*numero)
        }else if(categoria === 3){
            //categoria 3
            console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
            console.log("o preço de cada é R$",550)
            console.log("o preço total fica R$",550*numero)
        }else{
            //categoria 4
            console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
            console.log("o preço de cada é R$",220)
            console.log("o preço total fica R$",220*numero)
        }
    }else if(etapaDoJogo === "dt"){
//decisão terceiro lugar
        if(categoria === 1){
        //categoria 1
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",660)
        console.log("o preço total fica R$",660*numero)
        }else if(categoria === 2){
         //categoria 2
         console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
         console.log("o preço de cada é R$",440)
         console.log("o preço total fica R$",440*numero)
        }else if(categoria === 3){
        //categoria 3
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",330)
        console.log("o preço total fica R$",330*numero)
        }else{
        //categoria 4
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",170)
        console.log("o preço total fica R$",170*numero)
        }
    }else{
//final
        if(categoria === 1){
        //categoria 1
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",1980)
        console.log("o preço total fica R$",1980*numero)
        }else if(categoria === 2){
         //categoria 2
         console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
         console.log("o preço de cada é R$",1320)
         console.log("o preço total fica R$",1320*numero)
        }else if(categoria === 3){
        //categoria 3
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",880)
        console.log("o preço total fica R$",880*numero)
        }else{
        //categoria 4
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",330)
        console.log("o preço total fica R$",330*numero)
        }
    }
}else{
//internacional
if(etapaDoJogo === "sf"){
    //semifinais
    if(categoria === 1){
        //categoria 1
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",7558)
        console.log("o preço total fica R$",7558*numero)
        }else if(categoria === 2){
         //categoria 2
         console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
         console.log("o preço de cada é R$",4972)
         console.log("o preço total fica R$",4972*numero)
        }else if(categoria === 3){
        //categoria 3
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",3107)
        console.log("o preço total fica R$",3107*numero)
        }else{
        //categoria 4
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",1243)
        console.log("o preço total fica R$",1243*numero)
        }
        }else if(etapaDoJogo === "dt"){
    //decisão terceiro lugar
    if(categoria === 1){
        //categoria 1
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",3729)
        console.log("o preço total fica R$",3729*numero)
        }else if(categoria === 2){
         //categoria 2
         console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
         console.log("o preço de cada é R$",2486)
         console.log("o preço total fica R$",2486*numero)
        }else if(categoria === 3){
        //categoria 3
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",1864)
        console.log("o preço total fica R$",1864*numero)
        }else{
        //categoria 4
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",960)
        console.log("o preço total fica R$",960*numero)
        }
        }else{
    //final
    if(categoria === 1){
        //categoria 1
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",9492)
        console.log("o preço total fica R$",9492*numero)
        }else if(categoria === 2){
         //categoria 2
         console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
         console.log("o preço de cada é R$",7458)
         console.log("o preço total fica R$",7458*numero)
        }else if(categoria === 3){
        //categoria 3
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",4972)
        console.log("o preço total fica R$",4972*numero)
        }else{
        //categoria 4
        console.log(nome," Voce escolheu o tipo de jogo ",tipoDeJogo," na etapa ",etapaDoJogo," na categoria ",categoria," e uma quantidade total de ",numero," ingressos")
        console.log("o preço de cada é R$",1864)
        console.log("o preço total fica R$",1864*numero)
        }
        }
}

