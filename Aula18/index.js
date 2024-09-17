/*const filme = {
    nome:"Auto da Compadecida",
    ano:2000,
    elenco:["Matheus Nachtergaele","Selton Mello","Denise Fraga","Virginia Cavendish"],
    transmissoesHoje:[
        {canal:"telecine",horario:"21h"},
        {canal:"Canal Brasil",horario:"19h"},
        {canal:"Globo",horario:"14h"}
    ]
}

console.log(filme.elenco[0])
//vai imprimir a primeira pessoa do elenco
console.log(filme.elenco[filme.elenco.length-1])
//vai imprimir a ultima pessoa do elenco
console.log(filme.transmissoesHoje[2])
//vai imprimir tudo sobre a segunda transmissora*/

/*const cachorro = {
    nome:"Juca",
    idade:3,
    raca:"SRD"
}
const gato = {...cachorro,nome:"Juba"}
const tartaruga = {...gato,nome: gato.nome.replaceAll("a","o")}

console.log(cachorro)
//vai imprimir nome:juca idade:3 raca:SRD
console.log(gato)
//vai imprimir nome:Juba Idade:3 raca:SRD
console.log(tartaruga)
//vai imprimir nome:Jubo Idade:3 raca:SRD
//a sintaxe dos tres pontos copia o objeto anterior*/

/*function minhafuncao(objeto,propriedade){
    return objeto[propriedade]
}

const pessoa = {
    nome:"Caio",
    idade:23,
    backender:false
}

console.log(minhafuncao(pessoa,"backender"))
//vai imprimir false
console.log(minhafuncao(pessoa,"altura"))
//vai dar erro pois essa propriedade não existe*/

/*const pessoa = {
    nome:"Joshua",
    apelido:["Josh","jo","shua"]
}

function frase(objeto){
    console.log("Eu sou",objeto.nome,"mas pode me chamar de:",objeto.apelido[0],",",objeto.apelido[1],"ou",objeto.apelido[2])
}
frase(pessoa)

const outraPessoa = {
    ...pessoa,
    apelido:["apelido1","apelido2","apelido3"]
}

frase(outraPessoa)*/

/*const pessoa ={
    nome:"Roberto",
    idade:20,
    profissão:"Programador backend"
}
const pessoa2 ={
    nome:"Claudia",
    idade:26,
    profissão:"Professora"
}

function fazArray(objeto){
    return array = [objeto.nome,objeto.nome.length,objeto.idade,objeto.profissão,objeto.profissão.length]
}
console.log(fazArray(pessoa))
console.log(fazArray(pessoa2))*/

/*let carrinho =[]

const maca ={
    nome:"Maça",
    disponibilidade:true
}
const pera ={
    ...maca,
    nome:"Perá"
}
const banana={
    ...maca,
    nome:"Banana"
}

function colocaCarrinho(fruta){
    return carrinho.push(fruta.nome)
}
colocaCarrinho(maca)
colocaCarrinho(pera)
colocaCarrinho(banana)
console.log(carrinho)*/

//Desafios

/*function criaObjeto(){
    const nome= prompt("Digite seu nome")
    const idade= prompt("Digite sua idade")
    const profissao=prompt("Digite sua profissão")
    return pessoa ={Nome:nome,Idade:idade,Profissao:profissao}
}
console.log(criaObjeto())
console.log(typeof pessoa)*/

/*const filme ={
    nome:"Star Wars Episodio 2: O Ataque dos clones",
    lancamento: 2002
}
const filme2 ={
    nome:"Star Wars Episodio 3: A Vingança dos sith",
    lancamento:2005
}

function comparaFilme(filme,filme2) {
    console.log("O primeiro filme foi lançado antes do segundo?",filme.lancamento<filme2.lancamento)
    console.log("O primeiro filme foi lançado ao mesmo ano que o segundo?",filme.lancamento===filme2.lancamento)
}

comparaFilme(filme,filme2)*/

let carrinho =[]

const maca ={
    nome:"Maça",
    disponibilidade:true
}
const pera ={
    ...maca,
    nome:"Perá"
}
const banana={
    ...maca,
    nome:"Banana"
}

function disponivel(fruta){
    return fruta.disponibilidade = !fruta.disponibilidade
}

function colocaCarrinho(fruta){
    return carrinho.push(fruta.nome)
}
colocaCarrinho(maca)
colocaCarrinho(pera)
colocaCarrinho(banana)
console.log(carrinho)
disponivel(maca)
console.log(maca)




