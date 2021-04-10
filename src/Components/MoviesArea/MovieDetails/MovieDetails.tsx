
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import PopularModel from "../../../Models/PopularModel";
import global from "../../../Services/Globals";
import MovieRatings from "../movieRatings/movieRatings";
import Stars from "../movieRatings/Stars/Stars";
import "./MovieDetails.css";

interface RouteParams {
    id: string;
}

interface MovieDetailsProps extends RouteComponentProps<RouteParams> {
	
}

interface MovieDetailsState {
	movie: PopularModel;
}

class MovieDetails extends Component<MovieDetailsProps, MovieDetailsState> {

    public constructor(props: MovieDetailsProps) {
        super(props);
        this.state = {
			movie: null
        };
    }

    public async componentDidMount() {
        try {
            const {data} = await axios.get<PopularModel>(`${global.movieIdUrl}${this.props.match.params.id}?api_key=${global.apiKey}`);
            this.setState({movie: data});
        }
        catch(err) {
            alert(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="MovieDetails">
                {this.state.movie &&
                    <>
                        <h3>{this.state.movie.original_title}</h3>
                        <span>Overview: <br/>{this.state.movie.overview}</span><br/><br/>
                        <span>Release Date: {this.state.movie.release_date}</span><br/>
                        <span>Language: {this.state.movie.original_language}</span><br/><br/>
                        <MovieRatings movieId={this.state.movie.id}/><br/>
                        <Stars movieId={this.state.movie.id}/>
                        <img src={global.imagesUrl + this.state.movie.poster_path}/>
                        <br/>
                        <NavLink to="/home"><Button className="backButton" variant="dark">Back</Button></NavLink>
                    </>
                }
            </div>
        );
    }
}

export default MovieDetails;
