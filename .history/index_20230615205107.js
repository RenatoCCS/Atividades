/*<script>
      // tipos primitivos
      // string = texto
      // number = 0, 1, 1.1
      // boolean = true, false
      // float = 1239127219037.1231297103

      //  number + number = soma
      //  string + number = concatenar

      var n1 = Number(window.prompt('digite um numero'));
      var n2 = Number(window.prompt('digite outro numero'));

      // document.write('<div>Olá, <strong>' + nome + '</strong> <i>Prazer</i> em te conhecer, você tem ' + idade + ' anos</div>')

      var soma = n1 + n2;

      document.write(`A soma dos dois numeros é ${soma}`);
    </script>*/

// >
// <
// >=
// <=
// ==      = apenas o valor
// ===     = comparar tipo e o valor
// !=      = apenas o valor
// !==        = comparar tipo e o valor

// verdadeiro e falso = verdedeiro
// falso e verdadeiro = verdadeiro

// var anoNascimento = window.prompt('Qual seu ano de nascimento') // 1998

// var resultado = 2023 - anoNascimento

// console.log(resultado)

// if (resultado >= 18) {
//   console.log('Sim o usuario é maior de idade')
// } else {
//   console.log('Não pode acessar')
// }

// var idade = window.prompt('Digite sua idade')
// var nota = window.prompt('Digite a nota')

// tenha mais de 18 anos e tenha uma nota maior que 6

// var resposta = idade >= 18 && nota >= 6

// !not
// console.log(!resposta)

// exercicio 1
//  Ajude o professor, ele digitara 3 notas, calcule a media e retorne
//  se ele passou ou não de ano, não enviar em console.log
// deixa BUNITO estilizar bastante.

let aluno = window.prompt(' Qual o nome do aluno?');
let nota1 = window.prompt(' Qual a primeira nota do aluno?');
let nota2 = window.prompt(' Qual a segunda nota do aluno?');
let nota3 = window.prompt(' Qual a terceira nota do aluno?');
let resultado = nota1 + nota2 + nota3 / 3;

document.write(`A média do aluno é ${resultado}`);

if (resultado >= 15) {
  document.write(' e está aprovado!');
} else {
  document.write(' e está reprovado!');
}

//var resultado = document.querySelector('.result');
//console.log(resultado);

// exercicio 2
// 1 = pedra
// 2 = papel
// 3 = tesoura
// sempre asumiir que eu vou jogar tesoura
// if
// else
// quem ganhou

/*let tres = tesoura;
let dois = papel;
let um = pedra;
let resultado_JKP;

if (tres > dois) {
  document.write('Tesoura ganha de papel');
} else if (dois > um) {
  document.write('Papel ganha de pedra');
} else um < tres;
{
  document.write('Pedra ganha de tesoura');
}*/

// console.log('wasdsasadas consoleeeeeee')
// document.write(`<div>asdsadsa</div>`)

let A = 30;
let B = 10;
let SOMA = A + B;
console.log(`SOMA = ${SOMA}`);
