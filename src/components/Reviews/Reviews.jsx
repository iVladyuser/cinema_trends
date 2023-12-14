import { Loader } from '../../components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { toast } from 'react-toastify';
import {
  StyledReviewsAutor,
  StyledReviewsItem,
  StyledReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const filmReview = async () => {
      try {
        setLoading(true);
        const reviews = await fetchMovieReviews(movieId);
        if (reviews.length === 0) {
          toast.info('Unfortunately there are no reviews');
        }
        setReviews(reviews);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    filmReview();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <StyledReviewsList>
          {reviews.map(({ id, author, content }) => (
            <StyledReviewsItem key={id}>
              <StyledReviewsAutor>Author: {author}</StyledReviewsAutor>
              <p>{content}</p>
            </StyledReviewsItem>
          ))}
        </StyledReviewsList>
      ) : (
        <p style={{ color: 'orangered' }}>
          Sorry! We don't have any reviews for this movie
        </p>
      )}
    </>
  );
};

export default Reviews;
