import { useLocation } from 'react-router-dom';
import {
  ItemStyle,
  ListStyle,
  StyledTitleMovie,
  StyledPosterMovie,
} from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ListStyle>
      {films.map(({ id, title, poster_path }) => (
        <ItemStyle key={id}>
          <StyledPosterMovie
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_1280.png`
            }
            alt={title}
            width="300"
          />
          <StyledTitleMovie state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </StyledTitleMovie>
        </ItemStyle>
      ))}
    </ListStyle>
  );
};

export default MoviesList;
