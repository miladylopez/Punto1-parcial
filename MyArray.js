/*Tienes un arreglo (llamado myArray) con 5 elementos (enteros en el rango de 1 a 100). 
Escribe un programa en Javascript o nodejs que imprima el número más alto del arreglo 
(Si se repite, solo imprimir una vez).nn */

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  let myArray = [];
  
  while (myArray.length < 5) {
    const numeroAleatorio = generarNumeroAleatorio();
    if (!myArray.includes(numeroAleatorio)) {
      myArray.push(numeroAleatorio);
    }
  }
  console.log(myArray)

  
  const numeroMasAlto = Math.max(...myArray);
  
  console.log(numeroMasAlto);
  