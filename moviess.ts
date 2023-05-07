export class Movies{
    constructor(
        public original_title: string,
        public poster_path: string | null,
        public release_date: string,
        public id: number,
        public title: string,

    ) {}

    get posterPath(){
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.poster_path}`
    }
}


export const loadMovies = async (n: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e88943f8132d0a9c9c6f1c2354462be2&language=en-US&page=${n}`);
    const { results } = (await response.json()) as { results: any[] };
    const movies: Array<Movies> = [];
    for (const { original_title, poster_path, release_date, id, title } of results) {
      movies.push(new Movies(original_title, poster_path, release_date, id, title));
    }
    return movies;
  };