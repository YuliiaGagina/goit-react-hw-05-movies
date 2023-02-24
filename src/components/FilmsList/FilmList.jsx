import { Link, useLocation } from 'react-router-dom';
import { List } from './FilmList.styled';
import { StyledLinkk } from './FilmList.styled';

export const FilmList = ({ popularFilms }) => {
  const location = useLocation();

  return (
    <>
      {popularFilms && (
        <List>
          {popularFilms.map(film => (
            <Link key={film.id} >
              <StyledLinkk  to={`/movies/${film.id}`}   state={{ from: location }}>
                {film.title || film.name}
              </StyledLinkk>
              <img width='300'
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt=""
              />
            </Link>
          ))}
        </List>
      )}
    </>
  );
};
