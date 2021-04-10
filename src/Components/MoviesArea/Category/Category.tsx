import axios from "axios";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { NavLink } from "react-router-dom";
import PopularModel from "../../../Models/PopularModel";
import { moviesDownloadedAction } from "../../../Redux/AllMovies";
import store from "../../../Redux/Store";
import global from "../../../Services/Globals";
import MovieList from "../MovieList/MovieList";
import Font from 'react-font';
import "./Category.css";

interface RouteParams {
    id: string;
    name: string;
}

interface CategoryProps extends RouteComponentProps<RouteParams> {
}

interface CategoryState {
	movies: any
}

class Category extends Component<CategoryProps, CategoryState> {

    public constructor(props: CategoryProps) {
        super(props);
        this.state = {
			movies: []
        };
        this.getMoviesFromCategory(1);
    }

    public async getMoviesFromCategory(page: number) {
        try {
            const {data} = await axios.get<PopularModel>
            (`${global.genresUrl}?api_key=${global.apiKey}&with_genres=${this.props.match.params.id}&include_video=true&page=${page}`);
            this.setState({movies: data.results});
            store.dispatch(moviesDownloadedAction(data.results))
        }
        catch(err) {
            console.log(err);
        }

    }

    public getPages() {
        let arr = [];
        for(let i = 1; i <= 10; i++) {
            arr.push(<Button className="page-style" 
            onClick={() => this.getMoviesFromCategory(i)} variant="dark">{i}</Button>)
        }
        return arr;
    }

    public render(): JSX.Element {
        let { movies } = this.state;
        if(movies === []) return <></>
        return (
            <div className="Category">
                <h3>{this.props.match.params.name}</h3>
                <MovieList movieList={movies} />
                <NavLink to="/home"><Button className="backButton" variant="dark">Back</Button></NavLink>
                <br/>
                {this.getPages()}
                <br/><br/>
            </div>
        );
    }
}

export default Category;
