import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader, MoviesList, SearchBar } from '../components';
import { Notify } from 'notiflix';
import { fetchSearchMovie } from '../services/api';
import { paramsForNotify } from 'services/showError';
import { toast } from 'react-toastify';

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

    setLoading(true);
    fetchSearchMovie(endPoint, searchQuery)
      .then(data => {
        if (data.length === 0) {
          toast.error('No movies found for your query!');
        } else {
          setFilms(data.results);
        }
      })
      .catch(error => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  }, [searchQuery]);

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

      {loading && <Loader />}
      <MoviesList films={films} />
    </>
  );
};

export default Movies;
