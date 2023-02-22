import { useState, useEffect } from 'react';
import { useSearchParams, } from 'react-router-dom';
import { getFilmsByQuery } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { FilmList } from 'components/FilmsList/FilmList';
import { Loader } from 'components/Loader/Loader';


const FilmsSearch = () => {
  
  
  const [popularFilms, setPopularFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
   
    const query = searchParams.get('query');
    if (!query) return;
    setIsLoading(true);
    getFilmsByQuery(query)
    .then(data => {
        setPopularFilms(data.results);
        if (data.results.length > 0) {

            setIsEmpty(true);
        } else setIsEmpty(true);
      })
      .catch(erroer => {})
      .finally(setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
    {isLoading && <Loader />}
      <SearchForm  onSubmit={handleSubmit} />
      {popularFilms.length > 0 && <FilmList popularFilms={popularFilms} />}

      {isEmpty && <p>Sorry, there is no result</p>}
    </>
  );
};

export default FilmsSearch;
