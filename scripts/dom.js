let DOM = {
    secret: document.querySelector('#puzzle'),
    letters_tried: document.querySelector('#letters-tried'),
    guesses: document.querySelector('#guesses'),
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
    }
}