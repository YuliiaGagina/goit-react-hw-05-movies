import { Loader } from './Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from 'pages/Header/Header';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const LazyHomePage = lazy(() => import('pages/HomePage/HomePage'));
const LazySearchPage = lazy(() => import('pages/SearchFilm/SearchFilms'));
const LazyMoviesDetailsPage = lazy(() =>
  import('../pages/FilmDetailsPage/FilmDetails')
);

export const App = () => {
  return (
    <div>
      <main>
        <Suspense falback={<Loader />}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<LazyHomePage />} />
              <Route path="/movies" element={<LazySearchPage />} />
              <Route
                path="/movies/:movieId"
                element={<LazyMoviesDetailsPage />}
              >
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
