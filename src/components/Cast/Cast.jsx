import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';
import { getInfoAboutActors } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Wrap } from './Cast.styled';
import { Tittle, Item } from './Cast.styled';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (movieId === null) return;
    getInfoAboutActors(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => error.message).finally(setIsLoading(false));
  }, [movieId]);

  console.log(cast);

  return (
    <div className="cast">
         {isLoading && <Loader />}
      {cast !== null && (
        <>
          {' '}
          <Tittle>Actors are: </Tittle>
          <Wrap>
            {cast.slice(0, 10).map(actor => (
              <Item key={actor.id}>
                <img
                  width="300"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
              </Item>
            ))}
          </Wrap>
        </>
      )}
    </div>
  );
};
