import { Loader } from '../../components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { onFetchError } from '../../services/showError';
import { ListReviewStyle, ReviewStyle } from './Reviews.styled';

const endPoint = '/movie';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieReviews(endPoint, movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return <>
  <h3>Reviews:</h3>
  {loading && <Loader />}
  {reviews.length !== 0 ?
      <ListReviewStyle>
          {reviews.map(({ id, author, content }) =>
              <ReviewStyle key={id}>
                  <p><b>Author:</b> {author}</p>
                  <p>{content}</p>
              </ReviewStyle>)}
      </ListReviewStyle> :
      <p>Sorry! We don't have any reviews for this movie</p>}
</>
};


export default Reviews;
