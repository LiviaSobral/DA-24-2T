/*let boolean1 = true
let boolean2 = false
console.log("Bollean1:",boolean1)
console.log("Bollean2:",boolean2)

console.log("Bollean1 && Bollean2:",boolean1 && boolean2)*/

/*let a = true
let b = false
let c = true


console.log("a:",a)
console.log("b:",b)
console.log("c:",c)
console.log("a && b:",a && b)
console.log("b && c:",b && c)
console.log("a && c:",a && c)
console.log("a && b && c",a && b && c)
console.log("a || b:",a || b)
console.log("b || c:",b || c)
console.log("a || c:",a || c)
console.log("a || b || c",a || b || c)
console.log("!a:",!a)
console.log("!b:",!b)
console.log("!c:",!c)*/

/*const nome = prompt("Qual seu nome?")
const nascimento = prompt("Qual seu ano de nascimento?")
const data = prompt("Qual ano é?:")
idade = data - nascimento
idadeEm2050 = (2050 - data) + idade
console.log("Seu nome é:",nome)
console.log("Sua idade é:",idade)
console.log("Maior de idade:",idade >= 18)
console.log("Idade em 2050:",idadeEm2050)*/

/*const bool1 = true
//é criada a variavel bool1 e nela é colocada o boolean true
const bool2 = false
//é criada a variavel bool2 e nela é colocada o boolean false
const bool3 = !bool2
//é criada a variavel bool3 e nela é colocada o conteudo da variavel bool2 ao contrario: true

let resultado = bool1 && bool2
//é criada a variavel resultado e nela a gente recebe bool1 && bool2 que resulta em false pois bool2 é false
console.log("b. ",resultado)
//imprimimos o conteudo da variavel resultado: false

resultado = !resultado && (bool1 || bool2)
//mudamos o conteudo da variavel resultado para o contrario dela mesma: true && (bool1||bool2:true) isso fica true && true que resulta em true
console.log("c. ",resultado)
//aqui nos imprimimos o conteudo da variavel resultado que é: true

console.log("d. ", typeof resultado)
//aqui nos imprimimos o tipo da variavel resultado que é: Boolean*/

/*let primeiroNumero = Number(prompt("digite um numero!"))
let segundoNumero = Number(prompt("digite outro numero!"))

const some = primeiroNumero + segundoNumero
console.log(soma)*/

/*const idade = Number(prompt("Qual sua idade?"))
const idadeAmigo = Number(prompt("Idade do melhor amigo?"))
let resultado = idade> idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?",resultado)
resultado = idade - idadeAmigo
console.log("Com uma diferença de",resultado)*/

/*const idade = Number(prompt("qual é a sua idade?"))
const resultado = idade * 12
console.log("Sua idade em meses é:",resultado)
let resultado1 = idade *365
console.log("Sua idade em dias é:",resultado1)
resultado1 = resultado1* 24
console.log("Sua idade em horas é:",resultado1)*/

const numero= Number(prompt("digite um numero"))
const numero2= Number(prompt("digite outro numero"))
let resultado = numero>numero2
console.log("O primeiro numero é maior que o segundo?",resultado)
resultado = numero === numero2
console.log("O primeiro numero é igual que o segundo?",resultado)
resultado = numero%numero2 === 0
console.log("O primeiro numero é divisivel pelo segundo?",resultado)
resultado = numero2%numero === 0
console.log("O segundo numero é divisivel pelo primeiro?",resultado)



