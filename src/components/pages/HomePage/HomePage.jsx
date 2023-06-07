import React from 'react';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'api/Api';
import FilmList from 'components/FilmList/FilmList';
import { HomeTitle } from 'components/pages/HomePage/HomePage.styled';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies('').then(setMovies);
    }, []);

    return (
        <>
            <HomeTitle>Trending today</HomeTitle>
            <FilmList movies={movies} />
        </>
    )
}
export default HomePage;