import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCredits, addImages, addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieImages = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieImages = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/images'
        , API_OPTIONS);
        const json = await data.json();
        dispatch(addImages(json.results));
    }
    useEffect(()=>{
        getMovieImages();
    }, []);
}
export default useMovieImages;