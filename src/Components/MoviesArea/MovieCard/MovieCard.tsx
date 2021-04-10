import { Component } from "react";
import { NavLink } from "react-router-dom";
import PopularModel from "../../../Models/PopularModel";
import global from "../../../Services/Globals";
import "./MovieCard.css";

interface MovieCardProps {
	movie: PopularModel;
}

class MovieCard extends Component<MovieCardProps> {
    public render(): JSX.Element {
        if(!this.props.movie) return <></>
        const {id, poster_path } = this.props.movie;
        if(!id || !poster_path) return <></>
        return (
            <div className="MovieCard">
                <div>
                    <NavLink to={"/popular/details/" + this.props.movie.id}>
                        <img src={global.imagesUrl + this.props.movie.poster_path} alt="poster" />
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default MovieCard;
