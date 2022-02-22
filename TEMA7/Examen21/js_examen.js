// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load",comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 
	
}

