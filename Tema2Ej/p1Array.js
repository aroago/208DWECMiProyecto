/*1.Crea una aplicación que pida palabras al usuario hasta que pulse el botón cancelar.
 Después aparecerá un menú de opciones:*/
var palabras = new Array();
var salir = false;
do {
    var palabra = prompt("Introduce una palabra: ");
    palabras.push(palabra);
    var opcion = confirm("Quieres meter otra palabra?");
    if (opcion == false) {
        salir = true;
    }
} while (!salir);
do {
    var out = false;
    let key = prompt(" 1)Ver primera palabra insertada \n 2)Ver última palabra insertada \n 3)Ver todas las palabras \n 4)Ver la palabra más larga \n 5)Ver la palabra más corta \n 6)Número de palabras insertadas \n 7)Buscar una palabra \n 8)Borrar duplicados \n 9)Salir \n  Introduce un numero: ");

    switch (key) {
        case "1":
            /*1)Ver primera palabra insertada*/
            var primera = palabras[0];
            document.write(`la primera palabra insertada es: "${primera}"`);
            break;
        case "2":
            /*2)Ver última palabra insertada*/
            var ultima = palabras[palabras.length];
            document.write(`<p>La Ultima palabra insertada es: "${ultima}"</p>`)
            break;
        case "3":
            /*3)Ver todas las palabras*/
            document.write(`<p>Palabras Introducidas: "${palabras}"</p>`)
            break;
        case "4":
            /*4)Ver la palabra más larga*/
            let largo = palabras[0];
            for (let i = 0; i < palabras.length; i++) {
                if (palabras[i].length > largo.length) {
                    largo = palabras[i];
                }
            }
            document.write(`<p>La palabra más larga: "${largo}"</p>`)
            break;
        case "5":
            /*5)Ver la palabra más corta*/
            let corta = palabras[0];
            for (let i = 0; i < palabras.length; i++) {
                if (palabras[i].length < corta.length) {
                    corta = palabras[i];
                }
            }
            document.write(`<p>La palabra más larga: "${corta}"</p>`)
            break;
        case "6":
            /*6)Número de palabras insertadas*/
            document.write(`<p>Palabras Introducidas: "${palabras.length}"</p>`)
            break;
        case "7":
            /*7)Buscar una palabra*/
            var buscar=prompt("Palabra a buscar: ");
            
            if(palabras.indexOf(buscar)!=-1){
                document.write(`<p>la palabra ${buscar} SI esta en el Array</p>`)
            }else{
                document.write(`<p>la palabra ${buscar} NO esta en el Array</p>`)
            }
            break;
        case "8":
            /*8)Borrar duplicados*/
            let result = palabras.filter((item,index)=>{
                return palabras.indexOf(item) === index;
              })
            document.write(`<p>Sin duplicados ${result} </p>`);
            
            break;
        case "9":
            /*9) Salir*/
            out = true;
            break;

    }

} while (!out);

document.write("<h1>Fin APP</h1>");




