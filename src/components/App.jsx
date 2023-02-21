// import {getPopularFilms, getFilmsByQuery, getFilmInformation, getInfoAboutActors, getRequersReview} from 'services/api';
import { Loader } from './Loader/Loader';
// import HomePage from 'pages/HomePage/HomePage';
import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Routes, Navigate  } from 'react-router-dom';
import  {StyledNavLink,Nav } from './App.styled';
// import { Film } from './Film/FilmDetails';
// import { FilmsSearch } from 'pages/SearchFilm/SearchFilms';
import { Cast } from './Cast/Cast';
const LazyHomePage = lazy(() => import('pages/HomePage/HomePage'));
const LazySearchPage = lazy(() => import('pages/SearchFilm/SearchFilms'));
const LazyMoviesDetailsPage = lazy(() =>
 import('./Film/FilmDetails')
);



export const App = () => {
 
  
  return (
    <div>
    <header>
    <Nav>
      <StyledNavLink  to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
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
