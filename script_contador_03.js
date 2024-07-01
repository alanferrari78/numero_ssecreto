let numero = prompt('Digite um numero para contagem regressiva');

contador = numero;

while (contador >=0) {
  console.log('Executando a iteração ' + contador);
  //alert('Executando a iteração ' + contador)
  contador = contador - 1;
}