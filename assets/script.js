/*TALLER*/ 
/*----------------------------------------------------------------------------------------------------*/
//1.Contador de Números Pares e Impares: Diseña un programa que solicite al usuario un
//número y luego muestre la cantidad de números pares e impares dentro del rango desde 1
//hasta ese número.
function ParesImpares() {
  alert("A continuación se visualizara la cantidad de numeros pares e impares del numero que digites")
  let numero =   Number(prompt("Digite un número:"))

    let par = 0
    let impar = 0

    for (let i = 1; i <= numero; i++) {
      if (i % 2 == 0) {
        par++
      } else {
        impar++
      }
    }
    console.log("NÚMERO INGRESADO: "+numero)
    console.log("Cantidad de números pares: "+par)
    console.log("Cantidad de números impares: "+impar)
  }
/*--------------------------------------------------------------------------------------------------------*/
//2.Calculadora de Factorial: Crea un programa que calcule el factorial de un número ingresado
//por el usuario utilizando un ciclo.

function CalFactorial(){
  alert("A continuación se visualizara el calculo factorial del numero que digites (se multiplicara desde el 1 hasta el numero digitado)")
  let numeroF = Number(prompt("Digite un número:"))
  let fact = 1

  for (let i = 1; i <= numeroF; i++) {
      fact *= i
    }
    console.log("El Factorial de "+numeroF+" es: "+fact)
  }
/*--------------------------------------------------------------------------------------------------------*/
//3.Validación de Contraseña: Escribe un programa que pida al usuario que ingrese una
//contraseña. Si la contraseña es "secreto123", muestra un mensaje de acceso concedido; de
//lo contrario, muestra un mensaje de acceso denegado
function Contraseña(){
  alert("A continuación validaremos el acceso a tu cuenta, si es correcta la contraseña Ingresaras, de la contrario NO")
  let contraseña = prompt("Digite la contraseña: ")
  if (contraseña == "secreto123"){
    alert("¡Acceso Conceido!")
  }else{
    alert ("¡ Acceso Denegado ¡")
  }

}
/*-------------------------------------------------------------------------------------------------------*/
//4.Generador de Tablas de Multiplicar: Desarrolla un programa que solicite al usuario un
//número y luego muestre la tabla de multiplicar correspondiente a ese número.

function TablaMultiplicar(numero) {
  alert("A continuación visualizaras la tabla de multiplicacion de el numero digitado")
  for (var i = 1; i <= 10; i++) {
    console.log('La tabla de multiplicar ingresada es ' + numero + ' x ' + i + ' = ' + (numero * i));
  }
}
/*--------------------------------------------------------------------------------------------------------*/
//5.Adivinar el Número: Crea un juego en el que el programa genere un número aleatorio entre
//1 y 100, y el usuario debe adivinarlo. El programa debe dar pistas como "demasiado alto" o"demasiado bajo".

function numeroAleatorio(){
  alert("A continuación debes tratar de adivinar un número aleatorio del 1 al 100.")
  let numAleatorio = Math.floor (Math.random()*100)
  let rep = true
  while(rep){
  let numeroUsua = Number(prompt("Digite un número del 1 al 100: "))
  if(numeroUsua == numAleatorio){
    alert("¡SUPER! Adivinaste el número"+numAleatorio)
    rep=false
  }else if(numeroUsua > numAleatorio){
    alert("Mas abajo!")
  }else{
    alert("Más arriba!")
  }
}


}

/*-------------------------------------------------------------------------------------------------------*/
//6.Suma de Números Primos: Diseña un programa que calcule la suma de los primeros N
//números primos, donde N es ingresado por el usuario.


function numerosPrimos() {
  alert("A continuación visualizaras la suma de los numeros primos, desde el 1 hasta el numero que usted desee.")
  let Numero = Number(prompt("Digite un número"))
  let sumar = 0;

  function Primo(numPrimo) {
      for(let i = 2; i < numPrimo; i+=numPrimo)
          if(numPrimo % i === 0) return false;
      return numPrimo > 1;
  }

  for(let i = 2; i <= Numero; i++) {
      if(Primo(i)) {
          sumar += i;
      }
  }
  console.log(sumar)
}




