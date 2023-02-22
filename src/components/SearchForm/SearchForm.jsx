import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Form, Input,Button } from './SearchForm.styled';
export const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState("");
 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
       
        
    }
    const location = useLocation();
    
    
    return (
        <Form  state={{from: location}}  onSubmit={handleSubmit}>
            <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button  type="submit">Search</Button>
          
        </Form>
    )
}