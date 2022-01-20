
baraja = new Array();

for (let i = 0; i < 50; i++) {
    baraja.push(i);
}


document.write("<br>");
for (let i = 0; i < 21; i++) {
    document.write(`<h2>Apuesta ${i}: </h2> `);
    for (let i = 0; i < 100; i++) {
        var aleatorio1=parseInt(Math.random()*49) ;
        var aleatorio2=parseInt(Math.random()*49);
        [baraja[aleatorio1],baraja[aleatorio2]]=[baraja[aleatorio2],baraja[aleatorio1]];
    }
    document.write(baraja.slice(0, 6));
}

/*
aleatorio = new Array();
for (let i = 0; i < 10; i++) {
    aleatorio.push(Math.random() * 10);
}

aContador = new Array();
for (let i = 0; i < 10; i++) {
    for (let x of aleatorio) {
        for (let j = 0; i < 10; j++) {
            if (j == x) {
                aContador[j] = +1;
            }
        }
    }
}
document.write(aleatorio);
document.write(aContador);
*/