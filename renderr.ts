import { Movie } from "./moviess.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .movie {
      font-family: sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .movie img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .movie .name {
      font-weight: bold;
    }
    .movie .genres {
      font-family: monospace;
    }
  </style>
</head>`;

const renderMovies = (movies: Array<Movie>) => {
  let html = "";
  for (const movie of movies) {
    html += `<div class="movie">
      <img src="${movie.posterPath}" />
      <div class="data">
        <div class="name">${movie.title}</div>
        <div class="title">${movie.release_date}</div>
      </div>
    </div>`;
  }
  return html;
}

export const render = (movies: Array<Movie>) => {
  return `
<html>
  ${head("Movie List")}
  <body>
    ${renderMovies(movies)}
  </body>
</html>`;
};
