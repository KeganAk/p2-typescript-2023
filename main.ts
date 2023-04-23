import { writeFile } from "fs/promises";
import { render, movieRender } from "./renderr.js"; //renderr
import { loadMovies, loadMovie } from "./moviess.js"; //moviess

const movies = await loadMovies(3);
const html = render(movies);
await writeFile('movies.html', html);

for (const oneMovie of movies){
    const movie = await loadMovie(oneMovie.id);
    const html = movieRender(movie);
    await writeFile(`./movie/${oneMovie.title}.html`, html);
}