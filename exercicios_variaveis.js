/*
===========================================================
Exercícios Práticos - Variáveis (var, let, const)
===========================================================
*/

// 1. Declare uma variável com `var` e atribua uma string com seu nome. Exiba no console.
var nome = "Luiss";
console.log(typeof nome);
console.log("Meu nome é " + nome);
// 2. Declare uma variável com `let` contendo um número e depois altere esse número para outro valor.
let idade = 20;
idade = 20;
console.log("Minha idade é " + idade);

// 3. Declare uma constante `const` com um array vazio. Adicione três elementos a esse array e exiba.
const nomes = [];
nomes.push("Luis");
nomes.push("Maria");
nomes.push("João");
console.log(nomes);
// 4. Escreva um bloco `if` que declare uma variável `var` dentro dele. Exiba essa variável fora do bloco.
var x = 10 + 10;
if (true) {
    var x = 20;
    console.log("Dentro do bloco if: " + x);
}
console.log("Fora do bloco if: " + x);
;

// 5. Escreva um bloco `if` que declare uma variável `let` dentro dele. Tente exibir essa variável fora do bloco (comente a linha que causa erro).
if (true) {
    let y = 15;
    console.log("Dentro do bloco if: " + y); 
}
// console.log("Fora do bloco if: " + y); Erro, pois y não está definido no escopo

// 6. Tente redeclarar uma variável usando `var` no mesmo escopo. Faça o mesmo com `let` e observe o erro.
var genero = "masculino";
var genero = "feminino"; // Redeclaração permitida
console.log("Genero com var: " + genero);

let genero = "masculino";
let genero = "feminino" ;
console.log("Genero com let: " + genero);

// 7. Declare uma variável com `const` que contém um objeto com duas propriedades. Altere uma dessas propriedades e exiba o objeto.
const pessoa = {
    nome: "Luis",
    idade: 19
};
pessoa.idade = 19;
console.log("const pessoa: " + pessoa);

// 8. Declare uma variável com `let` sem inicializá-la. Depois atribua um valor e exiba.
let cidade;
cidade = "brasilia";
console.log("let cidade: " + cidade);

// 9. Demonstre hoisting declarando uma variável com `var` depois de usá-la (exiba antes da declaração).
console.log(hoisting);
var hoisting = "Isso é hoisting";

// 10. Crie uma função que declare uma variável `var` dentro dela e tente acessar essa variável fora da função (explique o resultado).
var foraDaFuncao;
function minhaFuncao() {
    var dentroDaFuncao = "Estou dentro da função";

    console.log(dentroDaFuncao);
}
minhaFuncao();
