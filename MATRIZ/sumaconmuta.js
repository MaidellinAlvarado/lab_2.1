
function sumarMatrices2x2(matrizA, matrizB) {
    const resultado = [
        [0, 0],
        [0, 0]
    ];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    return resultado;
}

// Definir matrices A, B y C
const matrizA = [
    [1, 0],
    [-2, 3]
];

const matrizB = [
    [4, -1],
    [2, 0]
];

const matrizC = [
    [3, 2],
    [-1, 1]
];

// (A + B) + C
const sumaAB = sumarMatrices2x2(matrizA, matrizB); // A + B
const resultado1 = sumarMatrices2x2(sumaAB, matrizC); // (A + B) + C

// A + (B + C)
const sumaBC = sumarMatrices2x2(matrizB, matrizC); // B + C
const resultado2 = sumarMatrices2x2(matrizA, sumaBC); // A + (B + C)

// Imprimir resultados
console.log("Matriz A:");
console.table(matrizA);

console.log("Matriz B:");
console.table(matrizB);

console.log("Matriz C:");
console.table(matrizC);

console.log("Resultado de (A + B) + C:");
console.table(resultado1);

console.log("Resultado de A + (B + C):");
console.table(resultado2);

