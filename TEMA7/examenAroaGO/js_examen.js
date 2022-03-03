// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);

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
	var objetoJson;
	activarPaleta();

	botonCrearLienzo.addEventListener("click", crearLienzo);
	botonBorrar.addEventListener("click", borrarLienzo);
	botonDescargar.addEventListener("click", conexionAjax);
	botonQueDibujo.addEventListener("click", dibujoAleatorio);

	function activarPaleta() {
		//quitar clase y poner el seleccionado
		for (let color of paleta.children) {
			color.addEventListener("click", (ev) => {
				for (let c of paleta.children) {
					c.classList.remove("seleccionado");
				}
				ev.target.classList.add("seleccionado");
			})
		}

	}

	function crearLienzo() {
		//Tamaño del tablero.
		const FILAS = tamLienzo.value;
		const COLUMNAS = tamLienzo.value;

		for (iFila = 0; iFila < FILAS; iFila++) {
			nuevafila = document.createElement("tr");
			nuevafila.classList.add("fila");
			for (iColumna = 0; iColumna < COLUMNAS; iColumna++) {
				nuevaColumna = document.createElement("td");
				nuevaColumna.classList.add("celda");
				nuevafila.appendChild(nuevaColumna);

			}
			zonaDibujo.appendChild(nuevafila);

		}
		zonaDibujo.classList.add("tablerodibujo");
		zonaDibujo.addEventListener("click",activarPincel);
		botonCrearLienzo.removeEventListener("click", crearLienzo);
	}

	function activarPincel() {
		if (!pincelActivo) {
			pincel.innerHTML="PINCEL ACTIVADO";
			for (const tr of zonaDibujo.children) {
				for (const td of tr.children) {
					td.addEventListener("mouseover", pintar);
				}
			}
			pincelActivo=true;
		} else {
			pincel.innerHTML="PINCEL DESACTIVADO"
			for (const iterator of zonaDibujo.children) {
				for (const td of iterator.children) {
					td.removeEventListener("mouseover", pintar);
				}
			}
			pincelActivo=false;
		}
	}
	function pintar(ev) {
		var color = ev.target.classList.item(1);
		ev.target.classList.remove(color);
		ev.target.classList.add(document.getElementsByClassName("seleccionado")[0].classList.item(0))
	}
	function borrarLienzo() {
		for (const iterator of zonaDibujo.children) {
			for (const td of iterator.children) {
				td.classList.remove(td.classList.item(1));
			}
		}
	}
	function conexionAjax() {
		var xhttp = new XMLHttpRequest();


		xhttp.onload = function () {
			if (this.readyState == 4 && this.status == 200) {
				var temas = xhttp.responseText;
				objetoJson = JSON.parse(temas)
				for (i = 0; i < objetoJson.TEMAS.length; i++) {
					tema = objetoJson.TEMAS[i][0];
					let nuevoTema = document.createElement("option");
					nuevoTema.innerHTML = tema;
					selector.appendChild(nuevoTema);
				}

			} else {
				mostrarTexto.innerHTML = "File not Found";
			}
		};
		xhttp.open("GET", "temasDibujo.json", true);
		xhttp.send();
		botonDescargar.removeEventListener("click", conexionAjax);
	}
	function dibujoAleatorio() {
		ValueSelection = selector.value;

		for (i = 0; i < objetoJson.TEMAS.length; i++) {
			if (ValueSelection == objetoJson.TEMAS[i][0]) {
				let aleatorio = parseInt(Math.random() * (objetoJson.TEMAS[i].length - 2) + 1);
				let nuevotema = objetoJson.TEMAS[i][aleatorio];
				dibAle.innerHTML = nuevotema;
			}

		}
	}

}

