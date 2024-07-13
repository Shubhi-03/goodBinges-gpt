import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendtaions, addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useRecommenations = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieRecommendations = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/recommendations', API_OPTIONS);
        const json = await data.json();
        

        
        dispatch(addRecommendtaions(json.results));
    }
    useEffect(()=>{
        getMovieRecommendations();
    }, []);
}
export default useRecommenations;