function verificaFibonacci(numero) {
  
    let numero1 = 0;
    let numero2 = 1;
    
  
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    while (numero2 < numero) {
        let soma = numero1 + numero2;
        numero1 = numero2;
        numero2 = soma;

       
        if (numero2 === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
    }

    return `${numero} NÃO pertence à sequência de Fibonacci.`;
}

let numero = 11;
console.log(verificaFibonacci(numero)); 