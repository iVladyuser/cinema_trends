import { useState, useEffect } from 'react';
import { Loader, MoviesList, SearchBar } from '../components';
import { fetchSearchFilm } from '../services/api';
import { onFetchError } from 'services/showError';
import { SectionStyle } from './Pages.styled';

// import { useSearchParams, useState, useLocation, Link } from 'react-router-dom';

const endPoint = 'search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [searchedFilm, setSearchFilm] = useState(null);

  // const queryFilm = searchParams.get('query');

  // const locatioon = useLocation();

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchSearchFilm(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films]);
  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   const value = e.currentTarget.elements.search.value;
  //   setSearchParams({ query: value });
  // };

  return (
    <>
      <SearchBar
      //onSubmit={onFormSubmit}
      />
      {/* <Link state={{ from: locatioon }} 
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
