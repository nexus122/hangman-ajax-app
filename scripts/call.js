// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json

let url = './data/films.json'

async function randomPhrase(){
    let resp = await fetch(url);
    resp = await resp.json();
    
    let index = Math.floor(Math.random() * resp.length);
    
    return resp[index].title;

}