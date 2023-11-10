import { Loader } from '../../components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import { onFetchError } from '../../services/showError';
import { ListCastStyle, ItemCastStyle, CastHaracter } from './Cast.styled';

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
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <h3>Cast :</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ListCastStyle>
      {cast.map(({ id, name, character, profile_path }) =>
                    <ItemCastStyle key={id}>
                        <b>{name}</b>
                        <CastHaracter>Character: {character}</CastHaracter>
                        <img src={profile_path ?
                        `http://image.tmdb.org/t/p/w185${profile_path}` :
                        'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'}
                        alt={name} width="100" height="150" />
            </ItemCastStyle>
          )}
        </ListCastStyle>
      ) : (
        <p>Sorry! We don't have any informtion about cast</p>
      )}
    </>
  );
};

export default Cast;
