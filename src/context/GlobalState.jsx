import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') 
        ? JSON.parse(localStorage.getItem('watchlist')) 
        : [],
    watched: localStorage.getItem('watched') 
        ? JSON.parse(localStorage.getItem('watched')) 
        : [],
};

//create context
export const GlobalContext = createContext(initialState);

// provider components
export const GloabalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    //actions
        //add to watchlist
    const addMovieToWatchlist = (multi) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: multi});
    };

        // remove from watchlist
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    };

        // move to watched
    const addMovieToWatched = (multi) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: multi});
    };

        // move back to watchlist
    const moveToWatchlist = (multi) => {
        dispatch({type: "MOVE_TO_WATCHLIST", payload: multi});
    };

        // remove from watched
    const removeFromWatched = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHED", payload: id});
    };

    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched, 
                addMovieToWatchlist,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatched,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}