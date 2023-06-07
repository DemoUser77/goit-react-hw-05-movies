import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieId } from 'api/Api';
import { Loader } from 'components/Loader/Loader';
import defaultImg  from 'img/defaultImg.jpg';
import { MovieDetailsContainer,Button,FilmWrapper,ImgFilm, InformList, InformLink } from 'components/pages/MovieDetailsPage/MovieDetailsPage.styled';


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation();
    
    const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const movieById = await fetchMovieId(movieId);
                setMovie(movieById);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovieById();
    }, [movieId]);
    
    return (
            <MovieDetailsContainer>
                <Button to={backLink}>Go back</Button>

                <FilmWrapper>
                <ImgFilm src={`${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImg}`}
                        alt="movie poster"
                       
                    />
                
                <div>
                    <h1>{movie.original_title}</h1>
                    <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p>{movie.genres?.map(genre => (
                        <li key={genre.id}>{genre.name}</li>))}
                        </p>
                    </div>
                </FilmWrapper>
                <div>
                    <h3>Additional information</h3>
                    <InformList>
                        <li>
                            <InformLink to="cast" state={location.state}>Cast</InformLink>
                        </li>
                        <li>
                            <InformLink to="reviews" state={location.state}>Reviews</InformLink>
                        </li>
                    </InformList>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
            </MovieDetailsContainer>
       ) 
};

export default MovieDetailsPage;