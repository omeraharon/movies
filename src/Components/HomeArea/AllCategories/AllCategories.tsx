import { Component } from "react";
import "./AllCategories.css";
import genres from "../../../genres.json"
import axios from "axios";
import PopularModel from "../../../Models/PopularModel";
import global from "../../../Services/Globals";
import MovieList from "../../MoviesArea/MovieList/MovieList";
import { NavLink } from "react-router-dom";

interface AllCategoriesState {
    movies: any;
}

class AllCategories extends Component<{}, AllCategoriesState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            movies: []
        };
        this.getMovies(1);
    }

    public async getMovies(page: number) {
        Promise.all(
            genres.map( async genre => {
                    try {
                        const {name, id} = genre;
                        const {data} = await axios.get<PopularModel>
                        (`${global.genresUrl}?api_key=${global.apiKey}&with_genres=${id}&include_video=true&page=${page}`);
                        return { movies: data.results, name, id };
                    }
                    catch (err) {
                        alert(err);
                    }
                })
        ).then(movies => this.setState({movies}))
    }

    public render(): JSX.Element {
        let { movies } = this.state;
        if(movies === []) return <></>
        return (
            <div className="AllCategories" key={movies.id}>
                    { movies.map((genre:any) => {
                        let {name, movies, id} = genre;
                        movies = movies.length > 3 ? movies.slice(0,4) : movies
                        return  <div key={id}>
                                    <NavLink to={"/category/" + id + "/" + name}>
                                        <h3>{name}</h3>
                                    </NavLink>
                                    <MovieList movieList={movies} />
                                </div>
                    })}  
            </div>
        )
    }
}

export default AllCategories;
