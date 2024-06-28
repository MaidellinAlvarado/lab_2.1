function numerosAleatorios() {
    const numeros = [];
    const numeros1 = 10000;
    const min = 0;
    const max = 10000;

    for (let i = 0; i < numeros1; i++) {
        let alea = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push (alea);
    }

    return numeros1;
}


const alea1 = numerosAleatorios();
console.log(alea1);
