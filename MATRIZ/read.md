## SUMA DE MATRICES 2X2 EJERCICIO SUMA 


Aquí se define una función  sumarMatrices2x2 que toma como parámetros dos matrices (matrizA y matrizB)  de tamaño 2x2.
resultado es la matriz donde se almacenará la suma de matrizA y matrizB. Se inicializa como una matriz 2x2 llena de ceros.
Se utilizan dos bucles for: El primer bucle recorre las filas de las matrices 
El segundo bucle recorre las columnas de las matrices 
En cada iteración, se suma el elemento correspondiente de la fila i y columna j de matrizA con el de matrizB, y se almacena el resultado en resultado[i][j].
La matriz resultado contendra la suma de los elementos en las mismas posiciones de matrizA y matrizB.

Se utilizan console.table() para mostrar las matrices en formato de tabla, lo que hace que sean más fáciles de leer en la consola. Para correrlo en node js.


**SUMA DE  MATRICES 3X3 EJERCICIO SUMA **


Es casi lo mismo que el codigo anterior hay una función que toma dos matrices (matrizA y matrizB), ambas de tamaño 3x3, y devuelve una nueva matriz llamada resultado, que contiene la suma de ambas.

 La matriz resultado se inicializa como una matriz 3x3 llena de ceros. Esto asegura que todas las posiciones están definidas antes de llenarlas con los valores calculados.
 Se usan los dos bucles explicados anteriormente y se suman los valores en la posición (i, j) de matrizA y matrizB, y el resultado se guarda en la misma posición (i, j) de la matriz resultado. 
 console.table(): Muestra las matrices en formato tabular, lo que las hace más fáciles de leer. 

**SUMA CONMUTATIVA**

Tenemos una funcion suma de matrices, que recibe dos matrizes.
 Dos matrices matrizA y matrizB, ambas de tamaño 2x2.
Esto nos generara una nueva matriz resultado que contiene la suma de las dos matrices.
Usando dos bucles anidados para recorrer las posiciones de las matrices


Se toma el elemento en la posición (i, j) de matrizA y se suma con el elemento en la misma posición de matrizB.
El resultado se almacena en la misma posición (i, j) de la matriz resultado.

En cada posición (i, j), se suma el elemento correspondiente de matrizA y matrizB, y el resultado se guarda en la misma posición de la matriz resultado.



Sumamos las matrices y a esta sumaAB se le suma matrizC.

console.table() muestra las matrices en un formato entendible para nosotros. 


**matriz rotada**

Creamos una nueva matriz vacía de tamaño n x n para almacenar los valores rotados.
Array.from leng... crea una matriz de n filas y n columnas, todas inicialmente llenas de ceros.
For 1  recorre las filas de la matriz original (i representa el índice de la fila).
For 2 recorre las columnas de cada fila de la matriz original (j representa el índice de la columna).

Elemento actual de la matriz original.
matrizRotada[j][n - 1 - i]: Posición en la matriz rotada.
j pasa a ser el índice de la fila en la matriz rotada.
n - 1 - i pasa a ser el índice de la columna en la matriz rotada.

Asi se  hace la asignación efectúa la rotación en 90 grados.


**MATRICES COMPATIBLES**


Vamos a verificar si son compatibles para dicha operación mulplicacion,  muestraremos los resultados de matrices compatibles y manejaremos el caso de matrices incompatibles.

Dos matrices representadas como arreglos bidimensionales y de salida tenemos una nueva matriz. Resultado de la multiplicación 𝐴×𝐵


Para que dos matrices se puedan multiplicar el número de columnas de 𝐴 debe ser igual al número de filas de B.
Si no se cumple, muestra un mensaje de error y retorna un arreglo vacío



For1 recorre cada fila de A
For2 recorre cada columna de B.


Despues realiza el cálculo del producto entre la fila  𝑖 de 𝐴 y la columna 𝑗 de B. Suma el producto acumulado a la posición 

Sino son complatiples mostrara el error. 



**SUMA MATRIZ DE 2X2 MAS 3X3**
En matematicas  no es posible sumar una matriz de  2x2 mas una de 3x3


La suma de ambas matrices tengan las mismas dimensiones. Esto se debe a que la suma se realiza elemento por elemento, y si las dimensiones son diferentes, si no tengo donde sumarla no puedo. Hay opciones como rellenar los espacios de 0.