import { Link, useLocation } from "react-router-dom";
import { List } from './FilmList.styled';




export const MovieList = ({popularFilms}) =>{
    const location = useLocation();



    return(
        <>
             <List>
                {popularFilms.map(film => <li key={film.id}><Link to={`/movies/${film.id}`} state={{from: location}}>{film.title}</Link></li> 
               )}
               
            </List>
        </>
    )
}