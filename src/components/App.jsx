import { Loader } from './Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import  {StyledNavLin,Nav } from './App.styled';

const LazyHomePage = lazy(() => import('pages/HomePage/HomePage'));
const LazySearchPage = lazy(() => import('pages/SearchFilm/SearchFilms'));
const LazyMoviesDetailsPage = lazy(() =>
 import('./FilmDetails/FilmDetails')
);



export const App = () => {
 
  
  return (
    <div>
    <header>
    <Nav>
      <StyledNavLin  to="/">Home</StyledNavLin>
      <StyledNavLin to="/movies">Movies</StyledNavLin>
    </Nav>
  </header>
  <main>
    <Suspense falback={<Loader/>}>
  <Routes >
        <Route path="/" element={<LazyHomePage />} />
        <Route path="/movies" element={<LazySearchPage/>} />
        <Route path="/movies/:movieId/*" element={<LazyMoviesDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
       
  </Routes>
  </Suspense>
  </main>
  </div>
  );
};
