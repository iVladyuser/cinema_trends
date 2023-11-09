import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Cast, Reviews, Layout, Loader } from 'components';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" elements={<MovieDetails />}>
            <Route path="" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>cast
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
