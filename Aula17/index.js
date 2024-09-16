/*const professor ={
    nome:'lucas',
    idade:32,
    altura:1.75,
    email: "lucas@gmail.com",
    tarefas:["dar aula","responder duvidas"],
    contarPiadas:function(){
        console.log("É pa vê ou pa comê?")
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = "leo"
professor["email"] = "leo@gmail.com"

console.log(professor.nome)
console.log(professor.email)*/

/*const starWars ={
    direcao:"George Lucas",
    nome:"Star Wars: Episódio 2 - O ataque dos clones",
    anoDeLancamento: 2002,
    elenco:["Hayden Christensen - Anakin","Ewan McGregor - Kenobi","Natalie Portman - Padmé","Temuera Morrison - Jango Fett","Christopher Lee - Conde Dookan","Daniel Logan - Boba Fett",
        "Ian McDiarmid - Darth Sidius/Palpatine","Samuel L. Jackson - Mace Windu","Anthony Daniels - C3PO","Jimmy Smits - Bail Organa", "Ahmed Best - jar jar Binks","Frank Oz - Yoda",
        "Kenny Baker - R2D2","Silas Carson - Ki-Adi-Mundi","Alethea McGrath - Jocasta Nu","Matt Sloan - Plo Koon","Zachariah Jensen - Kit Fisto","Amy Allen - Aayla Secura"],
    jaVisto: true
}

console.log(starWars.direcao)
console.log(starWars.nome)
console.log(starWars.anoDeLancamento)
console.log(starWars["elenco"])
console.log(starWars["jaVisto"])*/

/*const pessoa = {
    nome:"Claudia",
    idade:30,
    generoMusicaFavorito:"MPB"
}
console.log("O nome da pessoa é",pessoa.nome,",ela tem",pessoa.idade,"anos e gosta muito de",pessoa.generoMusicaFavorito)*/

/*const donoDoPet = {
    nome:"Heloisa",
    idade:19,
    pet:{
        nomeDoPet: "Rock",
        raca:"vira-lata",
        idadeDoPet: 16
    }
}
console.log(donoDoPet.pet.nomeDoPet)*/
/*const professor ={
    nome:'lucas',
    idade:32,
    altura:1.75,
    email: "lucas@gmail.com",
    tarefas:["dar aula","responder duvidas"],
    contarPiadas:function(){
        console.log("É pa vê ou pa comê?")
    }
}

console.log(professor.tarefas[1])*/

/*const curso ={
    nome:"Front end noturno",
    linguagens:["JS","CSS","HTML"]
}

console.log(curso.linguagens[2])*/

/*const professores = [{nome:"Lucas",modulo:1},{nome:"Leo",modulo:2},{nome:"Mika",modulo:3}]
console.log(professores[1].nome)*/

/*const curso ={
    nome:"Front end noturno",
    linguagens:["JS","CSS","HTML"]
}
curso.numeroEstudantes = 50
curso["numeroProfessores"] = 10
console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)*/

/*const starWars ={
    direcao:"George Lucas",
    nome:"Star Wars: Episódio 2 - O ataque dos clones",
    anoDeLancamento: 2002,
    elenco:["Hayden Christensen","Ewan McGregor","Natalie Portman","Temuera Morrison","Christopher Lee","Daniel Logan",
        "Ian McDiarmid","Samuel L. Jackson","Anthony Daniels","Jimmy Smits", "Ahmed Best","Frank Oz",
        "Kenny Baker","Silas Carson","Alethea McGrath","Matt Sloan","Zachariah Jensen","Amy Allen"],
        personagens:["anakin","Obi-Wan Kenobi","Padmé","Jango Fett","Conde Dookan","Boba Fett","Palpatine","Mace Windu","C3PO","Bail Organa","Jar Jar Binks","Yoda","R2D2","Ki-Adi-Mundi",
            "Jocasta Nu","Plo Koon","Kit Fisto","Aayla Secura"],
    jaVisto: true
}


for (i = 0; i < starWars.elenco.length;i++){
    console.log(starWars.elenco[i]," - ",starWars.personagens[i])
}

starWars.elenco[0] = "Xuxa"
console.log("------------------------------------------")
console.log("Direção:",starWars.direcao)
console.log("Nome do filme:",starWars.nome)
console.log("Ano de lançamento:",starWars.anoDeLancamento)
console.log("Elenco:",starWars.elenco)
console.log("Personagens:",starWars.personagens)
console.log("ja foi visto por mim:",starWars.jaVisto)*/

/*const usuario = {
    nome:"prof",
    idade:27,
    email:"prof@senac.com.br",
    cidade:"são leopoldo"
}

const novoUsuario ={
    ...usuario,
    nome:"Lucas",
    idade:32,
    cidade:"Canoas"
}

console.log(usuario)
console.log(novoUsuario)

const nomeProfs = ["lucas","leo","mika"]

const novaLista = [...nomeProfs]

console.log(novaLista)
*/

/*const pessoa = {
    nome:"Claudia",
    idade:30,
    generoMusicaFavorito:"MPB"
}

function novaPessoa(pessoa) {
const outraPessoa ={
    ...pessoa,
    comidasFavoritas: ["peixe frito","Bolinho de bacalhau","frango assado","ovo frito"],
    melhorAmigo:{
        nome:"Carlos",
        idade: 28
    }
}
console.log("O nome da pessoa é",outraPessoa.nome,"e suas comidas favoritas são",outraPessoa.comidasFavoritas[0],",",outraPessoa.comidasFavoritas[1],",",outraPessoa.comidasFavoritas[2],"e",outraPessoa.comidasFavoritas[3],
    ". Seu melhor amigo se chama",outraPessoa.melhorAmigo.nome,"e tem",outraPessoa.melhorAmigo.idade,"anos.")
}
console.log(novaPessoa(pessoa))*/

const personagensOnePunch = [{nome:"Saitama",idade:25,classe:"guerreiro",poderes:["Super Força","Super Resistencia","Super Velocidade","Super Pulo","é careca"]},{nome:"Genos", idade:19, classe:"distancia/perto tambem",poderes:["poderes de ciborgue","velocidade","super força","super sentidos","manipulação de energia"]},{nome:"Cavaleiro Sem Licença",idade:25,classe:"cavaleiro",poderes:["bicicleta","Vontade Indomável","Manoplas"]}]
function adicionaPersonagen(objeto) {
personagensOnePunch.push(objeto)
}
function buscaPersonagen(nome){
    for(i = 0;i<personagensOnePunch.length;i++){
        if (nome === personagensOnePunch[i].nome){
            return personagensOnePunch[i]
        }else{
            console.log("O personagen não foi encontrado")
        }
    }
}
function listaPersonagen(){
    for(i=0;i<personagensOnePunch.length;i++){
        console.log(personagensOnePunch[i])
    }
}

console.log(buscaPersonagen("Saitama"))
listaPersonagen()
adicionaPersonagen({nome:"pão",idade:193419992349951,classe:"Deus e protetor de todo o universo",poderes:["Vontade divina"]})
console.log("-----------------------------------------")
listaPersonagen()