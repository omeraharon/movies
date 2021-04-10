import "./Stars.css";
import React, { BaseSyntheticEvent } from 'react';
import Rating from '@material-ui/lab/Rating';

interface movieProps {
    movieId: number;
}

function saveChange(event: BaseSyntheticEvent, movieId: number ) {
    const rating = JSON.parse(localStorage.getItem('movieRatings') || null) || {};
    const value = event.target.value;
    const save = {
        value,
        movieId
    }
    rating[movieId] = save;
    localStorage.setItem('movieRatings', JSON.stringify(rating) || null);
}

function getMovieRating( movieId: number ) {
    const rating = JSON.parse(localStorage.getItem('movieRatings') || null);
    if(!rating) return 0.5;
    return rating[movieId] ? parseInt(rating[movieId].value) : 1;
}

function Stars(props: movieProps): JSX.Element {
    const [value, setValue] = React.useState(2);
    const {movieId} = props;
    const movieRating = getMovieRating(movieId)
    return (
        <div className="Stars">
            <span>Rating:</span>
			<Rating 
                name="hover-feedback"
                value={movieRating}
                precision={1}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    saveChange(event, movieId);
                }}
            />
        </div>
    );
}

export default Stars;
