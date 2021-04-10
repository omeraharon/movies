
import { Component, SyntheticEvent } from "react";
import { FormControl } from 'react-bootstrap';
import PopularModel from "../../../../../Models/PopularModel";
import global from "../../../../../Services/Globals";
import axios from "axios";
import "./Search.css";
import { NavLink } from "react-router-dom";

interface SearchState {
    movies: PopularModel[];
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            movies: []
        };
    }

    private searchMovie = async (event: SyntheticEvent) => {
        try {
            const { value } = (event.target as HTMLFormElement);
            if (!value) return this.setState({ movies: [] });

            const { data } = await axios.get<PopularModel>
                (`${global.searchUrl}?api_key=${global.apiKey}&query=${value}`);
            if (data.results === []) return;

            this.setState({ movies: data.results });
        }
        catch (err) {
            console.log(err)
        }
    }

    public render(): JSX.Element {
        return (
            <div className="Search">
                <input onChange={this.searchMovie} type="text" placeholder="Search Movies,TV-Shows and more..." className="search-input" />
                {this.state.movies === [] ? <></> : 
                <div className="search-block">
                    {this.state.movies.map(movie => {
                        if(movie.poster_path === null) return;
                        return (
                            <NavLink className="search-link" to={"/popular/details/" + movie.id}>
                                <img src={global.imagesUrl + movie.poster_path} alt="poster" width="50" height="50" />
                                {movie.original_title}
                            </NavLink>);
                    })}
                </div>}
            </div>
        );
    }

}

export default Search;
