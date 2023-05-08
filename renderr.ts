import { Movies } from "./moviess.js";
import { Movie } from "./moviee.js"

const head = () => `
<html>
  
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movie List</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .movie {
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
      float: left;
      justify-content: flex-start;
    }
    .movie img {
      margin-right: 10px;
      width: 220px;
      height: 330px;
    }
    .movie .data{
      max-width: 220px;
    }
    .movie .name {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .movie .title {
      font-size: 14px;
      color: #888;
    }
  </style>
</head>`;

const renderMovies = (movies: Array<Movies>) => {
  let html = "";
  for (const movie of movies) {
    const newString = movie.title.replace(/:/g, "");
    html += `
    
    <div class="movie">
      <img src="${movie.posterPath}" />
      <div class="data">
      <a href="./movie/${newString}.html">
        <div class="name">${movie.title}</div>
      </a>
        <div class="title">${movie.release_date}</div>
      </div>
    </div>`;
  }
  return html;
}

export const render = (movies: Array<Movies>) => {
  return `
<html>
  ${head()}
  <body>
    ${renderMovies(movies)}
  </body>
</html>`;
};


export const movieRender = (movie: Movie) => {
  return `
  <html>
  <body>
  <div>
  <img src="${movie.posterPath}"/>
  </div>
  </body>
  </html>
  `
}