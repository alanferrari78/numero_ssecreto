alert('Jogo do numero positivo e negativo')

let numero = prompt('Digite um numero entre -100 e 100')
console.log('Numero escolhido', numero)

if (numero >0) {
    alert('Voce Digitou o número positivo ('+numero+')')
} else alert('Voce Digitou o número negativo ('+numero+')')