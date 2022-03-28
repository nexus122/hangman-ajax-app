// Código principal de la aplicación

// Funcion para convertir el titulo en asteriscos
function generateWord(pelicula) {

    // Añadimos la pelicula al estado.
    estado.film = pelicula.toUpperCase();

    // Generamos los asteriscos.
    estado.film.split('').forEach(element => {
        if (element != ' ') {
            let span = DOM.secret.appendChild(document.createElement('span'));
            span.innerHTML = "*"
        } else {
            let span = DOM.secret.appendChild(document.createElement('span'));
            span.innerHTML = " "
        }
    });
}

/* EVENTOS */
// Evento para cuando se presiona una tecla.
document.addEventListener('keydown', function (e) {
    // Si no es una sola letra fuera
    let letra = e.key.toUpperCase();

    /* Controlador que nos echa si no es una letra o si se ha acabado el juego. */
    if (!/^[A-Z]$/i.test(letra) || estado.gameStatus != 0) {
        return;
    }

    /* Añadimos la letra al array de letras. */
    if (!estado.letterArr.includes(letra)) {
        estado.letterArr.push(letra);
        DOM.letters_tried.innerHTML = estado.letterArr
    }

    /* Bucle en el que cambiamos asteriscos por letras. */
    estado.film.split('').forEach((element, index) => {
        if (letra == element) {
            document.querySelectorAll('span')[index].innerHTML = element;
            if (win()) {
                estado.gameStatus = 1;
                DOM.guesses.innerHTML = 'You win!';
            }
        }
    });

    /* Reducimos el contador si no encontramos la letra en el titulo */
    if (!estado.film.includes(letra)) {
        estado.tryCount--;
        DOM.guesses.innerHTML = estado.tryCount;

        if (estado.tryCount <= 0) {
            estado.gameStatus = 2;
        }

    }

})

// Cuando hacemos click en reset reiniciamos el juego.
DOM.btn_reset.addEventListener('click', function () {

    // Limpieza del DOM.
    DOM.secret.innerHTML = '';
    DOM.letters_tried.innerHTML = '';

    // Reinicio de las variables.
    estado.gameStatus = 0;
    estado.tryCount = 5;
    estado.letterArr = [];

    init();

})

// Funcion para saber si ganas.
function win() {

    let flag = 0;

    DOM.secret.querySelectorAll('span').forEach(element => {
        if (element.innerHTML == '*') {
            flag++;
        }
    })

    if (flag == 0) {
        return true;
    } else {
        return false;
    }

}

// Funcion para iniciar la aplicación
async function init() {
    // Mostrar el tryCount
    DOM.guesses.innerHTML = estado.tryCount;
    // Proceso cuando iniciamos la aplicación.
    let pelicula = await randomPhrase();
    console.log(pelicula);
    generateWord(pelicula);
}

init();