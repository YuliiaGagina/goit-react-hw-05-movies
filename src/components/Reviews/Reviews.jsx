import { useState, useEffect } from "react";
import { useParams, } from "react-router-dom";
import { getRequersReview } from "services/api";
import { Loader } from "components/Loader/Loader";
import { Container, Tittle, Warning } from "./Reviews.styled"; 
export const Reviews = () =>{
    const {movieId} = useParams();
    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        if(movieId === null) return;
        getRequersReview (movieId)
        .then((data)=>{setReview(data.results)})
        .catch(error => error.message)
        .finally(setIsLoading(false));
    }, [movieId]);
    


    return (
        <div>
           
             {isLoading && <Loader />}
            <Tittle>Reviews are: </Tittle>
            {review.length <= 0 && <Warning>Sorry, there is no reviews!</Warning>}
            {review && review.map( item => (
                <Container key={item.name}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
                   
                </Container>
            ))}
        </div>
    )

}