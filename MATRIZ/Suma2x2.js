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




const matrizA = [
    [2, 3], 
    [4, 1]  
];

const matrizB = [
    [1, 5], 
    [2, 2]  
];


const matrizResultado = sumarMatrices2x2(matrizA, matrizB);


console.log("Matriz A:");
console.table(matrizA);

console.log("Matriz B:");
console.table(matrizB);

console.log("Matriz Resultado:");
console.table(matrizResultado);