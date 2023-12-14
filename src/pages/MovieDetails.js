import { Loader } from '../components';
import { Suspense, useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { toast } from 'react-toastify';
import {
  AdditionalInformation,
  StyledBox,
  StyledDescrip,
  StyledGoToBack,
  StyledInformationBox,
  StyledInformationTitle,
  StyledLink,
  TitleWithRation,
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
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,

    release_date,
    genres,
    vote_average,
    overview,
  } = movie;

  return (
    <div>
      {loading && <Loader />}
      {movie && (
        <>
          <StyledGoToBack to={backLinkRef.current}>
            <FaArrowLeft /> back
          </StyledGoToBack>

          <StyledBox>
            <div>
              <img
                src={
                  poster_path
                    ? `http://image.tmdb.org/t/p/w342${poster_path}`
                    : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
                }
                alt={title}
                width="300px"
              />
            </div>

            <StyledDescrip>
              <TitleWithRation>
                <h1 style={{ color: 'orangered' }}>{title}</h1>
                <h3>
                  Rating: {vote_average} <FaStar style={{ color: 'gold' }} />
                </h3>
              </TitleWithRation>

              <p>
                <b>Release date:</b> {release_date}
              </p>

              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </StyledDescrip>
          </StyledBox>
          <AdditionalInformation>
            <StyledInformationTitle>
              Additional information
            </StyledInformationTitle>

            <StyledInformationBox>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </StyledInformationBox>
          </AdditionalInformation>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
