// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json

async function randomPhrase(){
    
    let resp = await fetch('./data/films.json');
    resp = await resp.json();
    
    let index = Math.floor(Math.random() * resp.length);

    console.log(resp[index].title);

    return resp[index].title;

}

// Cuando ganamos buscamos el poster de la peli
async function getPoster(title){            

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f67a8ad780c75b59b2e185315b4e7818&language=en-US&page=1&include_adult=false&query=${title}`;
    const path_to_images = 'https://image.tmdb.org/t/p/original'

    let resp = await fetch(url);
    resp = await resp.json();    

    let imageUrl = path_to_images+'/'+resp.results[0].poster_path;

    return imageUrl;

}