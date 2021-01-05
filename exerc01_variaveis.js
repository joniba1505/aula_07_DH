/*
1. Criar e definir 5 variáveis com os seguintes valores: 
a. Um número inteiro positivo
b. Um número inteiro negativo
c. Um número decimal
d. Uma string
e. Um valor verdadeiro
*/


let numeroInteiro = 48;
let numeroNegativo = -52;
let numeroDecimal = 37.9;
let valorString = "casa";
let valorBooleano = true;

//2. Agora imprima as variáveis acima usando a função console.log()
console.log(`Conteúdo da variável numeroInteiro: ${numeroInteiro}`);
console.log(`Conteúdo da variável numeroNegativo: ${numeroNegativo}`)
console.log(`Conteúdo da variável numeroDecimal: ${numeroDecimal}`);
console.log(`Conteúdo da variável valorString: ${valorString}`);
console.log(`Conteúdo da variável valorBooleano: ${valorBooleano}`);


//3. Criar e definir 2 variáveis (nome e sobrenome) e imprimir a concatenação das variáveis adicionando um espaço no meio.
/*
let nome = "José";
let sobrenome = "Nilton";
console.log(nome + " " + sobrenome);
*/
//4. Experimente executar o seguinte código:
/*
var nome = "Clara";
console.log(Nome); - Recebemos um aviso de que a variável nome já foi declarada
*/

//5. Experimente executar o seguinte código:

//var nome = "Clara";
//console.log(nome, sobrenome);
// ReferenceError: sobrenome is not defined
// Não declaramos a variável sobrenome


// 6. Escrever um texto em mais de uma linha e imprimir usando a função console.log()

/*
let texto = "Estamos iniciando um novo ano. 2021 chegou, e com ele renovamos nossas esperanças de um ano repleto de coisas boas, sendo a principal delas, a saúde. 
Que as vacinas contra o Coronavírus possa fazer com que todos nós voltemos a viver normalmente como antes! ";
console.log(texto); //Houve um erro, pois a quebra de linha não foi reconhecida.
*/


/*
7. criar 2 variáveis valorNulo e naodefinido, definindo os valores respectivamente como “null” e “undefined”, e imprimir as duas 
variáveis utilizando a função console.log().
*/

let valorNulo = null;
let naoDefinido = undefined;
console.log(valorNulo);
console.log(naoDefinido);

/*
8.  Criar um array com 5 frutas diferentes e imprimir utilizando a função console.log().
Criar uma variável de uma string com o texto: “Digital House, a escola de programação que forma novas gerações de coders e profissionais 
digitais para imaginar, inovar  
e criar o que sempre sonharam.”
*/

let frutas = ["maçã", "laranja", "banana", "limão", "abacaxi"];
console.log(frutas);

let textoDh = “Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar  e criar o que sempre sonharam.”;
