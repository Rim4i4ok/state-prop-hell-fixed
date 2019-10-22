import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name: 'Star Wars',
            price: '10$',
            id: 2213
        },
        {
            name: 'Man in Black',
            price: '15$',
            id: 4867
        },
        {
            name: 'Inception',
            price: '20$',
            id: 1134
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}