/* Peticiones a las apis. */

// Función para otener la pelicula.
async function randomMovie(cb){
    // Llamada a el archivo local donde tenemos las peliculas.
    let resp = await fetch('./data/films.json');
    resp = await resp.json();

    // Filtramos por las peliculas que no tengan numeros.    
    resp = resp.filter(movie => !/\d/.test(movie.title));
    
    // Obtenemos una pelicula al azar
    let index = Math.floor(Math.random() * resp.length);
    console.log(resp[index].title);

    // Enviamos un titulo a una función de callback.
    cb(resp[index].title)    

}

// Funcion para obtener el poster.
async function getPoster(title){

    // Rutas de donde sacamos los carteles
    const url = `https://api.themoviedb.org/3/search/movie?api_key=f67a8ad780c75b59b2e185315b4e7818&language=en-US&page=1&include_adult=false&query=${title}`;
    const path_to_images = 'https://image.tmdb.org/t/p/original'

    // Hacemos la petición a la url
    let resp = await fetch(url);
    resp = await resp.json();    

    // Cogemos la ruta de la pelicula y la devolvemos en un return.
    let imageUrl = path_to_images+'/'+resp.results[0].backdrop_path;

    return imageUrl;
}