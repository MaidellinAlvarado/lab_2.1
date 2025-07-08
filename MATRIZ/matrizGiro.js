function rotar(matriz) {
    const n = matriz.length;


    const matrizRotada = Array.from({ length: n }, () => Array(n).fill(0));


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrizRotada[j][n - 1 - i] = matriz[i][j];
        }
    }

    return matrizRotada;
}


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz original:");
console.table(matriz);


const matrizRotada = rotar(matriz);

console.log("Matriz rotada 90 grados en sentido horario:");
console.table(matrizRotada);
