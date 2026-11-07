
/* 1.Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos. */
//utilizaremos "...nuemros" para recibirlos y "reduce" para sumarlos.

function sumEveryOther(...numeros) {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
};
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26


/* 2.Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números. */
/* recibimos todos los argumentos con rest, luego usamos filter con typeof para quedar solo con los que sean de tipo number y luego sumamos con reduce. */
function addOnlyNums(...argumentos) {
    const soloNumeros = argumentos.filter(arg => typeof arg === 'number');
    return soloNumeros.reduce((acumulador, actual) => acumulador + actual, 0);
};
console.log(addOnlyNums(1, "perro", 2, 4)); //7

/* 3.Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.*/
/* Al usar ...argumentos, todos los datos pasados a la funcion se guardaran automaticamente, en este caso solamente necesitaremos devolver su longitud.*/
function countTheArgs(...argumentos) {
    return argumentos.length;
};
console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

/* 4.Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator). */
/* vamos utilizar el spread operator (...) para esparcir y vaciar lo elementos de los arrays dentro de un nuevo array. */

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(combineTwoArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]

/* 5.Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos. */
/* usaremos indexOf para devolver la primera posicion (siempre devolve la primera posición), si un elemento esta repetido, su posicion actual(ndice) no coincidirá con su primera posición, así filter lo descartará*/

function onlyUniques (...argumentos) {
    return argumentos.filter((elemento,indice)=> {
        return argumentos.indexOf(elemento) === indice;
    });
};

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

/*6.Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array. */
//para esto usaremos rest ...arrays (nos devuelvera un array de arrays)

function combineAllArrays(...arrays) {
    return arrays.flat();
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

/*7.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. */
/* usaremos map para elevar cada uno al cuadrado y luego los sumaremos utilizando reduce. */
function sumAndSquare(...numeros) {
    const cuadrados = numeros.map(num => num **2);
    return cuadrados.reduce((acumulador, actual) => acumulador + actual, 0);
}


console.log(sumAndSquare(1, 2, 3)); // 1^2 + 2^2 + 3^2 = 14
console.log(sumAndSquare(4, 5)); // 4^2 + 5^2 = 41
console.log(sumAndSquare(1, 2, 3, 4)); // 1^2 + 2^2 + 3^2 + 4^2 = 30 

