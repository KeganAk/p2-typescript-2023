export class Movie{
    constructor(
        public adult: boolean,
        public genres: Array<object>,
        public homepage: string | null,
        public original_language: string,
        public original_title: string,
        public overview: string | null,
        public popularity: number,
        public poster_path: string | null,
        public production_companies: Array<object>,
        public release_date: string,
        public id: number,
        public revenue: number,
        public runtime: number | null,
        public status: string,
        public tagline: string | null,
        public title: string,
        public vote_average: number,
        public vote_count: number,

    ) {}

    get posterPath(){
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.poster_path}`
    }
}

export const loadMovies = async (n: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e88943f8132d0a9c9c6f1c2354462be2&language=en-US&page=${n}`);
    const { results } = (await response.json()) as { results: any[] };
    const movies: Array<Movie> = [];
    for (const { adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, id, revenue, runtime, status, tagline, title, vote_average, vote_count } of results) {
      movies.push(new Movie(adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, id, revenue, runtime, status, tagline, title, vote_average, vote_count));
    }
    return movies;
  };

  export const loadMovie = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e88943f8132d0a9c9c6f1c2354462be2&language=en-US`);
    const  results  = (await response.json()) as Movie[];
    const movie: Array<Movie> = [];
    for (const { adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, id, revenue, runtime, status, tagline, title, vote_average, vote_count } of results) {
      movie.push(new Movie(adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, id, revenue, runtime, status, tagline, title, vote_average, vote_count));
    }
    return movie;
  };