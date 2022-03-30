let DOM = {
    secret: document.querySelector('#puzzle'),
    letters_tried: document.querySelector('#letters-tried'),
    guesses: document.querySelector('#guesses'),
    attempts: document.querySelector('#guesses span'),
    btn_reset: document.querySelector('#reset'),
    body: document.querySelector('body'),
    img: document.querySelector('#lose'),
    content: document.querySelector('#content'),
    tryLetterFormat(param){
        let result = ``;
        param.forEach(element=>{
            if(estado.film.includes(element)){
                result+= `<span class="correct">${element}</span>`
            }else{
                result+= `<span class="incorrect">${element}</span>`
            }
        })
    
        return result
    },
    // Funcion para convertir el titulo en asteriscos
    generateWord(pelicula) {

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
    
    },
    addLetters(letra){        
        if (!estado.letterArr.includes(letra)) {            
            estado.letterArr.push(letra);
            this.letters_tried.innerHTML = this.tryLetterFormat(estado.letterArr);
        }else{
            let position = estado.letterArr.indexOf(letra)
            let element = this.letters_tried.querySelectorAll('span')[position];
            element.classList.add('repetida');
            setTimeout(function(){
                element.classList.remove('repetida');
            }, 1000);
        }
    },
    changeSecret(letra){
        estado.film.split('').forEach(async (element, index) => {
            if (letra == element) {
                document.querySelectorAll('span')[index].innerHTML = element;

                if (estado.win()) {
                    estado.gameStatus = 1;
                    this.winOrLose()
                }

            }
        });
    },
    async winOrLose(){
        // Seguimos jugando
        if(estado.gameStatus == 0){
            return;
        }

        // Ganamos
        if(estado.gameStatus == 1){
            DOM.guesses.innerHTML = `👍 Has ganado`;
            let img = await getPoster(estado.film);
            DOM.body.style.backgroundImage = `url(${img})`;
            DOM.body.style.backgroundSize = 'cover'
            new Audio('./sounds/win.wav').play();
        }

        // Perdemos
        if(estado.gameStatus == 2){
            DOM.guesses.innerHTML = `👎 Has perdido`;
            DOM.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/2e/0f/02/2e0f025c0351df89df6746c7fc739480.jpg)';
            DOM.body.style.backgroundSize = 'container'
            new Audio('./sounds/lost.wav').play();
        }
    }
}