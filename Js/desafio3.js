function inverterString(str) {
    let stringInvertida = ''; 
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }
    
    return stringInvertida;
}

let string = "Olá, mundo!";
let resultado = inverterString(string);

console.log("String original:", string);
console.log("String invertida:", resultado);