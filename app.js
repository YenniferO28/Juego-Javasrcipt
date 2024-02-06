//alert('Hola mundo');
//alert mensaje a mostrar
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraveces = 'vez';
let maximosItenntos =4;
alert('Bienvenido al juego, recuerda que cuentas con ' + maximosItenntos + ' intentos');
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `)); //prompt pedi un numero
    console.log('numero ingresado:' + numeroUsuario)
    //variable al lado izquiero cuando se asigna un valor

    console.log('Rta comparacion: ' + numeroSecreto == numeroUsuario)
    if (numeroUsuario == numeroSecreto) {
        //acerto se cumplio la condicion

        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);

    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el numero secreto es menor');
        } else {
            alert('el numero secreto es mayor')
        }
        //no acerto, no se cumplio laa condicion
        // alert('Lo siento no has acertado el numero')
        console.log('Valor del número secreto:', numeroSecreto);

        intentos = intentos+1;
        palabraveces = 'veces';
        console.log('cantidad de intentos' + intentos);
        if(intentos>maximosItenntos){
            alert(`llegaste al numero maximo de ${maximosItenntos} intentos`);
            break;
        }

    }
}



/*Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
alert('¡Bienvenida y bievenido a nuestro sitio web!');

Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";

Crea una variable llamada edady asígnale el valor 25.
let edad = 25;

Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 25
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

lista 2:

Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
lista 3:

Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

lista 4:
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/



