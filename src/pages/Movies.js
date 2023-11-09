import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader, MoviesList, SearchBar } from '../components';
import { Notify } from 'notiflix';
import { fetchSearchMovie } from '../services/api';
import { onFetchError, paramsForNotify } from 'services/showError';
import { SectionStyle } from './Pages.styled';

// import { useSearchParams, useState, useLocation, Link } from 'react-router-dom';

const endPoint = '/search/movie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchQuery = searchParams.get('query');

  // const location = useLocation();

  useEffect(() => {
    if (!searchQuery) return;

    if (films.length > 0) {
      return;
    }
    setLoading(true);
    fetchSearchMovie(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films, searchQuery]);

  const onSubmitSearchBar = value => {
    const searchValue = value.trim().toLowerCase().split(' ').join('+');

    if (searchValue === '') {
      setSearchParams({});
      setFilms([]);
      Notify.info('Enter your request, please!', paramsForNotify);
      return;
    }

    if (searchValue === searchQuery) {
      Notify.info('Enter new request, please!', paramsForNotify);
      return;
    }
    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <>
      <SearchBar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      {/* <Link state={{ from: location }} 
      //key={} to={``} 
      /> */}
      <SectionStyle>
        {loading && <Loader />}
        <MoviesList films={films} />
      </SectionStyle>
    </>
  );
};

export default Movies;
