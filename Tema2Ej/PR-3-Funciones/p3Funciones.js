let key = prompt("1.Serie de Fibonacci \n 2.Mostrar Palabras Introducidas \n 3.Buscaminas \n Introduce un numero de Ejercicio: ");

switch (key) {
    case "1":
        /*1.Crea una funciónque muestre números de la serie de Fibonacci. La función recibirá como 
        parámetro el número de elementos de la serie que queremos que muestre. Este dato se lo solicitaremos 
        al usuario. Debes crear dos funciones para resolver este problema, una recursiva y otra iterativa.*/
        {
            //recursiva
            function fibonacci(n) {
                if (n == 1) return 0;
                else if (n == 2) return 1;
                else return fibonacci(n - 1) + fibonacci(n - 2);
            }
            document.write("<strong>Recursiva: </strong> " + fibonacci(6) + "</br>");
            //iterativa
            function serieFibonacci(numero) {
                let numeros = [0, 1];
                for (let i = 2; i < numero; i++) {
                    numeros[i] = numeros[i - 2] + numeros[i - 1];
                }
                return numeros[numeros.length - 1];
            }
            document.write("<strong>Iterativa: </strong>" + serieFibonacci(6));

        }
        break;
    case "2":
        /*2.Crea una función que reciba un array de palabras. la función devolverá un mapa que contenga como 
        clave cada palabra y el valor es el número de veces que esa palabra aparece en el array.Haremos una 
        página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y mostraremos las 
        repeticiones de las palabras.*/
        {
            let arrayPalabras = new Array();
            palabra = prompt(`Introduce una palabra`);
            while (palabra != null && palabra != "") {
                arrayPalabras.push(palabra);
                palabra = prompt(`Introduce una palabra`);
            }

            function mapContador(arrayPalabras) {
                const map = new Map();
                if (arrayPalabras instanceof Array == false) {
                    return null;
                } else {
                    const map = new Map();
                    for (let elemento of arrayPalabras) {
                        {
                            if (map.get(elemento) != undefined) {
                                map.set(elemento, map.get(elemento) + 1);
                            } else {
                                map.set(elemento, 1);
                            }
                        };
                    }
                    return map;
                }
            }

            var recorrerMapa = mapContador(arrayPalabras);
            recorrerMapa.forEach((elemento, valor) => {
                return document.write(`Palabra ${valor} se repite: ${elemento}<br>`);
            });

            break;
        }
    case "3":
        {
            //Tamaño del tablero.
            const FILAS = 8;
            const COLUMNAS = 8;
            const NMINAS = 9;
            const HAY_MINA = 10;
            function colocarMinas(tablero, FILAS, COLUMNAS, NMINAS) {
                for (let cont = 1; cont <= NMINAS; cont++) {
                    let fila, col;
                    do {
                        fila = parseInt(Math.random() * FILAS);
                        col = parseInt(Math.random() * COLUMNAS);
                    } while (tablero[fila][col] == HAY_MINA);

                    tablero[fila][col] = HAY_MINA;

                }
            }

            function colocarNumerosAlrededor(tablero, fila, col) {
                let cont = 0;
                if (tablero[fila][col] != HAY_MINA) {
                    if (col > 0) {
                        if (fila > 0) {
                            if (tablero[fila - 1][col - 1] == HAY_MINA) {
                                cont++;
                            }

                        }
                        if (tablero[fila][col - 1] == HAY_MINA)
                            cont++;
                        if (fila < tablero.length - 1) {
                            if (tablero[fila + 1][col - 1] == HAY_MINA) {
                                cont++;
                            }

                        }
                    }
                    if (col < tablero[fila].length) {
                        if (fila > 0) {
                            if (tablero[fila - 1][col + 1] == HAY_MINA) {
                                cont++;
                            }

                        }
                        if (tablero[fila][col + 1] == HAY_MINA) {
                            cont++;
                        }

                        if (fila < tablero.length - 1) {
                            if (tablero[fila + 1][col + 1] == HAY_MINA) {
                                cont++;
                            }

                        }
                    }
                    if (fila > 0) {
                        if (tablero[fila - 1][col] == HAY_MINA) {
                            cont++;
                        }
                        if (fila < tablero.length - 1) {
                            if (tablero[fila][col + 1] == HAY_MINA) {
                                cont++;
                            }
                        }
                        tablero[fila][col] = cont;
                    }
                }
            }
            function colocarNumeros(tablero, FILAS, COLUMNAS) {
                for (let i = 0; i < FILAS; i++) {
                    for (let j = 0; j < COLUMNAS; j++) {
                        colocarNumerosAlrededor(tablero, i, j);
                    }
                }

            }

            function crearTablero(FILAS, COLUMNAS, NMINAS) {

                var tablero = new Array(FILAS);

                for (let i = 0; i < FILAS; i++) {
                    tablero[i] = new Array(COLUMNAS);
                }
                for (let i = 0; i < FILAS; i++) {
                    for (let j = 0; j < COLUMNAS; j++) {
                        tablero[i][j] = 0;
                    }
                }
                colocarMinas(tablero, FILAS, COLUMNAS, NMINAS);
             colocarNumeros(tablero, FILAS, COLUMNAS);
                return tablero;

            }


            function dibujarTableroMinas(tablero, FILAS, COLUMNAS) {

                for (let i = 0; i < FILAS; i++) {
                    document.write("<div class='contenedor'>");
                    for (let j = 0; j < COLUMNAS; j++) {
                        if (tablero[i][j] > 0) {
                            if (tablero[i][j] == HAY_MINA) {
                                document.write("<div class='celdaVacia celdaOcupada'>" + "&#128163" + "</div>");
                            } else {
                                document.write("<div class='celdaVacia'>" + tablero[i][j] + "</div>");
                            }
                        } else {
                            document.write("<div class='celdaVacia'>" + "&nbsp" + "</div>");
                        }
                    }
                    document.write("</div>");
                }

            }



            dibujarTableroMinas(crearTablero(8, 8, 9), FILAS, COLUMNAS);

        }

        break;
}
