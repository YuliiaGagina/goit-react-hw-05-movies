import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoAboutActors } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Wrap } from './Cast.styled';
import { Tittle, Item, Warning } from './Cast.styled';
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
      .catch(error => error.message)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div className="cast">
      {isLoading && <Loader />}
      {cast !== null && (
        <>
          {' '}
          <Tittle>Actors are: </Tittle>
          {cast.length > 0 ? (
            <Wrap>
              {cast.slice(0, 10).map(actor => (
                <Item key={actor.id}>
                  {actor.profile_path ? (
                    <img
                      width="300"
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <img
                      width="370"
                      src={
                        'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg'
                      }
                      alt={actor.name}
                    />
                  )}

                  <p>{actor.name}</p>
                </Item>
              ))}
            </Wrap>
          ) : (
            <Warning>
              Sorry my friend, we can't give you any information!!!
            </Warning>
          )}
        </>
      )}
    </div>
  );
};
