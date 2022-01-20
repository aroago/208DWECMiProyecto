function saludo(nombre) {
    console.log(`Hola, Buenos Dias ${nombre}`);
}

saludo("Aroa");

function f() {
    //const a=2;
    //let b=4;
    var c=0;
    console.log("hola soy la b funcion f");

}
f();

function suma(...params) {
    let resultado=0;
    for(const valores of params){
        resultado+= valores;
    }
    return resultado;
}
console.log("la Suma es "+suma(1,5,4,6,2));
//funcion recursiva
function factorial(n) {
    if(n<=1) return 1;
    else return n* factorial(n-1);
}
console.log(factorial(4));
//funcion callback
function escribe(dato,accion) {
   console.log(accion(dato));
}
//escribe("Hola mundo",console.log);

function doble(n) {
    return 2*n;
}

escribe(3,doble);

function onden(a,b){
    return a.length-b.length;
}
const palabras=["ñu","perro","gato","vaca","oso"];
palabras.sort((a,b)=>a.length-b.length);
console.log(palabras);

palabras.sort=((a,b)=>a.localCompare(b,"es"));
console.log(palabras);

const numeros=[1,4,5,2,7,8,6];
function mostrar(elemento,indice){
console.log(`El elemento ${indice} es: ${elemento}`);
}
//doblar los numeros del array
numeros.forEach((el,ind)=>{numeros[ind]=2*el});
console.log(numeros);

//recorrer conjuntos
let conj=new Set();
conj.add(1).add(3).add(4).add(6);
conj.forEach(element=>{console.log(element);})

//recorrer mapas
provincias=new Map();
provincias.set(1,"Zamora").set(2,"Leon").set(3,"Salamanca");
provincias.forEach((valor,key)=>{console.log(`La provincia ${key} es ${valor}`)})