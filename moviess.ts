export class Movie{
    constructor(
        public adult: boolean,
        public genres: [object],
        public homepage: string | null,
        public original_language: string,
        public original_title: string,
        public overview: string | null,
        public popularity: number,
        public poster_path: string | null,
        public production_companies: [object],
        public release_date: number,
        public revenue: number,
        public runtime: number | null,
        public status: string,
        public tagline: string | null,
        public title: string,
        public vote_average: number,
        public vote_count: number,

    ) {}
}

export const loadMovies = async (n: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=`process.env.api_key`&language=en-US&page=2${n}`);
    const { results } = (await response.json()) as { results: any[] };
    const users: Array<User> = [];
    for (const { adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, revenue, runtime, status, tagline, title, vote_average, vote_count } of results) {
      users.push(new User(adult, genres, homepage, original_language, original_title, overview, popularity, poster_path, production_companies, release_date, revenue, runtime, status, tagline, title, vote_average, vote_count));
    }
    return users;
  };