import axios from "axios";
import { Component } from "react";
import PopularModel from "../../../Models/PopularModel";
import { moviesDownloadedAction } from "../../../Redux/AllMovies";
import store from "../../../Redux/Store";
import global from "../../../Services/Globals";
import MovieCard from "../../MoviesArea/MovieCard/MovieCard";
import "./Popular.css";

interface PopularState {
    popular: PopularModel[];
}
class Popular extends Component<{}, PopularState> {
    
    public constructor(props: {}) {
        super(props);
        this.state = {
			popular: store.getState().movies
        };
    }
    public async componentDidMount() {
        try {
            if(this.state.popular.length === 0) {
                const {data} = await axios.get<PopularModel>(`${global.popularUrl}?api_key=${global.apiKey}`);
                this.setState({popular: data.results})
                store.dispatch(moviesDownloadedAction(data.results));
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="Popular">
				<h3>Popular</h3>
                {this.state.popular.slice(0, 8)
                .map(obj => <MovieCard movie={obj} key={obj.id} />)}
            </div>
        );
    }
}

export default Popular;
