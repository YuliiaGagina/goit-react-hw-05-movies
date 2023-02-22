import { Link, useLocation } from 'react-router-dom';
import { List } from './FilmList.styled';
import { Linkk } from './FilmList.styled';

export const FilmList = ({ popularFilms }) => {
  const location = useLocation();

  return (
    <>
      {popularFilms && (
        <List>
          {popularFilms.map(film => (
            <Link to={`/movies/${film.id}`}  key={film.id}>
              <Linkk  state={{ from: location }}>
                {film.title || film.name}
              </Linkk>
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
