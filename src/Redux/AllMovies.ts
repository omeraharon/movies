import PopularModel from "../Models/PopularModel";

export class MoviesState {
    public movies: PopularModel[] = [];
}

export enum MoviesActionType {
    LoadMovies = "LoadMovies",
    MoviesDownloaded = "MoviesDownloaded"
}

export interface MoviesAction {
    type: MoviesActionType;
    payload?: any;
}

export function loadMoviesAction(movies: PopularModel[]): MoviesAction {
    return {type: MoviesActionType.LoadMovies, payload: movies}
}

export function moviesDownloadedAction(movies: PopularModel[]): MoviesAction {
    return {type: MoviesActionType.MoviesDownloaded, payload: movies}
}

export function moviesReducer(currentState: MoviesState = new MoviesState(), action: MoviesAction): MoviesState {
    const newState = {...currentState};

    switch(action.type) {
        case MoviesActionType.LoadMovies: 
            newState.movies.map(movie => movie);
            break;
        case MoviesActionType.MoviesDownloaded: 
            newState.movies = action.payload;
            break;    
    }

    return newState;
}