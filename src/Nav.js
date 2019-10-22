import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav>
            <h3>Rim4i4ok</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
    );
}

export default Nav;