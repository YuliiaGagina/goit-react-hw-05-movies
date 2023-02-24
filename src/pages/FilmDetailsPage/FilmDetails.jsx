import { useState, useEffect } from 'react';

import { getFilmInformation } from 'services/api';
import { useParams, useLocation } from 'react-router-dom';

import { StyledNavLin } from '../../components/App.styled';
import {
  Wrapper,
  Section,
  ButtonLink,
  ImageWrap,
  Title,
} from './FilmDetails.styled';
import { Outlet } from 'react-router-dom';

const Film = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    getFilmInformation(movieId)
      .then(setFilm)
      .catch(err => err.message);
  }, [movieId]);

  return (
    <Section>
      <ButtonLink to={goBackLink}>Go back</ButtonLink>
      {film && (
        <Wrapper>
          <ImageWrap>
            <img
              width="600"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt="film.title"
            />
          </ImageWrap>
          <div>
            <h1>
              {film.title} ({film.release_date.slice(0, 4)})
            </h1>

            <p>
              {' '}
              <b>User score:</b> {Math.round(film.popularity)}%
            </p>
            <p>
              {' '}
              <b> Overview: </b> {film.overview}
            </p>
            <p>
              {' '}
              <b>Genres: </b> {film.genres.map(item => item.name).join(', ')}
            </p>
          </div>
        </Wrapper>
      )}

      <Title>Additional Information</Title>
      <StyledNavLin state={{ from: goBackLink }} to="cast">
        Cast
      </StyledNavLin>
      <StyledNavLin state={{ from: goBackLink }} to="reviews">
        Reviews
      </StyledNavLin>

      <Outlet />
    </Section>
  );
};

export default Film;
