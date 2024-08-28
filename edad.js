// 8. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos 
// los años que ha cumplido (desde 1 hasta su edad). 
// Preguntar al usuario su edad
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu edad? ', (edad) => {
    edad = parseInt(edad);

    if (edad > 0) {
        console.log('Has cumplido los siguientes años:');
        for (let i = 1; i <= edad; i++) {
            console.log(i);
        }
    }

    rl.close();
});