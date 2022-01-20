
alert("1.Fondo aleatorio \n 2.Numero primo \n 3.Edad y sexo  \n 4.Max,min y media de numeros introducido \n 5.Validar la clave \n 6.Calcular Calificaciones \n 7.Multiplos de dos numeros \n 8.Suma de numeros Impares y pares entre 1 y 100 \n 9.Suma de numeros Impares y pares entre los elegidos porel usuario \n 10.Factoriales de un numero entre el 1 y el 100");

let key = prompt("Introduce un numero de Ejercicio: ");

switch (key) {
    case "1":
        //1.Crea una página web que muestre un color de fondo aleatorio cada vez que entremos en ella.

        var red = parseInt(Math.random() * 256);
        var green = parseInt(Math.random() * 256);
        var blue = parseInt(Math.random() * 256);
        document.write("<style>");
        document.write(`body{background-color: rgb(${red},${green},${blue});}`);
        document.write("</style>");

        break;
    case "2":
        /*2.Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido,
         es un número o no, y si es un número, decir si es par o no y  si es primo o no.*/
        {
            let tipo;
            let num = prompt("Introduce un numero: ");
            if (!isNaN(num)) {
                tipo = (num % 2 == 0) ? "Par" : "Impar";
                document.write(`<p> El numero Introducido es : ${tipo} <p>`);
            } else {
                document.write("<p>No es un Numero</p>");
            }

            let primo = true;
            for (var i = 2; i < num; i++) {
                if (num % i == 0) {
                    primo = false;
                    break;
                }
            };
            if (primo) {
                document.write("<p>Es un Numero Primo</p>");
            } else {
                document.write("<p>No es un Numero Primo</p>");
            }
        }
        break;

    case "3":
        /*3.Crea un script que pida la edad y el sexo de 10 personas y muestre por
        pantalla finalmente información de cada persona en un único mensaje.*/
        {
            var edad;
            var sexo;
            var lista = "";
            for (let i = 0; i < 10; i++) {
                edad = prompt("Introduce Edad de la persona: " + i);
                sexo = prompt("Introduce sexo: ");
                lista = lista + edad + " edad" + " ," + sexo + " sexo" + "\n";
            }
            alert(lista);
        }

        break;
    case "4":
        /*4.Crea un script que lea números enteros hasta que el usuario introduzca
        un número 0. Finalmente debe mostrar el número máximo, el mínimo y la
        media de todos ellos. Debes de controlar que introduzca números y no
        cualquier otro carácter. */

        {
            let num = prompt("Introduce un numero: ");

            let max = num;
            let min = num;
            let contador = 1;
            let acumulador = 0;

            while (num != 0) {
                if (max < num) {
                    max = num;
                } else {
                    min = num;
                }
                num = prompt("Introduce un numero: ");
                contador++;
                acumulador += num;
                while (isNaN(num)) {
                    numero = parseInt(prompt("No ha introducido un numero."))
                }

            }
            document.write(`<P>La media es: ${contador / acumulador}`);
            document.write(`<P>El maximo es: ${max}`);
            document.write(`<P>El minimo es: ${min}`);
        }
        break;
    case "5":

        /* 5.Crea un script que permita validar una clave introducida por el usuario y
        tenga 3 intentos para introducirla bien. Si no la introduce bien, le da error y
        se sale del programa. La clave debe ser un número de 6 dígitos*/
        {
            let intentos = 0;
            valida = false;

            for (let i = 1; i <= 3 && !valida; i++) {
                let contraseña = parseInt(prompt("Introduce Contraseña: "));
                if ((contraseña / 100000) < 1 || (contraseña / 100000) >= 10 || isNaN(contraseña)) {
                    alert("No se ha introducido 6 digitos");
                }
                if (contraseña == valida) {
                    valida = true;
                }
            }
        }
        break;
    case "6":
        /*6.Crea un script que calcule las calificaciones de un grupo de alumnos.
        El profesor tendrá que introducir el número de alumnos que va a gestionar el script.*/
        {

            let numAlumnos = prompt(`Introduce Numero de Alumnos: `);
            let lista = "";
            let listaClase = "";
            let acumuladorP = 0;
            let acumuladorT = 0;
            let acumuladorA = 0;

            for (let i = 1; i <= numAlumnos; i++) {
                let Alumno = prompt(`Introduce Nombre del Alumno : `);
                let notaP = prompt(`Introduce Practica de ${Alumno} : `);
                let notaT = prompt(`Introduce Teoria de ${Alumno} : `);
                let ActitudA = prompt(`Introduce Actitud de ${Alumno} : `);

                let practica = notaP * 0.4;
                let teoria = notaT * 0.3;
                let Actitud = ActitudA * 0.1;

                let nota = practica + teoria + Actitud;
                lista = `${lista} El ${Alumno} con nota Final: ${nota} \n`;
                acumuladorP += practica;
                acumuladorT += teoria;
                acumuladorA += Actitud;
                listaClase = ` Media teoria clase ${acumuladorp / numAlumnos} \n
           Media Practica clase ${acumuladorT / numAlumnos} \n
           Media Acitud clase ${acumuladorA / numAlumnos} `;

            }
            alert(lista);
        }
        break;
    case "7":
        /*7.Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números
        que pides al usuario. El segundo número tiene que ser mayor o igual que el primer número.*/
        {
            let num1 = parseInt(prompt(`Introduce un numero Uno: `));
            while (isNaN(num1)) {
                num1 = prompt(`Error,Tiene que ser un numero`);
            }

            let num2 = parseInt(prompt(`Introduce el numero dos: `));
            while (isNaN(num1) || num1 > num2) {
                num2 = parseInt("El numero 2 tiene que ser mayor");
            }

            var multiplos = "Multiplos de 2 entre " + num1 + " y " + num2 + ": " + "\n";

            for (let i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    multiplos += i + " ";
                }

            }
            alert(multiplos);
        }
        break;
    case "8":
        /*8.Escribe un script que calcule la suma de los números pares y los números impares de los números
comprendidos entre 1 y 100.El 1 y el 100 no se tienen en cuenta. */
        {
            let tipo;
            let contImpar = 0;
            let contPar = 0;

            for (let i = 2; i < 100; i++) {

                tipo = (i % 2 == 0) ? "Par" : "Impar";
                if (tipo == "Impar") {
                    contImpar++;
                } else {
                    contPar++;
                }

            }
            alert(`Impares: ${contImpar} \n Pares: ${contPar}`);
        }
        break;
    case "9":
        /*9.Escribe un script que calcule la suma de los números pares y la suma de los números impares comprendidos
        entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el 45 yel 89 y debes
        de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro lado la suma de los números
         impares.No contar extremos, es decir, el 45 y el 89 en este caso no se tienen en cuenta. */
        {

            let tipo;
            let contImpar = 0;
            let contPar = 0;

            let num1 = parseInt(prompt("Introduce un min: "));
            while (isNaN(num1)) {
                num1 = prompt(`Error,Tiene que ser un numero`);
            }

            let num2 = parseInt(prompt("Introduce un max: "));
            while (isNaN(num2)) {
                num2 = prompt(`Error,Tiene que ser un numero`);
            }
            for (let i = num1 + 1; i < num2; i++) {

                tipo = (i % 2 == 0) ? "Par" : "Impar";
                if (tipo == "Impar") {
                    contImpar++;
                } else {
                    contPar++;
                }

            }
            alert(`Impares: ${contImpar} \n Pares: ${contPar}`);

        }
        break;
    case "10":
        /*Escribe los factoriales de un numero entre el 1 y el 100*/
        {
            let num1 = parseInt(prompt("Introduce un numero para calcular su factorial 1-100: "));
            while (isNaN(num1) || num1 < 1 || num1 > 100) {
                num1 = prompt(`Error,Tiene que ser un numero mayor de 1 y menor de 100`);
            }
            let acumulador = 1;
            var factoriales = `Los factoriales del numero: ${num1} son: `;
            for (let i = num1; i >= 2; i--) {
                acumulador *= i;

            }
            alert(factoriales + acumulador);
            break;
        }
}













