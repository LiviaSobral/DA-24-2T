//atividade avaliativa, esse programa vai converter celsius para fahrenheit
//ele vai pedir um numero e vai fazer um console.log com o resultado
/*
Celsius  |   Fahrenheit  | Output do programa
1        |      33.8     |       33.8
10       |       50      |        50
-10      |       14      |        14
-30      |      -22      |       -22
1.4      |     34.52     |      34.52
100      |      212      |       212
-3.6     |     25.52     |      25.52

Não Houve erros no programa
*/

let celsius
let fahrenheit

celsius = prompt("qual é o grau celsius?") 
console.log("o numero em celsius é",celsius)
fahrenheit = (celsius *1.8) + 32
console.log("Em fahrenheit fica ",fahrenheit)

