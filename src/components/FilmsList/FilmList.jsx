import { Link, useLocation } from 'react-router-dom';
import { List } from './FilmList.styled';
import { StyledLinkk, FilmTitle } from './FilmList.styled';

export const FilmList = ({ popularFilms }) => {
  const location = useLocation();

  return (
    <>
      {popularFilms && (
        <List>
          {popularFilms.map(film => (
            
              <StyledLinkk key={film.id} to={`/movies/${film.id}`}   state={{ from: location }}>
                <FilmTitle> {film.title || film.name}</FilmTitle>
               
                <img width='300'
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt=""
              />
              </StyledLinkk>
             
           
          ))}
        </List>
      )}
    </>
  );
};
