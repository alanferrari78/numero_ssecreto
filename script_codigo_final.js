//Desafios finais
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Seja bem vindo!');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. 
//Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
nome = ('Alan Ferrari');
console.log(`Ola ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. 
//Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Ola ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta:
// Qual a linguagem de programação que você mais gosta?. 
//Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let lingaguem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(lingaguem);


//Crie uma variável chamada "valor1" e outra chamada "valor2", 
//atribuindo a elas valores numéricos de sua escolha. Em seguida, 
//realize a soma desses dois valores e armazene o resultado em uma terceira 
//variável chamada "resultado". Utilize o console.log para mostrar a mensagem 
//"A soma de [valor1] e [valor2] é igual a [resultado]." no console.

valor1 = 5;
valor2 = 200;
resultado = valor1 + valor2;
resultado2 = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", 
//atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração 
//desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] 
//é igual a [resultado]." no console.

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado2}`);



//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
//utilize um if para verificar se a pessoa é maior ou menor de idade, 
//exibindo uma mensagem apropriada no console.

let idade = prompt('Qual sua idade?');
if (idade >=18) {
    console.log('Você é maior de idade')
} else console.log('Você é menor de idade');

let tipoIdade = idade>=18 ? 'maior': 'menor';
console.log(`Você ${tipoIdade} de idade!!!!`);

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, 
//negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um numero entre 100 e -100');

if (numero == 0) {
    alert('Você escolheu o numero Zero');
}
else {
        if (numero > 0) {
            alert(`Você escolheu o numero positivo ${numero}`);
        }
        else {
            alert(`Você escolheu o numero negativo ${numero}`);
        }
    };


//Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 1;

while (contador <=10) {
    console.log(`contagem progressiva ${contador}`);
    //contador = contador +1;
    contador++;
};

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar 
//se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

nota = 8;
console.log(nota);

if(nota >=8) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}


//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = parseInt(Math.random () *100);
console.log(numeroAleatorio);


//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorio2 = parseInt(Math.random () *10 +1);
console.log(numeroAleatorio2);


//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatorio3 = parseInt(Math.random () *1000 +1);
console.log(numeroAleatorio3);

//Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.