import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/Api';
import defaultImage from 'img/defaultImage.png';
import { CastList, CastItem, Info } from 'components/Cast/Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const cast = await fetchMovieCast(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error)
            }
        };
        fetchCast();
    }, [movieId]);

return (
        <CastList>
            {cast.map(({id, profile_path, original_name, character}) => (
                <CastItem key={id}>
                    <img src={`${profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : defaultImage}`}
                        alt={original_name} />
               
                    <Info>
                        <h3>{original_name}</h3>
                        <p>{character}</p>
                    </Info>
                </CastItem>
            ))}
        </CastList>
    )
};
export default Cast;