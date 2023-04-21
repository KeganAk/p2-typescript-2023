import { writeFile } from "fs/promises";
import { render } from "./renderr.js"; //renderr
import { loadMovies } from "./moviess.js"; //moviess

const movies = await loadMovies(3);
const html = render(movies);
await writeFile('movies.html', html);

