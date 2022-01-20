/*3.Crea un script que pida la edad y el sexo de 10 personas y muestre por
      pantalla finalmente información de cada persona en un único mensaje.*/
/*
    var alumnos = new Array();
    for (let i = 0; i < 2; i++) {
        var nombre = prompt("Introduce un nombre de un alumno: ");
        alumnos.push(nombre);
        var sexo = prompt("Introduce sexo del alumno: ");
        alumnos.push(`${sexo} \n`);
    }
    alert(alumnos);
*/
/*4.Crea un script que lea números enteros hasta que el usuario introduzca
      un número 0. Finalmente debe mostrar el número máximo, el mínimo y la
      media de todos ellos. Debes de controlar que introduzca números y no
      cualquier otro carácter. */
     /*
{
    var numeros = new Array();
    var n = prompt("Introduce un numero: ");
    if(n!=0){
        numeros.push(n);
    }
    while (n != 0) {
        while (isNaN(n)) {
            n = parseInt(prompt("No ha introducido un numero."))
        }
        n = prompt("Introduce un numero: ");
        if(n!=0){
        numeros.push(n);
        }
    }
    alert(numeros);
    let max = numeros[0];
    let min = numeros[0];
    let contador = 1;
    let acumulador = 0;
    for (let x of numeros) {
        if (max < x) {
            max = x;
        } else {
            min = x;
        }
        contador++;
        acumulador += x;
    }
    document.write(`<P>La media es: ${contador / acumulador}`);
    document.write(`<P>El maximo es: ${max}`);
    document.write(`<P>El minimo es: ${min}`);
}
*/
/*6.Crea un script que calcule las calificaciones de un grupo de alumnos.
    El profesor tendrá que introducir el número de alumnos que va a gestionar el script.*/
    
    var nAlumnos=prompt("Cuantos alumnos van a ser: ");
        var alumnos=new Array();
    document.write("<table>");
    document.write("<tr>");
            document.write(`<td>Alumno</td>`);
            document.write(`<td>NºExpediente</td>`);
            document.write(`<td>NPractica</td>`);
            document.write(`<td>NTeoria</td>`);
            document.write(`<td>Actitud</td>`); 
            document.write(`<td>NFinal</td>`);   
    document.write("</tr>") 
        for(let i =0;i<nAlumnos;i++){
                let nombre= prompt(`Introduce Nombre del Alumno : `);
                let nExpe= prompt(`Introduce NºExpediente de ${nombre} : `);
                let notaP = prompt(`Introduce Practica de ${nombre} : `);
                let notaT = prompt(`Introduce Teoria de ${nombre} : `);
                let ActitudA = prompt(`Introduce Actitud de ${nombre} : `);
                let practica = notaP * 0.4;
                let teoria = notaT * 0.3;
                let Actitud = ActitudA * 0.1;

                let notaF= practica+teoria+Actitud;
                alumnos[i]=[nombre,nExpe,notaP,notaT,ActitudA,notaF];
            document.write("<tr>");
            document.write(`<td>${alumnos[i][0]} \n </td>`);
            document.write(`<td>${alumnos[i][1]} \n </td>`);
            document.write(`<td>${alumnos[i][2]} \n </td>`);
            document.write(`<td>${alumnos[i][3]} \n </td>`); 
            document.write(`<td>${alumnos[i][4]} \n </td>`);
            document.write(`<td>${alumnos[i][5]} \n </td>`);     
            document.write("</tr>")   

        }
       document.write("</table>");
      