import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Routes, Route } from "react-router-dom";
import { getFilmInformation } from "services/api";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import  {StyledNavLink } from '../App.styled';
import { Wrapper, Section, ButtonLink, ImageWrap, Title } from "./FilmDetails.styled";

 const Film = () =>{
const [film, setFilm] = useState({});
const { movieId} = useParams();
const location = useLocation();

const goBackLink = location?.state?.from ?? '/';

useEffect(() => {
    getFilmInformation(movieId)
  .then(setFilm)
  .catch(err => err.message);
}, [movieId]);


// film.genres.map(item => item.name).join(', ')

    return (
        <Section>
            <ButtonLink to={goBackLink}>Go back</ButtonLink>
            <Wrapper>
            <ImageWrap>
            <img  width="600" src={`https://image.tmdb.org/t/p/w500${film.poster_path
}`} alt="film.title" />
            </ImageWrap>
            <div>
            <h1>{film.title} ({(film.release_date)})</h1>
           
            <p> <b>User score:</b>  {Math.round(film.popularity)}%</p>
            <p> <b> Overview: </b> {film.overview}</p>
            <p> <b>Genres: </b> {}</p>
            </div>
            </Wrapper>

            <Title>Additional Information</Title>
            <StyledNavLink to="cast">Cast</StyledNavLink>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>

        

             <Routes>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            </Routes>
            

           
        </Section>
    )
}

export default Film;