import React from 'react';
import { MovieControls } from './MovieControls';

export const MovieCard = ({multi, type}) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            {multi.poster_path || multi.profile_path ? (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${multi.poster_path || multi.profile_path}`}
                    alt={`${multi.title} poster`}
                />
            ) : (
                <div className="filler-poster"></div>
            )}

            <MovieControls type={type} multi={multi} />
        </div>
    );
};
