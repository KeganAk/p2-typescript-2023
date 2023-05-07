import { writeFile } from "fs/promises";
import { render, movieRender } from "./renderr.js"; //renderr
import { loadMovies } from "./moviess.js"; //moviess
import { loadMovie } from "./moviee.js" //moviee 

const movies = await loadMovies(6);
const html = render(movies);
await writeFile('movies.html', html);

for (const oneMovie of movies){
    const movie = await loadMovie(oneMovie.id);
    const html = movieRender(movie);

    const newString = oneMovie.title.replace(/:/g, "");

    await writeFile(`./movie/${newString}.html`, html);
}