/*--------------------------------------------------------------------------------------------------------*/
//7.Secuencia de Fibonacci: Crea un programa que genere la secuencia de Fibonacci hasta un
//término dado por el usuario.
function fibonacci(termino) {
  alert("A continuacion visualizara la secuencia de fibonacci.")
  let secuencia = [];
  if (termino === 0) {
    return secuencia;
  } else if (termino === 1) {
    secuencia.push(0);
    return secuencia;
  } else if (termino === 2) {
    secuencia.push(0, 1);
    return secuencia;
  } else {
    secuencia.push(0, 1);

    for (let i = 2; i < termino; i++) {
      secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }

    return secuencia;
    
    
  }
  
}


//--------------------------------------------------------------------------------------------------------//
//8.Convertidor de Temperatura: Escribe un programa que convierta temperaturas entre
//grados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión (de Celsius a Fahrenheit o de Fahrenheit a Celsius).

function Temperatura(){
  alert("A continuacion visualizara la conversion de temperatura en grados celsius a Fahrenheit o viceversa.")
let repe = true
  
while(repe){

    let opc = Number(prompt("Elija la conversión que desea hacer:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius \n3. Salir"));
 switch(opc){
    case 1:{
   
    let celsius = Number(prompt("Digite la temperatura en grados Celsius:"));
      console.log( celsius + ' grados Celsius son equivalentes a ' + ((celsius * 9/5) + 32)+ ' grados Fahrenheit.');}
    break
    case 2:{
    
    let fahrenheit = Number(prompt("Digite la temperatura en grados Fahrenheit:"));
      console.log(fahrenheit + ' grados Fahrenheit son equivalentes a ' + ((fahrenheit - 32) * 5/9) + ' grados Celsius.');
  } break
    case 3:
    repe = false
    break
    default:
        console.log("¡ERROR! Digite una opcion valida ")
  }
}
}
//--------------------------------------------------------------------------------------------------------//
//9.Calculadora de Potencia: Desarrolla un programa que calcule el resultado de elevar un
//número a una potencia dada por el usuario.
function Potencia(){
  alert("A continucacion visualizara la potencia del numero ingresado")
  let numPotencia= Number(prompt("Digite el numero de la base: "))
  let potenciaUsuario = Number(prompt("Digite el numero el numero del exponente: "))
  let result = numPotencia ** potenciaUsuario
  console.log("El resultado es: "+result)
}

//--------------------------------------------------------------------------------------------------------//
//10.Juego de Piedra, Papel o Tijeras: Crea un juego en el que el usuario juegue contra la
//computadora eligiendo entre piedra, papel o tijeras, y el programa determine al ganador según las reglas del juego.


function PiedraPapelTijeras(eleccionUsuario) {
  
  let elecciones = ["piedra", "papel", "tijeras"];
  let eleccionComputadora = Math.floor(Math.random() * 3);

  let resultados = ["¡Es un empate!", "¡Ganaste!", "¡La computadora ganó!"];
  let resultado = resultados[determinarGanador(eleccionUsuario, elecciones[eleccionComputadora])];

  alert("Elegiste: " + eleccionUsuario + "\nLa computadora eligió: " + elecciones[eleccionComputadora] + "\n" + resultado);
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
  if (eleccionUsuario === eleccionComputadora) {
    return 0;
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
  ) {
    return 1; 
  } else {
    return 2;
  }
}



function Salir(){
  rep = false
  return rep
}

/*--------------------------------------------------------------------------------------------------------------------------------*/
let rep = true
let Uno = 0
let Dos = 0
let Tres = 0
let Cuatro = 0
let Cinco = 0
let Seis = 0
let Siete = 0
let Ocho = 0
let Nueve = 0
let Diez = 0
/*--------------------------------------------------------------------------------------------------------------------------------*/

