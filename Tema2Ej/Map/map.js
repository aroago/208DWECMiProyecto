/*const map = new Map();
map.set('nombre', 'aroa')
map.set('apellido', 'granero')
map.set('edad', '20')
console.log(map);*/

/*const map = new Map([
    ['nombre', 'Aroa'],
    ['apellidos', 'Granero'],
    ['edad', '20'],
  ])
console.log(map.has("nombre"));
console.log(map.has("Aroa"));*/

/*const map = new Map([
    ['nombre', 'Aroa'],
    ['apellidos', 'Granero'],
    ['edad', '20'],
  ])
console.log(map.get("nombre"));
console.log(map.get("edad"));*/

/*const map = new Map([
    ['nombre', 'Aroa'],
    ['apellidos', 'Granero'],
    ['edad', '20'],
  ])
console.log(map.delete("nombre"));
console.log(map);*/

/*const map = new Map([
    ['nombre', 'Aroa'],
    ['apellidos', 'Granero'],
    ['edad', '20'],
  ])
  map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
  })*/
  
  const map = new Map([
    ['nombre', 'Aroa'],
    ['apellidos', 'Granero'],
    ['edad', '20'],
  ])
  console.log(`Size: ${map.size}`);
  
  for(let [clave,nombre] of mapa){
    console.log(nombre);
    console.log(`El valor ${clave} es ${nombre}`)
  }