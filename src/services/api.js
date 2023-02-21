import axios from 'axios';




axios.defaults.baseURL  = 'https://api.themoviedb.org/3';
//   static API_KEY = '1deae1a36202e3ac8c29219a3d453e0f';
  
  axios.defaults.params = {
    api_key: 'fc9c8a8d778f1915a9b2d9762106d266',
    page: 1,


}
export const  getPopularFilms = async () => {
    const {data}= await axios.get(
      `trending/all/day`);
    
    return data;
}

export const getFilmsByQuery = async (query) => {
    const {data} = await axios.get(`/search/movie`, {
        params: {query : query,}
    });

    console.log(data);
    return data;
}

export const getFilmInformation = async (movieId) =>{
    const {data} = await axios.get(`/movie/${movieId}`);

    console.log(data);
    return data;
}

export const getInfoAboutActors = async (movieId) =>{
    const {data} = await axios.get(`/movie/${movieId}/credits`,{
        params : {per_page: 20, page: 1}
    });

    console.log(data);
    return data;
}

export const getRequersReview = async (movieId) =>{
    const {data} = await axios.get(`/movie/${movieId}/reviews`);

    console.log(data);
    return data;
}





// import axios from 'axios';


// axios.defaults.baseURL = 'https://api.themoviedb.org/3';


// export const getPopularFilms = async (page = 1) => {
//     const data  = await axios.get('/trending/get-trending',{
//         params :{
//             api_key : 'fc9c8a8d778f1915a9b2d9762106d266',
           
//         }
//     })
    
//     return data;
// };