function sumarMatrices3x3(matrizA, matrizB) {
    const resultado = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]  
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    return resultado;
}

const matrizA = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

const matrizB = [
    [9, 8, 7], 
    [6, 5, 4], 
    [3, 2, 1]
];

const matrizResultado = sumarMatrices3x3(matrizA, matrizB);

console.log("Matriz A:");
console.table(matrizA);

console.log("Matriz B:");
console.table(matrizB);

console.log("Matriz Resultado:");
console.table(matrizResultado);
