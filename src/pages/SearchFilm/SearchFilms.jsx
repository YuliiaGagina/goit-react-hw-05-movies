import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getFilmsByQuery } from "services/api";
import { SearchForm } from "components/SearchForm/SearchForm";
import {MovieList} from 'components/FilmsList/FilmList';


 const FilmsSearch = () => {
    const [popularFilms, setPopularFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

 
  useEffect(() =>{
    const query = searchParams.get('query');
    if(!query) return;
    getFilmsByQuery(query)
    .then((data)=>{setPopularFilms(data.results)})
    .catch((erroer) =>{})
    .finally(()=>{})

  }, [searchParams])

  const handleSubmit = query => {
    setSearchParams({query});
  }
console.log(popularFilms);
  return (
    <>
    
  
    <SearchForm onSubmit={handleSubmit} />
    {popularFilms.length > 0 && <MovieList popularFilms={popularFilms} /> }
    
    {popularFilms.length <= 0  && <p>Sorry, there is no result</p>}
   
    </>
  )

}

export default  FilmsSearch;