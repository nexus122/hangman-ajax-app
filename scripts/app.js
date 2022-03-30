// Código principal de la aplicación

/* EVENTOS */
// Evento para cuando se presiona una tecla.
document.addEventListener('keydown', function (e) {
    // Si no es una sola letra fuera
    let letra = e.key.toUpperCase();

    /* Controlador que nos echa si no es una letra o si se ha acabado el juego. */
    if (!/^[A-Z:,.'\-0-9´ÁÉÍÓÚÀÈÌÒÙ]$/i.test(letra) || ESTADO.gameStatus != 0) {
        console.log("Letra Incorrecta: ", letra);
        return;
    }

    /* Añadimos la letra al array de letras. y alteramos la añadimos al ESTADO*/
    DOM.addLetters(letra);
    
    /* Bucle en el que cambiamos asteriscos por letras. */
    DOM.changeSecret(letra);

    /* Reducimos el contador si no encontramos la letra en el titulo */
    ESTADO.subtractAttempts(letra);

})

// Cuando hacemos click en reset reiniciamos el juego.
DOM.btn_reset.addEventListener('click', function () {

    // Reinicio de las variables.
    ESTADO.gameStatus = 0;
    ESTADO.tryCount = 5;
    ESTADO.letterArr = [];

    // Limpieza del DOM.
    DOM.secret.innerHTML = '';
    DOM.letters_tried.innerHTML = '';        
    DOM.guesses.innerHTML = `Te quedan <span>${ESTADO.tryCount}</span> intentos.`

    ESTADO.init();

})

// Funcion para iniciar la aplicación
ESTADO.init();