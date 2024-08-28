// 25. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
// ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte 
// al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario 
// tiene que tributar o no.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu edad? ', (edad) => {
    rl.question('¿Cuáles son tus ingresos mensuales en euros? ', (ingresos) => {
        
        edad = parseInt(edad);
        ingresos = parseFloat(ingresos);

        if (edad > 16 && ingresos >= 1000) {
            console.log("Debes tributar.");
        } else {
            console.log("No necesitas tributar.");
        }

        rl.close();
    });
});