while(rep){
   
    let opc = Number(prompt("\n ¡APRENDE Y DIVIERTETE !\n************************************************\n ELIGA UNA DE LAS SIGUIENTES OPCIONES: \n************************************************ \n1. Contador de numeros pares e impares. \n 2. Calculadora Factorial \n 3. Validar contraseña\n 4. Tablas de multiplicar\n 5. Adivina el número.\n 6. Suma de numeros primos.\n 7. Secuencia de Fibonacci.\n 8. Convertidor de temperatura.\n 9. Calculadora de potencia\n 10. Juego de piedra, papel o tijeras\n************************************************\n 11. Salir \n************************************************"))
    switch(opc){
        case 1:
          let opcion = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcion == 1){
          ParesImpares()
        }else{
          alert("Regresando al Menú")  
        }
        Uno++
        break
        case 2:
          let opcionUno = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionUno == 1){
            CalFactorial()
        }else{
          alert("Ha vuelto al menú")  
        }
        Dos++
        break
        case 3:
          let opcionDos = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionDos == 1){
            Contraseña()
        }else{
          alert("Regresando al Menú")  
        }
        Tres++
        break
        case 4:
          let opcionTres = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionTres == 1){
            let numero = Number(prompt("Digite un número"));
            TablaMultiplicar(numero);
        }else{
          alert("Regresando al Menú")  
        }
        Cuatro++

        break
        case 5:
          let opcionCuatro = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionCuatro == 1){
            numeroAleatorio()
        }else{
          alert("Regresando al Menú")  
        }
        Cinco++

        break
        case 6:
          let opcionCinco = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionCinco == 1){
            numerosPrimos()
        }else{
          alert("Regresando al Menú")  
        }
        Seis++

        break
        case 7:
          let opcionSeis = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionSeis == 1){
            let terminoUsuario = Number(prompt("Digite un número"))
            console.log(fibonacci(terminoUsuario));
        }else{
          alert("Regresando al Menú")  
        }
        Siete++

        break
        case 8:
          let opcionSiete = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionSiete == 1){
            Temperatura()
        }else{
          alert("Regresando al Menú")  
        }
        Ocho++

        break
        case 9:
          let opcionOcho = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionOcho == 1){
            Potencia()
        }else{
          alert("Regresando al Menú")  
        }
        Nueve++

        break
        case 10:
          let opcionNueve = Number(prompt("Ingrese el N°1 si desea continuar ó el N°2 para regresar al Menú."))
          if (opcionNueve == 1){
            alert("A continuacón visualizara y jugara Piedra, papel o tijeras, escriba tal cual alguna de las opciones como observa a continuación ")
            let eleccionUsuario = prompt("Elige piedra, papel o tijeras").toLowerCase();
            if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
              PiedraPapelTijeras(eleccionUsuario);
            } else {
              alert("Elige una opción válida. Por favor, digite: piedra, papel o tijeras.");
            }
        }else{
          alert("Regresando al Menú")  
        }
        Diez++

        break
        case 11:
        
        console.log("1.Contador de numeros pares e impares se ha ejecutado: "+Uno+" veces")
        console.log("2.Calculadora factorial se ha ejecutado: "+Dos+" veces")
        console.log("3.Validacion de contraseña se ha ejecutado: "+Tres+" veces")
        console.log("4.Generador de tablas de multiplicar se ha ejecutado: "+Cuatro+" veces")
        console.log("5.Adivina el numero se ha ejecutado: "+Cinco+" veces")
        console.log("6.Suma de numeros primos se ha ejecutado: "+Seis+" veces")
        console.log("7.Secuencia Fibonacci se ha ejecutado: "+Siete+" veces")
        console.log("8.Convertidor de temperatura se ha ejecutado: "+Ocho+" veces")
        console.log("9.Calculadora de potencia se ha ejecutado: "+Nueve+" veces")
        console.log("10.Juego de piedra, papel o tijeras se ha ejecutado: "+Diez+" veces")

        Salir()

        break
        default:
            console.log("!ERROR¡ Digite una opción valida")
    }
}

