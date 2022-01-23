import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({multi}) => {
    const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === multi.id);
    let storedMovieWatched = watched.find (o => o.id === multi.id)

    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {multi.poster_path || multi.profile_path ? (
                    <img 
                        src={`https://image.tmdb.org/t/p/w200${multi.poster_path || multi.profile_path}`}
                        alt={`${multi.title} poster`}
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{multi.title || multi.name}</h3>
                    <h4 className="release-date">
                        {/* {multi.release_date || multi.first_air_date} */}

                        {multi.release_date ? multi.release_date.substring(0, 4) : ""}
                        {multi.first_air_date ? multi.first_air_date.substring(0, 4) : ""}

                    </h4>
                </div>

                <div className="controls">
                    <button 
                        className="btn"
                            disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(multi)}
                    >
                        Add to Watchlist
                    </button>

                    <button 
                        className="btn"
                            disabled={watchedDisabled}
                        onClick={() => addMovieToWatched(multi)}
                    >
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    )
}
