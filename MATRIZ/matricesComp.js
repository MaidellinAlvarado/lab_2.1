
function multiply(matrizA, matrizB) {
    const filasA = matrizA.length;
    const columnasA = matrizA[0].length;
    const filasB = matrizB.length;
    const columnasB = matrizB[0].length;


    if (columnasA !== filasB) {
        console.error("Las matrices no son compatibles para la multiplicación.");
        return [];
    }


    const matrizResultado = Array.from({ length: filasA }, () => Array(columnasB).fill(0)); //llena este arreglo con ceros en todas sus posiciones


    for (let i = 0; i < filasA; i++) {
        for (let j = 0; j < columnasB; j++) {
            for (let k = 0; k < columnasA; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizResultado;
}

// matrices compatibles
const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

//  matrices incompatibles
const matrizIncompatibleA = [
    [0, 2],
    [5, 3]
];

const matrizIncompatibleB = [
    [1, 8, 7]
];


// matrices compatibles resultado incluido
console.log("Matriz A:");
console.table(matrizA);

console.log("Matriz B:");
console.table(matrizB);

const resultado = multiply(matrizA, matrizB);

console.log("Resultado de matrices compatibles:");
console.table(resultado);

// matrices incompatibles resultado
console.log(" matrices incompatibles:");
console.table(matrizIncompatibleA);
console.table(matrizIncompatibleB);

const resultadoIncompatible = multiply(matrizIncompatibleA, matrizIncompatibleB);
console.log("Matrices incompatibles:", resultadoIncompatible);
