import { Loader } from '../../components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

import { toast } from 'react-toastify';
import { StyledCast, StyledCastItem, StyledCastName } from './Cast.styled';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <StyledCast>
          {cast.map(({ id, name, character, profile_path }) => (
            <StyledCastItem key={id}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
                }
                alt={name}
                width="100"
                height="150"
              />
              <StyledCastName>{name}</StyledCastName>
              <p>Character: {character}</p>
            </StyledCastItem>
          ))}
        </StyledCast>
      ) : (
        <p>Sorry! We don't have any informtion about cast</p>
      )}
    </>
  );
};

export default Cast;
