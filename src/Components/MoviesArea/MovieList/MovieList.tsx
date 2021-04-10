import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

interface MovieListProps {
	movieList: any;
}

class MovieList extends Component<MovieListProps> {
    public render(): JSX.Element {
        const {movieList} = this.props
        return (
            <div className="MovieList">
				{movieList.map( (movie:any) => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </div>
        );
    }
}

export default MovieList;
