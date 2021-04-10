// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { moviesReducer } from "./AllMovies";

// const reducers = combineReducers({ moviesState: moviesReducer });
// const store = createStore(reducers, composeWithDevTools())

// export default store;

import { createStore } from 'redux';
import { moviesReducer } from "./AllMovies";

const store = createStore(moviesReducer);

export default store;