// 24. Escribir un programa que almacene la cadena de caracteres contraseña en una 
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la 
// contraseña  introducida por el usuario coincide con la guardada en la variable sin 
// tener en cuenta mayúsculas y minúsculas. 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contraseñaGuardada = "Manchas_3616";

rl.question('Por favor, ingresa la contraseña: ', (contraseñaIntroducida) => {

    if (contraseñaGuardada.toLowerCase() === contraseñaIntroducida.toLowerCase()) {
        console.log("La contraseña es correcta.");
    } else {
        console.log("La contraseña es incorrecta.");
    }

    rl.close();
});
