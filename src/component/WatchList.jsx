import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import { MovieCard } from './MovieCard';

export const WatchList = () => {
    const {watchlist} = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watchlist</h1>

                    <span className="count-pill">
                        {watchlist.length} {watchlist.length === 1 ? "Movie/TV": "Movies/TV"}
                    </span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map(multi => (
                            <MovieCard multi={multi} type="watchlist"/>
                        ))}
                    </div>
                ) : <h2 className="no-movies">No movies in your watchlist.</h2> }
            </div>
        </div>
    );
};
