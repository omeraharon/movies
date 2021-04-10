class Globals {
    public apiKey = "f58ccab8a509ac38e2e1ddd3c8a8bb47";
    public popularUrl = `https://api.themoviedb.org/3/movie/popular/`;
    public imagesUrl = "https://image.tmdb.org/t/p/w500/";
    public movieIdUrl = "https://api.themoviedb.org/3/movie/";
    public genresUrl = "https://api.themoviedb.org/3/discover/movie/";
    public searchUrl = "https://api.themoviedb.org/3/search/movie";
    public addUserUrl = "http://localhost:3001/api/users";
}
const global = new Globals();

export default global;