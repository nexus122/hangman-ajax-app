let estado = {
    film: '', // String de la pelicula
    letterArr: [],
    tryCount: 5, // Numero Maximo de intentos
    gameStatus: 0, // Estado de la partida
    subtractAttempts(letra){
        console.log('entramos en restar letra: ', letra);

        // Si la letra no esta en el titulo de la pelicula o si ya teniamos contemplada la letra en el array restamos uno
        console.log(this.letterArr.includes(letra));
        if (!this.film.includes(letra)) {            
            this.tryCount--;
            DOM.attempts.innerHTML = this.tryCount;

            if (this.tryCount <= 0) {
                // Si el contador llega a 0 perdemos
                this.gameStatus = 2;
                DOM.winOrLose()
            }

        }
    },
    win() {
        // Inicializamos un contador a 0
        let flag = 0;

        // Comprobamos que entre los span no exista nignun asterisco, si lo hay sumamos uno a flag.
        DOM.secret.querySelectorAll('span').forEach(element => {
            if (element.innerHTML == '*') {
                flag++;
            }
        })

        // Si el contador esta a 0 significa que no quedan, ganas la partda
        if (flag == 0) {
            return true;
        } else { // Si el contador no esta a 0 seguimos jugando
            return false;
        }
    
    },
    async init() {
        // Mostrar el tryCount
        DOM.attempts.innerHTML = estado.tryCount;
        document.querySelector('body').style.backgroundImage = '';
        // Proceso cuando iniciamos la aplicación.
        let pelicula = await randomPhrase();    
        DOM.generateWord(pelicula);
    }
}