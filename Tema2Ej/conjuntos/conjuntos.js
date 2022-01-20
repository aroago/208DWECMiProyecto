// metodo size
/*const names = new Set(["Marta", "laura", "patrik", "Jon"]);
	console.log(`Size: ${names.size}`);*/

/*const names = new Set();

//añadir elementos al conjunto
names.add("Marta");
names.add("Laura");
names.add("Patrik");
names.add("Jon");

console.log(names);*/

/*const names = new Set(["Marta", "Laura", "patrik", "Jon"]);
//buscar un elemento dentro del conjunto
console.log(names.has("Laura"));
console.log(names.has("Ines"));*/

/*const names = new Set(["Marta", "Laura", "patrik", "Jon"]);
//eliminar un elemento del conjunto
names.delete("Jon");

console.log(names);*/

//recorrer el conjunto con forEach
const names = new Set(["Marta", "Laura", "patrik", "Jon"]);

names.forEach((element) => {
   console.log(element);
});

