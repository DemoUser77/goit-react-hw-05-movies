import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/Api';
import { ReviewsList,ReviewsItem,ReviewsDescr } from 'components/Reviews/Reviews.styled';
const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchReviews()
    }, [movieId]);


    return reviews.length === 0 ? (
        <h3>No Reviews</h3>
    ) : (
        <ReviewsList>
            {reviews.map(({ id, author, content }) => (
                <ReviewsItem key={id}>
                    <ReviewsDescr>{author}</ReviewsDescr>
                    <ReviewsDescr>{content}</ReviewsDescr>
                </ReviewsItem>
            ))}
        </ReviewsList>
    )

};
export default Reviews;