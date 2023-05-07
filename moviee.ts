export class Movie{
    constructor(
        public adult: boolean,
        public homepage: string | null,
        public original_language: string,
        public original_title: string,
        public overview: string | null,
        public popularity: number,
        public poster_path: string | null,
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

  export const loadMovie = async (id: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e88943f8132d0a9c9c6f1c2354462be2&language=en-US`);
    const result: any = await response.json();
    const movie = new Movie(
        result.adult,    
        result.homepage,
        result.original_language,
        result.original_title,
        result.overview,
        result.popularity,
        result.poster_path,
        result.release_date,
        result.id,
        result.revenue,
        result.runtime,
        result.status,
        result.tagline,
        result.title,
        result.vote_average,
        result.vote_count,
      );
    
      return movie;
  };