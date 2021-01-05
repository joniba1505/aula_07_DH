var numerosPares = [];
for (var i=0; i<=100; i++) {
    if(i % 2 == 0) {
        numerosPares.push(i);
        }
}

let cont = 0;
for (var i=0; i<numerosPares.length; i++) {
    

    if (cont == 5) {
                    
        document.write("<br>");
                cont = 0;
    i = i - 1;
            }
else {
    let numero = numerosPares[i];
    document.write(numero + "," + " ");
cont++;
}   

}