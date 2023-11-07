import { useState, useEffect } from 'react';
import { Loader, MoviesList } from '../components';
import { fetchTrendingFilms } from '../services/api';
import { onFetchError } from 'services/showError';
import { SectionStyle } from './Pages.styled';

const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchTrendingFilms(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films]);
  return (
    <div>
      <SectionStyle>
        <h2>Movies in trend</h2>
        {loading && <Loader />}
        <MoviesList films={films} />
      </SectionStyle>
    </div>
  );
};

export default Home;
