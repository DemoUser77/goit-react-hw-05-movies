import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'api/Api';

import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;

        const fetchQuery = async () => {
            try {
                const movieQuery = await fetchMovieQuery(currentQuery);
                setMovies(movieQuery);
            } catch (error) {
                console.log(error);
            }
        };
        fetchQuery();
    }, [searchParams]);


    return (
        <>
            <SearchForm setSearchParams={setSearchParams} />
            {movies.length > 0 && <FilmList movies={movies} />}
        </>
    )
};

export default MoviesPage;