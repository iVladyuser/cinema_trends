import { useState, useEffect } from 'react';
import { Loader, MoviesList } from '../components';
import { fetchTrendingMovies } from '../services/api';
import { toast } from 'react-toastify';
import { StyledTrendingTitle } from './Pages.styled';

const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchTrendingMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, [films]);
  return (
    <div>
      <StyledTrendingTitle>Movies in trend</StyledTrendingTitle>
      {loading && <Loader />}
      {films.length !== 0 && <MoviesList films={films} />}
    </div>
  );
};

export default Home;
