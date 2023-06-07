import { useLocation, Link } from 'react-router-dom';
import { ListFilm,ItemFilm, } from './FilmList.styled';


const FilmList = ({ movies }) => {
    const location = useLocation();
    return (
        <ListFilm>
            {movies.map(({ id, original_title }) => (
                <ItemFilm key={id}>
                    <Link state={{ from: location }} to={`/movies/${id}`}>
                        {original_title}
                    </Link>
                </ItemFilm>
            ))}
        </ListFilm>
    )
};
export default FilmList;