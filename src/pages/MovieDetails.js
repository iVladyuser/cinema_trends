import { Loader } from '../components';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { onFetchError } from 'services/showError';
import {
  AddListStyle,
  CardStyle,
  SectionStyle,
  WrapStyle,
  StyledLink,
} from './Pages.styled';
const endPoint = '/movie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieDetails(endPoint, movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;

  return (
    <SectionStyle>
      <StyledLink to={backLinkRef.current}>{'<<<< BACK'}</StyledLink>
      {loading && <Loader />}
      {movie && (
        <>
          <WrapStyle>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w342${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="200"
            />
            <CardStyle>
              <h3>{original_title}</h3>
              <p>
                <b>Release date:</b> {release_date}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Ranking:</b> {vote_average}
              </p>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </CardStyle>
          </WrapStyle>
          <h3>Additional information:</h3>
          <AddListStyle>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </AddListStyle>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </SectionStyle>
  );
};

export default MovieDetails;
