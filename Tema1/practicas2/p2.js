alert("1.Juego de Numero Aleatorio \n 2.Triangulos de Asteriscos \n 3.Introducir numeros o caracters y contavilizarlos  \n 4.Primeros 10000 símbolos de la tabla Unicode.\n  5.Cuadrados aleatorios por la pagina ");
let key = prompt("Introduce un numero de Ejercicio: ");

switch (key) {
    case "1":
        /*1.Realiza unscript que implemente un juego de encontrar un número aleatorio bajo
                las siguientes condiciones:
                    a.La página calculará un numero aleatorio del 1 al 100.
                    b.El usuario dispondrá de 5 intentos para adivinar el número.
                    c.Si el usuario escribe algo que no es un número mostrará un mensaje de error
                y volverá a pedir un número, pero esto no contará como un intento.
                    d.Si el usuario acierta el número se le indica al usuario que ha acertado y
                mediante un cuadro de confirmación se le pregunta si desea volver a jugar o salir.
                    e.Si el usuario no acierta con el número, le dirá si el número es mayor o menor que
                el que ha introducido y le volverá a preguntar por un número.
                    f.Si ha llegado al último intento y no ha acertado se le indicará al usuario que
                ha perdido y mediante un cuadro de confirmación le preguntará si desea volver a
                jugar o salir.
                        g.Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
                        h.Cada vez que el usuario termine un juego, se deberá escribir en la página información
                 sobre ese juego:
                 1.Juego terminado: SI
                 Número de intentos: 4
                 Número acertado: SI
                 2.Juego terminado: SI
                 Número de intentos: 5
                 Número acertado: NO
                 3.Juego terminado: NO
                Número de intentos: 2
                Número acertado: NO */
        {

            do {
                var n_aleatorio = parseInt(Math.random() * 100 + 1);
                var salir = false;
                var encontrado = false;
                var intentos = 0;
                for (let i = 1; i <= 5 && !encontrado && !salir; i++) {
                    let n_usuario = prompt("Intenta adivinar el numero: ");

                    while (isNaN(parseInt(n_usuario)) && n_usuario != null && parseInt(n_usuario) > 100 && parseInt(n_usuario) < 1) {
                        n_usuario = parseInt(prompt(`Error,Tiene que ser un numero valido (1-100)`));
                    }
                    if (n_aleatorio == n_usuario) {
                        encontrado = true;

                    } else if (n_usuario == null) {
                        salir = true;
                    } else if (parseInt(n_usuario) < n_aleatorio) {
                        alert("Tu numero es Menor");

                    } else if (parseInt(n_usuario) > n_aleatorio) {
                        alert("Tu numero es Mayor");
                    }
                    intentos = i;
                }
                if (encontrado) {
                    var opcion = confirm("Has acertado,Desea Continuar Jugando?");
                    if (opcion == false) {
                        document.write("<h1>Juego Finalizado</h1>");
                        document.write(`<h2>Numero de intentos: ${intentos}</h2>`);
                        document.write(`<h2>Número acertado: SI</h2>`);
                        salir = true;
                    }
                } else if (salir) {
                    document.write("<h1>Juego Finalizado</h1>");
                } else {
                    var opcion = confirm("Numero no adivinado,Desea Continuar Jugando?");
                    if (opcion == false) {
                        document.write("<h1>Juego Finalizado</h1>");
                        document.write(`<h2>Numero de intentos: ${intentos}</h2>`);
                        document.write(`<h2>Número acertado: No</h2>`);
                        salir = true;
                    }
                }
            } while (!salir);

        }
        break;
    case "2":
        /*2.Crea una  aplicación  web  que  pida  al  usuario  un  número  entero  positivo  y dibuje triángulos
        con tantos asteriscos como haya indicado el usuario con el número introducido. Un ejemplo de ejecución sería el siguiente: */
        {
            n = parseInt(prompt("Introduce un numero para el triángulo (entero positivo): "));
            while (isNaN(n) && n < 0) {
                n = parseInt(prompt(`Error,Tiene que ser un numero positivo)`));
            }
            document.write(`<h2>Triangulo 1 </h2> <br> `);
            for (let i = 0; i < n; i++) {
                for (let j = 0; j <= i; j++) {
                    document.write("* ");
                }
                document.write("<br>");
            }
            document.write(`<h2>Triangulo 2 </h2> <br> `);
            for (i = n; i > 0; i--) {
                for (j = 0; j < i; j++) {
                    document.write("* ");
                }
                document.write("<br>");
            }

            document.write(`<h2>Triangulo 3 </h2> <br> `);
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= n - i; j++) {
                    document.write("&nbsp;");
                }
                for (let k = 1; k <= i; k++) {
                    document.write("* ");
                }
                document.write("<br>");
            }


            document.write(`<h2>Triangulo 4 </h2> <br> `);


            for (i = n; i > 0; i--) {
                for (let j = 1; j <= n - i; j++) {
                    document.write("&nbsp;");
                }
                for (j = 0; j < i; j++) {
                    document.write("* ");
                }
                document.write("<br>");
            }
        }
        break;
    case "3":
        /*3.Crea una página web que pida al usuario números hasta que el usuario pulse el botón
         cancelar. Se debe comprobar si lo que inserta el usuario es un número o no. Al
         finalizar se debe mostrarla suma de todos los números introducidos y  en  el  caso
         de  que  se  hayan  insertado caracteres  no  numéricos,  mostrar también todos los
         caracteres que se han introducido. */
        {
            let n;
            let sumaN = 0;
            let listaCaracteres = "";
            do {
                n = prompt("introduce un numero: ");

                if (isNaN(parseInt(n))) {
                    if (n != null) {
                        listaCaracteres += n + ",";
                    }
                } else {
                    sumaN += parseInt(n);
                }
            } while (n != null);
            alert(`Caracteres introducidos a mayores: ${listaCaracteres}  \n 
suma de los numeros introducidos: ${sumaN}`);
        }
        break;
    case "4":
        /*4.Crea una página que muestre los primeros 10000 símbolos de la tabla Unicode.
        Se mostrará en una tabla en la que en cada fila se indica el número de código,
        seguido del carácter de ese código. En cada fila se mostrarán 10 símbolos. */
        {
            document.write("<table>");
            let nSimbolo = 1;
            for (let i = 0; i < 100000 / 10; i++) {
                document.write("<tr>");
                for (let j = 1; j <= 10; j++, nSimbolo++) {
                    document.write(`<th> ${nSimbolo} </th>`);
                    document.write(`<td> &#${nSimbolo}; </td>`);
                }
                document.write("</tr>");
            }
            document.write("</table>");
        }
        break;
    case "5":
        /*5.Crea una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 píxeles. Su posición en la
         pantalla será también aleatoria. Ejemplo de resultado: */
        {

            for (let i = 1; i <= 2000; i++) {
                var red = parseInt(Math.random() * 256);
                var green = parseInt(Math.random() * 256);
                var blue = parseInt(Math.random() * 256);
                var ancho = parseInt(Math.random() * 1920);
                var alto = parseInt(Math.random() * 1080);
                document.write(`<div class='cuadrado' style="background-color: rgb(${red},${green},${blue}); top:${alto}px;left:${ancho}px"></div>`);

            }
        }
        break;
}