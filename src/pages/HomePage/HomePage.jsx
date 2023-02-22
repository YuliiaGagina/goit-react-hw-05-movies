import React, { useEffect, useState } from 'react';
import { getPopularFilms } from 'services/api';
import { FilmList } from 'components/FilmsList/FilmList';
import { Section, SectionTitle } from './HomePage.styled';
function HomePage() {
  const [popularFilms, setPopularFilms] = useState([]);
  useEffect(() => {
    getPopularFilms().then(({ results }) => {
      setPopularFilms(results);
    }).catch((error) => error.message);
  }, []);
 
  return (
    <Section>
      <SectionTitle>Trending today</SectionTitle>
      {popularFilms &&  <FilmList popularFilms={popularFilms} />}
     
    </Section>
  );
}

export default HomePage;
