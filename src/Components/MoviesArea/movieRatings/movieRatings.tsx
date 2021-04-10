import { Component, SyntheticEvent } from "react";
import "./movieRatings.css";

interface MovieRatingsState {
    like: boolean;
}

interface MovieRatingsProps {
    movieId: number;
}


class MovieRatings extends Component<MovieRatingsProps, MovieRatingsState> {

    public constructor(props: MovieRatingsProps) {
        super(props);
        this.state = {
            like: false
        };
    }

    private update = (event: SyntheticEvent, movieId: number) => {
        const {like} = this.state;
        const userSelection = (event.target as HTMLLIElement).id;
        this.setState({ like: userSelection === "unLike" ? true : false });
        const saveLike = { like, movieId };
        localStorage.setItem('like', JSON.stringify(saveLike));
    }

    public render(): JSX.Element {
        const { movieId } = this.props;
        const likeCheck = localStorage.getItem('like');
        if(!this.state.like) {
            return (
                <div className="movieRatings">
                    <button id="unLike" onClick={(event) => this.update(event, movieId)}>
                        <i className="far fa-heart fa-lg" id="unLike" style={{ color: "rgb(107, 8, 8)" }}></i>
                    </button>
                </div>
            );
        }
        else { 
            return (
                <div className="movieRatings">
                    <button id="like" onClick={(event) => this.update(event, movieId)}>
                        <i className="fas fa-heart fa-lg" id="like" style={{ color: "red" }}></i>
                    </button>
                </div>
            );
        }
    }
}
export default MovieRatings;
