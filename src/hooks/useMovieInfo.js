import { useDispatch } from "react-redux";
import { addMovieInfo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useMovieInfo = (title, movieId)=>{
   const dispatch = useDispatch();
const searchMovieTMDB = async () => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + title + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    const Info = json.results.filter((c)=>c.id==movieId);
    dispatch(addMovieInfo(Info));
    } 
   useEffect(()=>{
    searchMovieTMDB()
},[]);  
}




export default useMovieInfo;
