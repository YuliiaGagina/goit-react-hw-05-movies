import React, { useEffect, useState } from 'react';
import { getPopularFilms } from 'services/api';
import { MovieList } from 'components/FilmsList/FilmList';

function HomePage() {
  const [popularFilms, setPopularFilms] = useState([]);
  useEffect(() => {
    getPopularFilms().then(({ results }) => {
      setPopularFilms(results);
    }).catch((error) => error.message);
  }, []);
  console.log(popularFilms);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList popularFilms={popularFilms} />
    </div>
  );
}

export default HomePage;
