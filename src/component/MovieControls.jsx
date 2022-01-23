import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({multi, type}) => {
    const {
        removeMovieFromWatchlist, 
        addMovieToWatched, 
        moveToWatchlist, 
        removeFromWatched
    } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => addMovieToWatched(multi)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                    onClick={() => removeMovieFromWatchlist(multi.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn"
                    onClick={() => moveToWatchlist(multi)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="ctrl-btn"
                    onClick={() => removeFromWatched(multi.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};
