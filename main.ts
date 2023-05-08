import { writeFile } from "fs/promises";
import { render, movieRender } from "./renderr.js"; //renderr
import { loadMovies } from "./moviess.js"; //moviess
import { loadMovie, loadGenres } from "./moviee.js" //moviee 

const movies = await loadMovies(6);
const html = render(movies);
await writeFile('movies.html', html);

for (const oneMovie of movies){
    const movie = await loadMovie(oneMovie.id);
    loadGenres(oneMovie.id);
    const html = movieRender(movie);

    const newString = oneMovie.title.replace(/:/g, ""); // Sustituir ":" por un espacio vacío para que no haya error al cargar la página

    await writeFile(`./movie/${newString}.html`, html);
}
